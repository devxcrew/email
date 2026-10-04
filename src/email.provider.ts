import nodemailer from "nodemailer";
import { z } from "zod";

const messageSchema = z.object({
  to: z.email().max(254),
  subject: z.string().trim().min(1).max(200).refine(value => !/[\r\n]/.test(value)),
  text: z.string().min(1).max(100_000),
  html: z.string().max(200_000).optional(),
}).strict();

export type EmailMessage = z.infer<typeof messageSchema>;
export interface EmailDelivery {
  send(message: EmailMessage): Promise<{ messageId: string }>;
}
export class EmailDeliveryError extends Error {
  constructor(public readonly code: "configuration" | "delivery" | "unavailable") {
    super(code === "configuration" ? "Email configuration is invalid." : "Email delivery is unavailable.");
  }
}

export function createEmailProvider(environment: NodeJS.ProcessEnv = process.env) {
  const parsed = z.object({
    host: z.string().trim().min(1),
    port: z.coerce.number().int().min(1).max(65535),
    secure: z.enum(["0", "1"]),
    user: z.string().optional(),
    password: z.string().optional(),
    from: z.email(),
  }).safeParse({
    host: environment.SMTP_HOST,
    port: environment.SMTP_PORT ?? 587,
    secure: environment.SMTP_SECURE ?? "0",
    user: environment.SMTP_USER || undefined,
    password: environment.SMTP_PASSWORD || undefined,
    from: environment.EMAIL_FROM,
  });
  if (!parsed.success) throw new EmailDeliveryError("configuration");
  const config = parsed.data;
  if (Boolean(config.user) !== Boolean(config.password)) throw new EmailDeliveryError("configuration");
  const transport = nodemailer.createTransport({
    host: config.host, port: config.port, secure: config.secure === "1",
    requireTLS: config.secure !== "1",
    auth: config.user ? { user: config.user, pass: config.password } : undefined,
    connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 15_000,
    tls: { rejectUnauthorized: true },
  });
  return {
    async send(message: EmailMessage) {
      const validated = messageSchema.parse(message);
      try {
        const result = await transport.sendMail({ from: config.from, ...validated });
        if (!result.accepted?.includes(validated.to)) throw new EmailDeliveryError("delivery");
        return { messageId: String(result.messageId) };
      } catch { throw new EmailDeliveryError("delivery"); }
    },
    async verify() {
      try { await transport.verify(); }
      catch { throw new EmailDeliveryError("unavailable"); }
    },
    close: () => transport.close(),
  };
}

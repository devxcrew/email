import test from "node:test";
import assert from "node:assert/strict";
import { createEmailProvider, EmailDeliveryError } from "../dist/email.provider.js";

test("email configuration rejects missing and partial credentials safely", () => {
  for (const environment of [{}, { SMTP_HOST: "localhost", EMAIL_FROM: "sender@example.com", SMTP_USER: "user" }]) {
    assert.throws(() => createEmailProvider(environment), error =>
      error instanceof EmailDeliveryError && error.code === "configuration" && !error.message.includes("user"));
  }
});

test("header injection and untrusted fields fail before delivery", async () => {
  const provider = createEmailProvider({ SMTP_HOST: "localhost", EMAIL_FROM: "sender@example.com" });
  try {
    await assert.rejects(provider.send({ to: "person@example.com", subject: "subject\r\nBcc: other@example.com", text: "message" }));
    await assert.rejects(provider.send({ to: "person@example.com", subject: "subject", text: "message", from: "attacker@example.com" }));
  } finally { provider.close(); }
});

# Email delivery

Generic SMTP transport for owner-defined messages.

Use createEmailProvider(environment) to read server-only SMTP configuration.
The provider exposes send(message), verify() and close().
Messages require one recipient, subject and text. Optional HTML is escaped by its owning template.
Platform owns identity templates and token lifecycle. Email owns delivery only.

SMTP_HOST and EMAIL_FROM enable delivery. SMTP_USER and SMTP_PASSWORD must be paired.
SMTP_SECURE=1 uses TLS immediately. Otherwise the provider requires STARTTLS.
Verification and delivery errors are safe and never return credentials or message bodies.

Configure credentials in ignored environment files. Run provider.verify() against the configured service before production.
No real configured-provider delivery has been claimed by unit tests.

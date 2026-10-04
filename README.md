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

## Delivery failure ownership

This provider returns a receipt only after the transport accepts the intended recipient.
Timeouts are ambiguous: the remote service can accept a message before the local request fails.
Platform owns token invalidation, explicit resend, and recovery usability. See the Platform identity delivery contract.
This provider does not retry automatically. It does not claim exactly-once delivery.
The MIT license covers first-party code. Dependencies retain their own license terms.

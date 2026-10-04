# Email addon owner plan

## Independent review - 2026-10-04

Authenticated cloud connection passed before this review. Deployed repository metadata remains null.
`npm run verify` passed the build and two configuration/input tests.
The provider validates recipients and content, requires TLS, verifies certificates, bounds timeouts, and hides transport errors.
Cxsun injects its public provider when EMAIL_ENABLED=1. Platform owns message templates and lifecycle tokens.
The independent local Git repository exists. It has no commit or remote.
Tasks 02.07 and disabled-profile checks are in-review. Task 05.05 remains blocked on real provider configuration.
Task 06.07 needs verified SMTP connection, real recipient delivery, safe failure behavior, and full invitation/recovery workflows.
A timeout can follow remote delivery. Define retry and token usability behavior before claiming reliable delivery.
The package lacks owner maintenance, version alignment, LF, and release-check scripts. Add these before standard release acceptance.
No real SMTP verification, delivery, publication, deployment, commit, or push occurred.


Date: 2026-10-04
Status: Provider implemented locally. Integration and real delivery acceptance remain incomplete.
Master: D:/codexsun/projects/cxsun/agent/PLAN.md.

## Purpose and phase numbering

Use the master phase numbers and task IDs below. Do not restart numbering locally.
Keep business code module-owned and communicate through public providers.
Retrieve authenticated owner guidance before implementation.
Use live file-backed SQLite for persistence acceptance. Use separate files for destructive tests.
Record actual check results in TASK.md and AUDIT.md.

### 8.8 Email and required addons — addons/email

Purpose: delivery needed for the accepted identity lifecycle.
Legacy references: E01-E04.

| ID | Work | Acceptance |
| --- | --- | --- |
| 01.08 | Audit owner location and determine required delivery/service scope | Explicit owner and public boundary |
| 02.07 | Define email provider, template, security and failure contracts | Identity depends on a public delivery contract |
| 05.05 | Implement invitation/recovery email and required retries/status evidence | Token secrecy, delivery failure and real configured provider verified |
| 06.07 | Verify selected addon behavior and disabled configuration | Required profile works without accidental infrastructure dependency |

Files, notifications, search and cache require explicit use cases before becoming release requirements.
Selected services require scope, limits, failure handling and operational evidence.

## Dependencies and acceptance

Phase 01 establishes the actual baseline before implementation.
Phase 02 defines public contracts before backend and frontend tasks.
The coordinator reviews actual changes and verifies combined behavior in Cxsun.
Task states: planned, ready, active, in-review, changes-required, blocked, accepted.
Release preparation does not authorize commit, push, deployment or publication.

## Task checkbox tracking

Use [owner phase checklist](TASK.md) for current checkboxes and numbered substeps.
Use [master checklist](D:/codexsun/projects/cxsun/agent/CHECKLIST.md) for all owners and shared release gates.
Keep task IDs unchanged. Check a parent only after all its acceptance criteria pass.

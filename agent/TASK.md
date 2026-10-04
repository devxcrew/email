# Current task

## Completion wave - 2026-10-04

Initial 0.1.0 source is committed to devxcrew/email. Maintenance and the five-file artifact check exist. The user selected MIT in this wave. Real SMTP testing remains deferred. Three-OS CI is added.

- [x] Reconcile current status with the GitHub source release and latest owner audit.
- [x] Retrieve fresh authenticated cloud governance before this wave.
- [x] Apply the user-selected MIT license to first-party source, package metadata and lock metadata.
- [x] Record this wave's affected checks and accept only gates with direct evidence.

npm run release:check passed two tests, build, metadata and a five-file MIT package. Real SMTP remains deferred.
- [x] Prepare isolated CI coverage for the target Windows/Linux/macOS runtime.
- [ ] Verify this wave's exact GitHub CI results.


Use projects/cxsun/agent/REMAINING-WORK.md for ordered cross-owner dependencies.
Production deployment and real SMTP acceptance remain deferred. No pending external gate is marked complete.

## Prior records

<!-- foundation-checklist:start -->

## Numbered phase checklist

Master: [all foundation tasks](D:/codexsun/projects/cxsun/agent/CHECKLIST.md).

Updated: 2026-10-04. Checked steps have recorded local evidence.
Parents retain incomplete acceptance gates. Mail tests and production deployment are deferred by user.

### Phase 01 - Baseline and ownership

- [x] **01.08 Establish Email owner and delivery scope** - accepted. Owner: email.
  - [x] 01.08.1 SMTP owner, public boundary and local Git repository established.

### Phase 02 - Public contracts and release scope

- [ ] **02.07 Define public delivery and failure contracts** - in-review. Owner: email.
  - [x] 02.07.1 TLS transport, validation, timeouts and safe errors implemented.
  - [ ] 02.07.2 Accept timeout, retry and token usability policy with Platform.

### Phase 05 - Tools, guidance and delivery

- [ ] **05.05 Deliver identity invitation and recovery messages** - deferred by user. Owner: email.
  - [x] 05.05.1 Email provider wired through public Platform delivery contract.
  - [ ] 05.05.2 Configure approved provider and recipient, verify real delivery and failure/retry handling. Deferred by user.

### Phase 06 - Verification and operations

- [ ] **06.07 Verify provider and disabled delivery profile** - deferred by user. Owner: email.
  - [x] 06.07.1 Two configuration tests, build and truthful disabled behavior pass.
  - [ ] 06.07.2 Verify actual TLS provider connection and recipient lifecycle delivery. Deferred by user.
  - [x] 06.07.3 Verify standalone maintenance, version alignment, LF and five-file release artifact.
  - [ ] 06.07.4 Select distribution license and approve initial package publication.

<!-- foundation-checklist:end -->

## Earlier task records

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
Master: D:/codexsun/projects/cxsun/agent/PLAN.md.
Owner plan: agent/PLAN.md.
Current tasks: 02.07, 05.05, 06.07.
Status: in-review for the provider contract. Real delivery is blocked on provider configuration.

## Current implementation evidence

Independent authenticated cloud MCP retrieval passed for APP_ID=email.
The public package owns SMTP delivery, bounded timeouts, TLS, validation, and safe delivery errors.
Platform owns invitation and recovery templates, tokens, and lifecycle rules.
`npm run verify` passed the TypeScript build and two input/configuration tests.
No configured SMTP verification or real recipient delivery has passed.
Cxsun injects the public provider when enabled. Verify the complete lifecycle with real configured delivery.
The local Git boundary exists. Deployed MCP metadata and release acceptance remain pending.

## Verified baseline

Directory was empty before the original planning records. That historical baseline predates the implementation above.
Planning records were prepared under authenticated Cxsun master context. Executable owner setup and guidance connection are prerequisites to future implementation.

## Next work

Read the owner plan and master dependencies.
Complete the current phase inventory and report concrete gaps before implementation.
Preserve global task numbering and existing user data and code.
Do not mark downstream tasks accepted without coordinator review and integration evidence.

## Local release preparation - 2026-10-04

Authenticated MCP retrieval passed. Standalone installed Tools 0.1.7 owns maintenance and version checks.
release:check passes build, two tests, version alignment, line endings and package dry run.
The package contains five public files. Environment files, tests and agent history are excluded.
The license is explicitly UNLICENSED. No distribution rights were invented. A license decision remains required for public release.
The initial version remains 0.1.0. No publication occurred.
Real provider and recipient delivery testing is deferred by the user's explicit instruction.
No delivery acceptance is claimed. Platform owns retry and token workflow acceptance.
## Workspace GitHub release - 2026-10-04

Release title: Deliver initial email source.
Record the public TLS SMTP provider, configuration validation, bounded transport and disabled delivery behavior. Real SMTP acceptance remains deferred.
Update version records, review release checks, then commit and push the current owner branch.
Preserve existing task history and incomplete acceptance gates.

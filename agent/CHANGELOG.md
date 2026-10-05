# Changelog

## Version State

Current version: 0.1.1

Release tag: v-0.1.1

Changelog label: v 0.1.1

## v-0.1.1

### [v 0.1.1] 2026-10-05 12:47 pm - Record Email acceptance and exclude local artifacts

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Record two tests and source consumer acceptance; add changelog scripts and ignore local artifacts. Real SMTP acceptance remains separate.

### [v 0.1.1] 2026-10-05 8:38 am - Align workspace packages

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Align maintenance tooling with @devxcrew/tools@0.1.8 and record the verified workspace package set.

## v-0.1.0

### Local completion preparation - 2026-10-04

- Reconcile task status and preserve historical evidence.
- Apply the user-selected MIT license to first-party code and packed metadata.
- Add or expand isolated Windows, Linux and macOS source CI.
- npm run release:check passed two tests, build, metadata and a five-file MIT package. Real SMTP remains deferred.
- Publication and external acceptance gates remain open.


### [v 0.1.0] 2026-10-04 5:00 pm - Deliver initial email source

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Record TLS SMTP transport, validation, timeouts and safe disabled delivery. Real SMTP acceptance remains deferred.

### [v 0.1.0] 2026-10-04 12:00 pm - Prepare initial email provider

Generic TLS SMTP provider and standalone maintenance scripts. No package publication occurred.

## Dependency alignment - 2026-10-05

- [x] Align consumed shared packages and common direct dependency versions.
- [x] Install dependencies with lifecycle scripts disabled.
- [x] Keep app dependency ownership and public peer ranges.
- [x] Exclude Veyrezio from this change.

Source version: 0.1.1. Published package archives retain their existing versions.
The baseline is recorded in projects/cxsun/agent/DEPENDENCY-BASELINE.json.


## Unreleased alignment - 2026-10-05

Release checks (two tests) and fresh source consumers passed. Source 0.1.1 remains unpublished; real SMTP remains untested.

Authenticated live MCP verification passed. See the [alignment audit](D:/codexsun/projects/cxsun/agent/SHARED-ALIGNMENT.md). Version numbers remain unchanged. No release delivery was performed by this audit.

## npm release verification - 2026-10-05

- Verify latest package @devxcrew/email 0.1.1 and registry archive checksums.
- Verify a fresh five-package registry installation, public imports, TypeScript UI imports and Tools CLI.
- Pass persisted SQLite migrations and reopen with Framework and Platform.
- Production dependency audit reports zero vulnerabilities. SMTP and deployment remain deferred.

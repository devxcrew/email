# Changelog

## Version State

Current version: 0.1.1

Release tag: v-0.1.1

Changelog label: v 0.1.1

## v-0.1.1

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

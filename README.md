# Katalyst

Local-first foundation for an AI-powered development platform with a TypeScript CLI engine and a polished Next.js dashboard.

## Packages

- `@katalyst/cli-engine`: registers the `prd` workflow, reads local context, writes generated artifacts, and launches the viewer.
- `@katalyst/local-dashboard`: renders generated PRDs in a Tailwind-powered local UI.

## Quick start

```bash
npm install
npm run build
npm run prd -w @katalyst/cli-engine -- "Draft a PRD for onboarding"
```

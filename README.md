# OrchardPulse Operations

OrchardPulse is a React and TypeScript operations console for orchard harvest teams. It brings field queues, crew assignments, irrigation runs, quality samples, packing schedules, cold-storage priorities, equipment inspections, grower deliveries, outbound loads, and operational alerts into one responsive workspace.

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

The component tests intentionally exercise each stateful ordering workflow on the committed base. They cover initial rendering and the real reorder action while keeping user-entered row state outside their assertions.

## Structure

- `src/App.tsx` composes the operational dashboard.
- `src/features/` contains independent domain workflows.
- `src/features/reorderWorkflows.test.tsx` provides focused behavioral coverage for each reorderable workflow.
- `src/test/setup.ts` installs shared DOM matchers.

The repository is self-contained and does not require environment variables, external services, or seeded databases.

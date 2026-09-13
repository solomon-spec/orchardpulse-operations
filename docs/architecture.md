# Architecture

OrchardPulse uses a small feature-oriented React architecture. The application shell owns page composition, while each workflow component owns only the local ordering state needed for its operational interaction.

Domain records have stable IDs, user-facing labels, and the minimum additional fields required by the view. No component relies on network state or browser storage, keeping the base deterministic for clean-checkout verification.

Tests render feature components directly so failures identify one workflow instead of the full dashboard. The production entry point remains a conventional Vite root with no runtime configuration.

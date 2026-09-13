# Testing strategy

Every reorderable workflow has a colocated component test. The test first checks the committed base order, invokes the real user-facing ordering control, and then verifies the visible order.

These base tests deliberately avoid asserting user-entered control state after a reorder. That keeps the known keyed-rendering defect intact while proving that the relevant component and interaction path are executable.

The application shell and shared presentational components have separate focused tests. All tests run under jsdom through Vitest and Testing Library.

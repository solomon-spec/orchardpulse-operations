const react = require('@vitejs/plugin-react')

module.exports = {
  // The Minerva evaluator protects repository files while running tests.
  // A CommonJS config loads without Vite creating a temporary module beside
  // this file, and the shared cache also lives outside the checkout.
  cacheDir: '/tmp/orchardpulse-operations-vite-cache',
  build: {
    outDir: '/tmp/orchardpulse-operations-dist',
    emptyOutDir: true,
  },
  plugins: [react.default()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
}

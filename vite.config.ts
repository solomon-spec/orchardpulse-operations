import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The Minerva evaluator protects repository files while running tests.
  // Keep Vite and Vitest's shared cache outside the checkout so a read-only
  // repository behaves exactly like a normal local test run.
  cacheDir: '/tmp/orchardpulse-operations-vite-cache',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})

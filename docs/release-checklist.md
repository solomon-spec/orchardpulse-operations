# Release checklist

Before packaging a Minerva repository base:

1. Run `npm ci` from a clean clone.
2. Run the full test suite, TypeScript check, ESLint, and production build.
3. Confirm every candidate line belongs to the Scratch Bait author identity.
4. Confirm the Git history contains at least 30 meaningful commits and more than 90 Git objects.
5. Confirm the archive contains `.git`, the real GitHub `origin`, `package-lock.json`, and all source tests.
6. Extract the exact archive and verify its HEAD and Git object database before upload.

# Vicky the Bat - fixed release v3

Canonical local release SHA-256: `fd4b1a319da6f27bd0449d0ff566d03f0b539c47a4aff9dacec77cfd9b394068`

This release fixes the wing-render runtime ReferenceError and is the build to package for iOS/App Store submission.

## Canonical paths after local push
- `vicky-the-bat/index.html` - web release
- `vicky-the-bat-mobile/source/vicky.html` - mobile source

## Required local sync
Copy the fixed `vicky-the-bat-final-release.html` to both canonical paths, then run the Capacitor build/sync commands documented in `vicky-the-bat-mobile/README.md`.

Do not submit an older build whose SHA-256 differs from the checksum above.

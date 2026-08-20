# Pinky Bat

Pinky Bat is an offline-first arcade flyer for iOS and Android. Fly a cute pink-winged bat through increasingly difficult obstacles across beaches, New York City, desert scenery and more.

## Gameplay

- Touch/hold to apply repeated jerky upward impulses.
- Release to fall.
- Avoid obstacles and maximise distance in metres.
- Difficulty increases as distance grows.
- Unlock bat styles and save best scores locally.
- Designed to work offline after installation.

## Development

This project uses Capacitor with a lightweight HTML/CSS/JavaScript game client.

```bash
npm install
npm test
npm run build:web
npx cap add android
npx cap add ios
npx cap sync
```

Android builds require Android Studio/JDK and iOS builds require macOS/Xcode.

## Store preparation

See `BUILD_NOTES.md` and the files under `store-listing/` for release notes, listing copy, and privacy notes.

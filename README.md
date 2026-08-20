# Vicky the Bat

Vicky the Bat is an offline-first arcade flyer for iOS and Android. Hold to flap upward with repeated jerky impulses, release to fall, avoid obstacles, collect hearts, and maximise distance in metres while touring a non-repeating world of 115 destinations.

## Current build

- Vicky the Bat is the active game. The old Vicky the Magpie prototype is no longer part of the final game.
- City progression never repeats during a run.
- Speed increases in stages every five cities and continues to build within each stage.
- Hearts form reachable zig-zag patterns; collecting them bursts them into pink particles and gradually makes Vicky more pink, reaching full pink only at 300 hearts.
- The airplane completes a full left-to-right fly-by, changes flags during the pass, and resets only after it is fully beyond the right edge.
- Major destinations use detailed landmark-style scenes, with richer city-specific art for Paris, Sydney, Agra, San Francisco, Mexico City and the North Pole.
- Best distance is stored locally and the game is designed to work offline after installation.

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

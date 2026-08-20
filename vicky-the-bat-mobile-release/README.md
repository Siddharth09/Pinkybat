# Vicky the Bat - Release Mobile Build

This folder is the clean release wrapper for the audited Vicky the Bat web game.

## Source of truth

The game source is `source/vicky.html.gz.b64`. The build script decompresses it into `www/index.html`.

## Verify on a Mac

```bash
cd vicky-the-bat-mobile-release
npm install
npm test
```

Expected result: the build creates `www/index.html` and verification reports syntax/UI checks passed, 115 unique cities, one `drawBat`, and one `draw` renderer.

## iOS

```bash
npm run cap:add:ios
npm run cap:sync
npm run cap:open:ios
```

In Xcode, set the Apple Developer Team and confirm bundle identifier `com.vickybat.game`. Run on a Simulator first, then on a real iPhone. For TestFlight/App Store, use Archive -> Distribute App.

## Android

```bash
npm run cap:add:android
npm run cap:sync
npm run cap:open:android
```

Open the App module in Android Studio, test on an emulator and real device, configure signing, then build an AAB.

## Release rule

Do not use the old Magpie project or any prototype. Do not hand-edit `www/index.html`; regenerate it with `npm run build:web`.

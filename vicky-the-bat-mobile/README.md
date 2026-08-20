# Vicky the Bat Mobile

This folder is the mobile-ready Capacitor project for the audited Vicky the Bat build.

## Build the web bundle

```bash
cd vicky-the-bat-mobile
npm install
npm run build:web
npm test
```

## iOS

```bash
npm run cap:add:ios
npm run cap:sync
npm run cap:open:ios
```

Build/sign the App project in Xcode for a simulator, TestFlight, or App Store release.

## Android

```bash
npm run cap:add:android
npm run cap:sync
npm run cap:open:android
```

Build/sign the Android project in Android Studio.

The game is packaged offline-first. Ads, analytics, and AppLovin can be integrated later without moving the core game loop to a server.

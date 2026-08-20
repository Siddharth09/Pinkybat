# Deployment checklist

Use only this release folder and the shared source bundle.

## Web

```bash
cd vicky-the-bat-web-release
npm install
npm run build
python3 -m http.server 8080 -d dist
```

For GitHub Pages, the workflow `.github/workflows/vicky-web-pages.yml` builds the same source and deploys `vicky-the-bat-web-release/dist`.

## Mobile

```bash
cd vicky-the-bat-mobile-release
npm install
npm test
npm run cap:add:ios
npm run cap:sync
npm run cap:open:ios
```

For Android, use `npm run cap:add:android`, `npm run cap:sync`, and `npm run cap:open:android`.

Before any store submission, run the full real-device checklist in the release handoff document. Static verification does not replace device QA or signing.

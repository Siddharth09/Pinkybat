# Vicky the Bat - Web Release

The release web build is generated from the exact same audited source bundle used by mobile.

## Local web deployment

```bash
cd vicky-the-bat-web-release
npm install
npm run build
python3 -m http.server 8080 -d dist
```

Open `http://127.0.0.1:8080/`.

## Source of truth

`../vicky-the-bat-mobile-release/source/vicky.html.gz.b64` is the single release source bundle. The web and mobile builders both consume it, preventing web/mobile code drift.

Do not deploy `vicky-the-bat/index.html`, `vicky-the-bat/index-release.html`, old prototype folders, or any Magpie source.

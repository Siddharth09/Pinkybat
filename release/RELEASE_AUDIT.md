# Vicky the Bat release audit

## Static checks passed

- JavaScript `node --check`: PASS
- 115 city records: PASS
- 115 unique city names: PASS
- Duplicate HTML ids: 0
- Duplicate function definitions: 0
- Undefined `draw...` calls: 0
- Magpie references in playable game code: 0
- Wing flap code present
- Plane is not reset by city changes
- Paris, San Francisco, Sydney, and Agra dedicated renderers present

## Release scope

The release artifact contains the latest web build and the matching mobile source. The mobile build script copies the exact source into `www/index.html`, keeping web and mobile behavior synchronized.

## Final validation required on devices

Static analysis cannot prove that every browser, iOS version, Android version, device GPU, touch gesture, app lifecycle event, or WebView implementation is bug-free. Before App Store/Play release, test on at least one physical iPhone and one physical Android phone, plus iOS Simulator/Android emulator.

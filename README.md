Talis Aspire Reading Lists Bookmarking Extension
================================================

This project provides an alternative to the Talis Aspire Reading Lists Bookmarking Bookmarklet, 
which can be forked and rebranded for distribution in institutional enterprise environments.

The extension should work with:
- Google Chrome/Chromium
- Microsoft Edge
- Firefox
- Opera
- Vivaldi

For any browser but MS Edge, remove:
```
    "-ms-preload": {
        "backgroundScript": "js/ms/backgroundScriptsAPIBridge.js",
        "contentScript": "js/ms/contentScriptsAPIBridge.js"
    }
```
from manifest.json.

To customize for your institution:

Replace images/icon*.png with appropriate images for your institution.

You will need images with the following dimensions (all dimensions in pixels):
- 128 x 128
- 48 x 48
- 40 x 40
- 32 x 32
- 30 x 30
- 25 x 25
- 24 x 24
- 20 x 20
- 16 x 16

The different sizes will be used by different browsers in different ways.

All strings in the extension can be edited by changing the values in the language files in the `_locales` directory.



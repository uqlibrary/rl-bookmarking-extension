Talis Aspire Reading Lists Bookmarking Extension
================================================

Requirements:
- [nvm](https://github.com/nvm-sh/nvm)

This project provides an alternative to the Talis Aspire Reading Lists Bookmarking Bookmarklet,
which can be forked and rebranded for distribution in institutional enterprise environments.

The extension should work with:
- Google Chrome/Chromium
- Microsoft Edge
- Firefox
- Opera
- Vivaldi

For Safari, please see https://github.com/talis/rl-bookmarking-extension/docs/safari.md

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

For MS Edge, you also need the following sizes:
- 176 x 176
- 120 x 120
- 50 x 50

The different sizes will be used by different browsers in different ways.

All strings in the extension can be edited by changing the values in the language files in the `_locales` directory.

To build the files for the extension,
```bash
$ git checkout https://github.com/talis/rl-bookmarking-extension.git
$ cd rl-bookmarking-extension
# use nvm to switch to the version of nodejs that is required
$ nvm use
$ npm install # This should also run bower install
# replace ./images/*.png and ./_locales with institutional preferences
$ $(npm bin)/grunt # This will build a Chrome/Opera/Vivaldi extension
$ $(npm bin)/grunt dist-manifold # This will build a [Manifoldjs](https://github.com/pwa-builder/ManifoldJS) compatible manifest, which can be used to package an MS Edge extension
$ $(npm bin)/grunt --identifier="{AMO UUID}" # This will build the extension with a Mozilla Add-on Identifier
```

The `./dist` directory should then contain everything you need for a `.crx`, `.xpi`, `.zip`, etc.

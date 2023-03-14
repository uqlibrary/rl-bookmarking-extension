# Building the extension for Safari (MacOS and iOS)
## Caveats
Currently, the only way to build the extension is via XCode running on a Mac. Because of steps 
required to be run on the local machine *before* it can be managed in XCode, we are, unfortunately,
unable to use XCode Cloud for this.

This means you must have XCode installed and up to date.

## Preparing XCode
First you must build the distribution with grunt as you would normally for Chrome. This will build 
the extension in the `./dist` directory.

Next run:
`xcrun safari-web-extension-converter ./dist`

This will do a bunch of stuff, but it should ultimately create something like a 
`Talis Aspire Reading Lists Bookmarking` directory in the project root directory and open XCode.

The steps from here are probably going to require some trial and error and refinement over time.

### Set the app store bits
This part is a little confusing and it's not clear how to explain how you get to the screen to enter 
these details, but navigate around XCode until you find a screen that looks like

**PROJECT**
- Talis Aspire Reading Lists Bookmarking
---
**TARGETS**
- Talis Aspire Reading Lists Bookmarking (iOS)
- Talis Aspire Reading Lists Bookmarking (macOS)
- Talis Aspire Reading Lists Bookmarking Extension (iOS)
- Talis Aspire Reading Lists Bookmarking Extension (macOS)

#### Setting up iOS extension
Click on `Talis Aspire Reading Lists Bookmarking (iOS)` under **TARGETS** and you should see tabs 
for `General`, `Signing & Capabilities`, `Resource Tags`, etc.

Click on `General`

The supported destinations should be:
- iPhone
- iPad
- Mac (Designed for iPad)

Under the `Identity` section:
- App Category: `Education`
- Display Name: `Talis Aspire Reading Lists Bookmarking`
- Bundle Identifier: `com.Talis.Talis-Aspire-Reading-Lists-Bookmarking` (you can't set it here, see 
the next section)
- Version: {Some semantic version}

Change the version to something sensible based on the changes

Under `Signing & Capabilities`:
- Check "Automatically manage signing"
- Team: `Talis Education Ltd` (you will need to be signed into your Apple ID in XCloud and part of 
the Talis organization)
- Bundle Identifier: `com.Talis.Talis-Aspire-Reading-Lists-Bookmarking`

That *should* be all you have to do for this target  

Now click on `Talis Aspire Reading Lists Bookmarking Extension (iOS)` under **TARGETS** and you should 
see similar tabs as above.

Click on `General`

Under the `Identity` section:
- Display Name: `Talis Aspire Reading Lists Bookmarking Extension`
- Bundle Identifier: `com.Talis.Talis-Aspire-Reading-Lists-Bookmarking.Extension`
- Version: {Whatever was entered above}

Under `Signing & Capabilities`:
- Check "Automatically manage signing"
- Team: `Talis Education Ltd`
- Bundle Identifier: `com.Talis.Talis-Aspire-Reading-Lists-Bookmarking.Extension`

#### Setting up MacOS extension
Click on `Talis Aspire Reading Lists Bookmarking (macOS)` under **TARGETS** and you should see tabs 
for `General`, `Signing & Capabilities`, `Resource Tags`, etc.

Repeat all of the steps as in the iOS section, _except_ the "Destination" should only be "Mac".

Now click on `Talis Aspire Reading Lists Bookmarking Extension (macOS)` under **TARGETS** and repeat 
what was done for `Talis Aspire Reading Lists Bookmarking Extension (iOS)`.

### Update the code for incompatibilities in Safari
1. Open `Talis Aspire Reading Lists Bookmarking\Shared (App)\ViewController`. Change whatever 
`let extensionBundleIdentifier = ...` is set to to
`let extensionBundleIdentifier = "com.Talis.Talis-Aspire-Reading-Lists-Bookmarking.Extension"`
2. The iOS app can't seem to dynamically fetch the tenant list, so bundle it. Replace value of 
`allTenants` in `Talis Aspire Reading Lists Bookmarking\Shared (Extension)\Resources\js\allTenants` 
with the contents of https://talis-public.s3-eu-west-1.amazonaws.com/talis.com/customers.json

### Build and test the app
Again, it's confusing to explain the XCode UI, but in the middle of the editor screen at the top, 
next to the git branch details, you can select which app to build:
- Talis Aspire Reading Lists Bookmarking (iOS)
- Talis Aspire Reading Lists Bookmarking (macOS)

Choose the iOS app, then to the right of that, choose a device to simulate. Press the "Run" icon 
(looks like a traditional "play" icon), which will start the simulator. Confirm that the extension 
works in mobile Safari. You can get to the extension settings to set the tenant in the 
Settings app -> Safari -> Extensions

If you chose an iPhone, you bookmark a page by clicking on the `aA` icon in the location bar. If you 
chose an iPad, there's an extension block icon that you click.

You can quit the simulator.

If everything worked correctly, in the menu that you chose the device to simulate, change that to 
"Any iOS Device" and in the "Product" menu, choose "Archive". A new window should appear with a list 
of "Archives". There should be two buttons on the right: "Distribute App" and "Validate App".

First click "Validate App". If that validates fine, click "Distribute App". We will come back to 
this later.

Now go back to the XCode editor window and in the place where you earlier selected 
`Talis Aspire Reading Lists Bookmarking (iOS)`, change that to 
`Talis Aspire Reading Lists Bookmarking (macOS)`. Click the "Run" icon.

A small window should appear with "Talis Aspire Reading Lists Bookmarking" or something in it 
with a button that says something along the lines of "Close window and view extension options". Click that.

If that small window does not close, make sure that you did the step above where you change the line 
in the `ViewController` file!

Open Safari, go to extensions, open the extension settings, and set a tenant. Try to bookmark something.

If everything works correctly, go to the "Product" menu and choose "Archive".

The window that we saw for the iOS should reappear with a list of "Archives" for the macOS extension.

First click "Validate App". If that validates fine, click "Distribute App".

### Upload in the App Store
Go to https://appstoreconnect.apple.com/, log in, and open "Apps". Click "Talis Aspire Bookmarking".

To distribute a new version, click on the blue "+" icon to the right of the iOS or macOS App menu listing 
and enter whatever version you put in XCode.

If you click on iOS App or macOS App, in the main part of the page, if you scroll down, there should be 
a list of builds. You should be able to choose your new build and click the "Save" button and 
"Submit for review". If nothing goes wrong, you should get an email saying your changes are live 
and available.
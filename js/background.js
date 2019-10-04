/**
 * Background script.
 *
 * This only does anything when the bookmarking button is clicked
 */
chromeOrBrowser().browserAction.onClicked.addListener(function(currentTab) {
    // If no institution has been set, go to the options page to set one
    getActiveTenant(function (tenantCode) {
        if (!tenantCode) {
            if (window.confirm(chromeOrBrowser().i18n.getMessage('noTenantAlert'))) {
                // browser.runtime.openOptionsPage() not supported by ms-edge, so here's a workaround
                chromeOrBrowser().tabs.create({
                    url: chromeOrBrowser().extension.getURL("options.html")
                  });
            }
        }

        console.log(new Date().getTime() + ': background.js: already have bookmarker.js SENDING');
        chromeOrBrowser().tabs.sendMessage(currentTab.id, {tenantCode: tenantCode});
    });
});
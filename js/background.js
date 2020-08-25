/**
 * Background script.
 *
 * This only does anything when the bookmarking button is clicked
 */
chromeOrBrowser().browserAction.onClicked.addListener(function(currentTab) {
    // If no institution has been set, go to the options page to set one
    getActiveTenant(function (tenant) {
        if (!tenant) {
            // browser.runtime.openOptionsPage() not supported by ms-edge, so here's a workaround
            chromeOrBrowser().tabs.create({
                url: chromeOrBrowser().extension.getURL("options.html")
            });
        } else {
            chromeOrBrowser().tabs.executeScript(null, {
                file: "/js/bookmarker.js",
                runAt: 'document_end'
            }, function () {
                chromeOrBrowser().tabs.sendMessage(currentTab.id, {tenant: tenant});
            });
        }
    });
});

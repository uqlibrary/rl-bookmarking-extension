/**
 * Background script.
 * 
 * This only does anything when the bookmarking button is clicked
 */
chromeOrBrowser().browserAction.onClicked.addListener(function(tab) {
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

        chromeOrBrowser().tabs.executeScript(null, {
            file: "/js/bookmarker.js"
        });
   
        chromeOrBrowser().tabs.query({active: true, currentWindow: true}, function(tabs) {
            chromeOrBrowser().tabs.sendMessage(tabs[0].id, {tenantCode: tenantCode});
        });

        return;   
    });
});
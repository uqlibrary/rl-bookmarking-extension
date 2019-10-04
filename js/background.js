/**
 * Background script.
 *
 * This only does anything when the bookmarking button is clicked
 */
var executedScript = false;
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
        if (!executedScript) {
            chromeOrBrowser().tabs.executeScript(null, {
                file: "/js/bookmarker.js",
                runAt: 'document_end'
            }, function () {
                executedScript = true;
                chromeOrBrowser().tabs.sendMessage(currentTab.id, {tenantCode: tenantCode});
            });
        } else {
            chromeOrBrowser().tabs.sendMessage(currentTab.id, {tenantCode: tenantCode});
        }
    });
});
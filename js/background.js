import {chromeOrBrowser, getActiveTenant} from "./tenants";

async function getCurrentTab() {
    let queryOptions = {active: true, lastFocusedWindow: true};
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

let tab = await getCurrentTab();

/**
 * Background script.
 *
 * This only does anything when the bookmarking button is clicked
 */
chromeOrBrowser().browserAction.onClicked.addListener(function (currentTab) {
    // If no institution has been set, go to the options page to set one
    getActiveTenant(function (tenant) {
        if (!tenant) {
            // browser.runtime.openOptionsPage() not supported by ms-edge, so here's a workaround
            chromeOrBrowser().tabs.create({
                url: 'options.html'
            });
        } else {
            chromeOrBrowser().scripting.executeScript(
              {
                  target: {tabId: tab.id},
                  files: ['/js/bookmarker.js']
              }, function () {
                  chromeOrBrowser().tabs.sendMessage(currentTab.id, {tenant: tenant});
              });
        }
    });
});

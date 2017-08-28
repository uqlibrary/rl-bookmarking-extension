chrome.browserAction.onClicked.addListener(function(tab) {
    getActiveTenant(function (tenantCode) {
        if (!tenantCode) {
            if (window.confirm(chrome.i18n.getMessage('noTenantAlert'))) {
                chrome.runtime.openOptionsPage();
            }
        }
        console.log(tenantCode);
        if (this.browser) {
            browser.tabs.executeScript(
                { code: 'bookmarkPage("' + tenantCode + '")'}
            );
        } else {
            var bookmarkCode = 'var bookmarker = document.createElement(\'script\');' +
                'bookmarker.setAttribute(\'src\', ' +
                '\'https://bookmarking.talis.com/' + tenantCode + '/parser?bookmarkButtonVersion=1&uri=\' + ' +
                'encodeURIComponent(encodeURI(window.location.href)) + \'&bookmarkVersion=1&title=\' + ' +
                'encodeURIComponent(document.title) + \'&hasJquery=no\');document.body.appendChild(bookmarker);';
            chrome.tabs.executeScript(
                tab.id,
                { code: bookmarkCode}
            );
        }
    });
});
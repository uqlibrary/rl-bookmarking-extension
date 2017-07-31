chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Bookmarking from ' + tab.url);
  chrome.tabs.executeScript(null, { file: 'js/tenants.js' }, function() {
    getActiveTenant(function(tenantCode) {
        if (!tenantCode) {
            if (window.confirm(chrome.i18n.getMessage('noTenantAlert'))) {
                chrome.runtime.openOptionsPage();
            }            
        }
      
        chrome.tabs.executeScript(null, {
            file: 'bookmarklet.js'
        });

    });
  });
});
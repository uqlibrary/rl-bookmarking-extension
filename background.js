chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Bookmarking from ' + tab.url);
  chrome.tabs.executeScript(null, {
    file: 'bookmarklet.js'
  });
});
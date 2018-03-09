/*
 * This exists for MS Edge, and should more or less be functionally identical to `bookmarkCode` 
 * in `background.js`.
 * Edge needs this to be a content_script that is injected, however.
 * @todo Find a way to not duplicate this.
 */

(function() {
  function chromeOrBrowser() {
    return this.browser || chrome;
  }
  /**
   * Injected into page to redirect to the dynamic page parser
   * 
   * @param {String} tenantCode 
   */  
  function bookmarkPage(tenantCode) {      
    var bookmarker = document.createElement('script'); 
    bookmarker.setAttribute(
      'src', 
      'https://bookmarking.talis.com/' + tenantCode + '/parser?bookmarkButtonVersion=1&uri=' + 
        encodeURIComponent(encodeURI(window.location.href)) + '&bookmarkVersion=1&title=' + 
        encodeURIComponent(document.title) + '&hasJquery=no'
      ); 
    document.body.appendChild(bookmarker);
  }
  chromeOrBrowser().runtime.onMessage.addListener(function(message) {
    bookmarkPage(message.tenantCode);
  });
})();
/*
 * Content script to inject the dynamic bookmarking JS directly into the page.
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
    var bookmarkingScriptId = '__talis_' + tenantCode + '_bookmarkingScript';

    if (document.getElementById(bookmarkingScriptId)) {
      document.getElementById(bookmarkingScriptId).remove();
    }

    var bookmarker = document.createElement('script');
    bookmarker.setAttribute(
        'src',
        'https://bookmarking.talis.com/' + tenantCode + '/parser?bookmarkButtonVersion=1&uri=' +
        encodeURIComponent(encodeURI(window.location.href)) + '&bookmarkVersion=1&title=' +
        encodeURIComponent(document.title) + '&hasJquery=no'
    );
    bookmarker.setAttribute('id', bookmarkingScriptId);

    if (document.body) {
      document.body.appendChild(bookmarker);
    }
  }

  chromeOrBrowser().runtime.onMessage.addListener(function (message) {
    bookmarkPage(message.tenantCode);
  });
})();
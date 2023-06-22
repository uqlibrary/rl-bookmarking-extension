/*
 * Content script to inject the dynamic bookmarking JS directly into the page.
 */
(function() {
  function chromeOrBrowser() {
    return this.browser || chrome;
  }

  function unezproxy(ezpDomain, uri) {
    var splat = uri.split("." + ezpDomain);
      if (uri.startsWith('https')) {
          var domain = splat[0].replace(/-/g, '.');
      } else {
          var domain = splat[0];
      }
      return domain + splat[1];
  }

  function unopenathens(oaDomain, uri) {
    return uri;
  }

  function fixLink(proxies, uri) {

    for (var proxy in proxies.split(',')) {
      var proxySplit = proxy.split(':');
      var proxyType = proxySplit[0];
      var proxyHost = proxySplit[1];

      switch(proxyType){
        case "ezp":
          return unezproxy(proxyHost, uri);
          break;
        case "oa":
          return unopenathens(proxyHost, uri);
      }

    }
  }

  function proxyLink(prefix, encode, uri) {
    if (encode) {
      uri = encodeURIComponent(encodeURI(uri));
    }
    return prefix + uri;
  }

  /**
   * Injected into page to redirect to the dynamic page parser
   *
   * @param {String} tenantCode
   */
  function bookmarkPage(tenant) {
    var bookmarkingScriptId = '__talis_' + tenant.code + '_bookmarkingScript';

    if (document.getElementById(bookmarkingScriptId)) {
      document.getElementById(bookmarkingScriptId).remove();
    }

    var bookmarker = document.createElement('script');

    var bookmarkingEndpoint = (
      tenant.region === 'CA' ?
      'https://bookmarking.ca.talis.com' :
      'https://bookmarking.talis.com'
    );

    var link = window.location.href;
    if (tenant.proxy.proxies.length > 0) {
      link = fixLink(tenant.proxy.proxies, link);
    }

    if (tenant.proxy.prefix.length > 0) {
      link = proxyLink(tenant.proxy.prefix, tenant.proxy.encoded, link);
    }

    bookmarker.setAttribute(
        'src',
        bookmarkingEndpoint + '/' + tenant.code + '/parser?bookmarkButtonVersion=1&uri=' +
        encodeURIComponent(encodeURI(link)) + '&bookmarkVersion=1&title=' +
        encodeURIComponent(document.title) + '&hasJquery=no'
    );
    bookmarker.setAttribute('id', bookmarkingScriptId);

    if (document.body) {
      document.body.appendChild(bookmarker);
    }
  }

  chromeOrBrowser().runtime.onMessage.addListener(function (message) {
    bookmarkPage(message.tenant);
  });
})();

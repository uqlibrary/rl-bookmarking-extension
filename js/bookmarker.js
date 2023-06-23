/*
 * Content script to inject the dynamic bookmarking JS directly into the page.
 */

(function() {
  function chromeOrBrowser() {
    return this.browser || chrome;
  }

  /**
   * Extracts url from ezproxied link.
   * @param {string} ezpDomain - the ezproxy domain to look for
   * @param {string} uri - the proxied url to extract from
   */
  function unezproxy(ezpDomain, uri) {
    var splat = uri.split("." + ezpDomain);
      if (uri.startsWith('https')) {
          var domain = splat[0].replace(/-/g, '.');
      } else {
          var domain = splat[0];
      }
      return domain + splat[1];
  }

  /**
   * Extracts url from athenized link.
   * @param {string} oaDomain - expected openathens domain
   */
  function unopenathens(oaDomain, uri) {
    var regex = new RegExp('\.[A-Za-z0-9]+.' + oaDomain);
    var splat = uri.split(regex);
      if (uri.startsWith('https')) {
          var domain = splat[0].replace(/-/g, '.');
      } else {
          var domain = splat[0];
      }
      return domain + splat[1];
  }

  /**
   * Extracts url from a proxied link.
   */
  function fixLink(proxies, uri) {
    proxySplit = proxies.split(',');
    for (var proxy in proxies.split(',')) {
      var proxyConf = proxySplit[proxy].split(':');
      var proxyType = proxyConf[0];
      var proxyHost = proxyConf[1];
      switch(proxyType){
        case "ezp":
          if (uri.includes(proxyHost)) {
            return unezproxy(proxyHost, uri);
          }
          break;
        case "oa":
          if (uri.includes(proxyHost)) {
            return unopenathens(proxyHost, uri);
          }
          break;
      }
    }
    // If we don't match any, just return the uri. We tried.
    return uri;
  }

  /**
   * Apply the appropriate proxy to a link.
   */
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

    var originalLink = window.location.href;
    var link = window.location.href;
    if (tenant.proxy.proxies.length > 0) {
      link = fixLink(tenant.proxy.proxies, link);
    }

    // Only proxy if configured and was an already proxied link.
    if (tenant.proxy.prefix.length > 0 && link != originalLink) {
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

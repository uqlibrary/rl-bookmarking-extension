/*
 * Content script to inject the dynamic bookmarking JS directly into the page.
 */

function chromeOrBrowser() {
  return this.browser || chrome;
}
console.log(new Date().getTime() + ': bookmarker.js');
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
  if (document.body) {
    document.body.appendChild(bookmarker);
  }
}
chromeOrBrowser().runtime.onMessage.addListener(function(message) {
  console.log(new Date().getTime() + ': bookmarker.js: onMessage callback');
  bookmarkPage(message.tenantCode);
});
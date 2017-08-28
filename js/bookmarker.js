function bookmarkPage(tenantCode) {      
  var bookmarker = document.createElement('script'); 
  bookmarker.setAttribute('src', 'https://bookmarking.talis.com/' + tenantCode + '/parser?bookmarkButtonVersion=1&uri=' + encodeURIComponent(encodeURI(window.location.href)) + '&bookmarkVersion=1&title=' + encodeURIComponent(document.title) + '&hasJquery=no'); 
  document.body.appendChild(bookmarker);
}
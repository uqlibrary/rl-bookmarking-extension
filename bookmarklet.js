var hasJQuery = 'no'; 
var jQueryVer = ''; 
if (typeof jQuery != 'undefined') { 
    hasJQuery = 'yes'; 
    jQueryVer = jQuery.fn.jquery; 
} 
var el = document.createElement('script'); 
var tenantCode = 'broadminster';
el.setAttribute('src', 'https://bookmarking.talis.com/' + tenantCode + '/parser?bookmarkButtonVersion=1&uri=' + encodeURIComponent(encodeURI(window.location.href)) + '&bookmarkVersion=1&title=' + encodeURIComponent(document.title) + '&hasJquery=' + hasJQuery + '&jQueryVer=' + jQueryVer); 
document.body.appendChild(el);


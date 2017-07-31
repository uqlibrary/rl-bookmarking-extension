var hasJQuery = 'no'; 
var jQueryVer = ''; 
if (typeof jQuery != 'undefined') { 
    hasJQuery = 'yes'; 
    jQueryVer = jQuery.fn.jquery; 
}
var tenants = document.createElement('script');
tenants.setAttribute('src', 'js/tenants.js');
document.body.appendChild(tenants);


getActiveTenant(function(tenantCode) {
    if (!tenantCode) {
        alert(chrome.i18n.getMessage('optionsSettingsSaved'));
        return;
    }
    var bookmarker = document.createElement('script'); 
    bookmarker.setAttribute('src', 'https://bookmarking.talis.com/' + tenantCode + '/parser?bookmarkButtonVersion=1&uri=' + encodeURIComponent(encodeURI(window.location.href)) + '&bookmarkVersion=1&title=' + encodeURIComponent(document.title) + '&hasJquery=' + hasJQuery + '&jQueryVer=' + jQueryVer); 
    document.body.appendChild(bookmarker);
});



/**
 * MS Edge doesn't support the promise-based APIs (`chrome.*`), so use the callback
 * based APIs (`browser.*`).  *Chrome* blows up if you use `browser`, so use `this.browser` instead
 * 
 * @returns {Object}
 */
function chromeOrBrowser() {
    return this.browser || chrome;
}

/**
 * 
 * chrome.sync does not work when loading temporary extension in Firefox (e.g. development mode)
 * 
 * @returns {Object}
 */
function syncOrLocalStorage() {
    var api = chromeOrBrowser();
    return api.sync || api.local;
}

/**
 * Stores the preferred tenantCode in browser storage
 * 
 * @param {string}     tenantCode 
 * @param {function()} cb - Callback to run once stored
 */
function saveActiveTenant(tenantCode, cb) {
    chromeOrBrowser().storage.local.set({
        activeTenant: tenantCode
    }, function() {
        cb();
    });
}

/**
 * 
 * @callback AllTenants
 * 
 * @param {Object} tenants An object of tenants, keyed by tenant code, with the name as values 
 */
/**
 * Returns all defined tenants
 * 
 * @param {AllTenants} cb 
 */
function getTenants(cb) {
    var tenants = {};
    for (var code in allTenants) {
        if (allTenants[code].hasOwnProperty('apps') && allTenants[code].apps.hasOwnProperty('rl')) {
            tenants[code] = allTenants[code].name;
        }
    }
    cb(tenants);
}

/**
 * @callback activeTenant
 * 
 * @param {string} tenantCode - Currently active tenant code
 */
/**
 * Returns the saved 'active' tenant from browser storage
 * 
 * @param {activeTenant} cb 
 */
function getActiveTenant(cb) {
    chromeOrBrowser().storage.local.get({
        activeTenant: null
    }, function(tenants) {
        return cb(tenants.activeTenant);
    });    
}
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
 * Stores the preferred tenantCode in browser storage
 * 
 * @param {string}     tenantCode 
 * @param {function()} cb - Callback to run once stored
 */
function saveActiveTenant(tenantCode, cb) {
    chromeOrBrowser().storage.sync.set({
        activeTenant: tenantCode
    }, function() {
        cb();
    });
}

/**
 * 
 * @callback allTenants
 * 
 * @param {Object} tenants An object of tenants, keyed by tenant code, with the name as values 
 */
/**
 * Returns all defined tenants
 * 
 * @param {allTenants} cb 
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
    chromeOrBrowser().storage.sync.get({
        activeTenant: null
    }, function(tenants) {
        return cb(tenants.activeTenant);
    });    
}
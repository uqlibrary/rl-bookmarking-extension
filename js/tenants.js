/**
 * MS Edge doesn't support the promise-based APIs (`chrome.*`), so use the callback
 * based APIs (`browser.*`).  *Chrome* blows up if you use `browser`, so use `this.browser` instead
 *
 * @returns {Object}
 */
function chromeOrBrowser() {
    return this.browser || chrome;
}

var storage = chromeOrBrowser().storage.sync;

if (!storage) {
    storage = chromeOrBrowser().storage.local;
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
    storage.get({
        activeTenant: null
    }, function(tenants, err) {
        if (chromeOrBrowser().runtime.lastError || typeof tenants === 'undefined' || !tenants.activeTenant) {
            chromeOrBrowser().storage.local.get({
                activeTenant: null
            }, function(tenants) {
                if (tenants.activeTenant) {
                    storage = chromeOrBrowser().storage.local;
                }
                return cb(tenants.activeTenant);
            });
        } else {
            return cb(tenants.activeTenant);
        }
    });
}

/**
 * Stores the preferred tenantCode in browser storage
 *
 * @param {string}     tenantCode
 * @param {function()} cb - Callback to run once stored
 */
function saveActiveTenant(tenantCode, cb) {
    storage.set({
        activeTenant: tenantCode
    }, function() {
        if (chromeOrBrowser().runtime.lastError) {
            storage = chromeOrBrowser().storage.local;
            return saveActiveTenant(tenantCode, cb);
        } else {
            getActiveTenant(function(t) {
                if (typeof t === 'undefined') {
                    storage = chromeOrBrowser().storage.local;
                    return saveActiveTenant(tenantCode, cb);
                } else {
                    cb();
                }
            });

        }
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
    getTenantList(function(tenantList) {
        for (var code in tenantList) {
            if (tenantList[code].hasOwnProperty('apps') && tenantList[code].apps.hasOwnProperty('rl')) {
                tenants[code] = tenantList[code].name;
            }
        }
        cb(tenants);
    });
}

/**
 * Retrieves the current tenant list or displays a canned list, if error
 * @param {*} cb
 */
function getTenantList(cb) {
    var headers = new Headers({'Content-Type': 'application/json'});
    fetch('https://s3-eu-west-1.amazonaws.com/talis-public/talis.com/customers.json', {headers: headers})
    .then(function (response) {
        return response.json();
    })
    .catch(function (e) {
        return allTenants;
    })
    .then(function (tenants) {
        cb(tenants);
    });
}

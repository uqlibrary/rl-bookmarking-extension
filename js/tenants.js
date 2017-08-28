function chromeOrBrowser() {
    return this.browser || chrome;
}

function saveActiveTenant(tenantCode, cb) {
    chromeOrBrowser().storage.sync.set({
        activeTenant: tenantCode
    }, function() {
        cb();
    });
}

function fetchTenants(cb) {
    var tenants = {};
    for (var code in allTenants) {
        if (allTenants[code].hasOwnProperty('apps') && allTenants[code].apps.hasOwnProperty('rl')) {
            tenants[code] = allTenants[code].name;
        }
    }
    return cb(tenants);
}

function storeTarlTenants(tenants, cb) {
    chromeOrBrowser().storage.sync.set({
        tarlTenants: tenants
    }, function() {
        cb();
    });
}

function getTenants(cb) {
    chromeOrBrowser().storage.sync.get({
        tarlTenants: {}
    }, function(tenants) {
        if ($.isEmptyObject(tenants.tarlTenants)) {
            return fetchTenants(function(tenantList) {
                storeTarlTenants(tenantList, cb);
            });
        }
        return cb(tenants.tarlTenants);
    });
}

function getActiveTenant(cb) {
    chromeOrBrowser().storage.sync.get({
        activeTenant: null
    }, function(tenants) {
        return cb(tenants.activeTenant);
    });    
}
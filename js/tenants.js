function saveActiveTenant(tenantCode, cb) {
    chrome.storage.local.set({
        activeTenant: tenantCode
    }, function() {
        cb();
    });
}

function fetchTenants(cb) {
    $.get('https://talis-public.s3-eu-west-1.amazonaws.com/talis.com/customers.json', function (data) {
        var tenants = {};
        for (var code in data) {
            if (data[code].hasOwnProperty('apps') && data[code].apps.hasOwnProperty('rl')) {
                tenants[code] = data[code].name;
            }
        }
        return cb(tenants);
    });
}

function storeTarlTenants(tenants, cb) {
    chrome.storage.local.set({
        tarlTenants: tenants
    }, function() {
        cb();
    });
}

function getTenants(cb) {
    chrome.storage.local.get({
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
    chrome.storage.local.get({
        activeTenant: null
    }, function(tenants) {
        return cb(tenants.activeTenant);
    });    
}
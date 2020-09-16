
$(function() {
    $('#tenantList').on('change', function() {
        $('#tenantCode').val($('#tenantList').val());
        if ($('#specifyTenant:selected').length > 0) {
            $('#manualEntry').removeClass('hidden');
        } else {
            $('#manualEntry').addClass('hidden');
        }
    });
    $('#save').on('click', function() {
        if ($('#specifyTenant:selected').length > 0) {
            var otherTenantCode = $('#tenantCode').val();
            var otherTenantRegion = $('#tenantRegion').val();
            saveActiveTenantAndUpdateStatus(
                buildTenant(otherTenantCode, otherTenantRegion)
            );
        } else {
            getTenants(function(tenants) {
                for (var tenantCode in tenants) {
                    if (tenantCode === $('#tenantCode').val()) {
                        saveActiveTenantAndUpdateStatus(tenants[tenantCode]);
                    }
                }
            });
        }
    });

    var objects = document.getElementsByTagName('*'), i;
    for(i = 0; i < objects.length; i++) {
        if (objects[i].dataset && objects[i].dataset.message) {
            objects[i].innerHTML = chromeOrBrowser().i18n.getMessage(objects[i].dataset.message);
        }
    }
    loadTenantList();
});

function saveActiveTenantAndUpdateStatus(tenant) {
    saveActiveTenant(tenant, function() {
        // Update status to let user know options were saved.
        $('#status').html('<div class="alert alert-success">' + chromeOrBrowser().i18n.getMessage('optionsSettingsSaved') + '</div>');
        $('#optionsHelp').addClass('hidden');
        setTimeout(function() {
            $('#status').textContent = '';
        }, 750);
    });
}

function loadTenantList() {
    getActiveTenant(function(activeTenant) {
        if (!activeTenant) {
            $('#optionsHelp').html('<div class="alert alert-warning">' + chromeOrBrowser().i18n.getMessage('noTenantAlert') + '</div>');
        }

        getTenants(function(tenants) {
            var matched = false;
            for (var tenantCode in tenants) {
                if (activeTenant && tenantCode === activeTenant.code) {
                    matched = true;
                    $('#tenantList option:last-of-type').before('<option class="tenantCode" value="' + tenantCode + '" selected>' + tenants[tenantCode].name + '</option>');
                } else {
                    $('#tenantList option:last-of-type').before('<option class="tenantCode" value="' + tenantCode + '">' + tenants[tenantCode].name + '</option>');
                }
            }
            if (activeTenant && !matched) {
                $('#specifyTenant').attr('selected', 'selected');
                $('#manualEntry').removeClass('hidden');
            }
        });
    });
}

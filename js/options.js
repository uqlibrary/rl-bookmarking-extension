
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
        saveActiveTenant($('#tenantCode').val(), function() {
            // Update status to let user know options were saved.
            $('#status').html('<div class="alert alert-success">' + chromeOrBrowser().i18n.getMessage('optionsSettingsSaved') + '</div>');
            setTimeout(function() {
                $('#status').textContent = '';
            }, 750);
        });
    });

    var objects = document.getElementsByTagName('*'), i;
    for(i = 0; i < objects.length; i++) {
        if (objects[i].dataset && objects[i].dataset.message) {
            objects[i].innerHTML = chromeOrBrowser().i18n.getMessage(objects[i].dataset.message);
        }
    }
    loadTenantList();
});

function loadTenantList() {
    getActiveTenant(function(activeTenant) {
        $('#tenantCode').val(activeTenant);
        getTenants(function(tenants) {
            var matched = false;
            for (var tenantCode in tenants) {
                if (tenantCode == activeTenant) {
                    matched = true;
                    $('#tenantList option:last-of-type').before('<option class="tenantCode" value="' + tenantCode + '" selected>' + tenants[tenantCode] + '</option>');
                } else {
                    $('#tenantList option:last-of-type').before('<option class="tenantCode" value="' + tenantCode + '">' + tenants[tenantCode] + '</option>');
                }
            }
            if (activeTenant && !matched) {
                $('#specifyTenant').attr('selected', 'selected');
                $('#manualEntry').removeClass('hidden');
            }
        });
    });    
}

function save_options() {
    console.log('Saving tenant');
  var tenantCode = document.getElementById('tenantCode').value;  
  chrome.storage.sync.set({
    tenantCode: tenantCode
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    tenantCode: 'broadminster'    
  }, function(items) {
    document.getElementById('tenantCode').value = items.tenantCode;
  });
}
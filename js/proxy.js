/**
 * Library to manage proxy configuration
 * */

/**
 * Retrieves the current tenant proxy config.
 * @param {string}     tenantCode - the tenant short code
 * @param {*} cb
 */
function proxyPreconfigured(tenantCode, cb) {
  var configs = {
    'uq': {
      'prefix': 'https://go.openathens.net/redirector/uq.edu.au?url=',
      'proxies': 'ezp:ezproxy.library.uq.edu.au,oa:proxy.openathens.net',
      'encoded': true
    }
  }
  cb(configs[tenantCode]);
}

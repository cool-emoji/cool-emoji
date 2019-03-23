const rp = require('requestretry');

const apiUrl = 'someBackendUrl';

class ApiCall {
  constructor(action, body) {
    this.options = {
      method: 'POST',
      uri: `${apiUrl}/${action}`,
      json: true,
      simple: false,
      body: body,
      resolveWithFullResponse: true,
      timeout: 180000
    };
  }

  call() {
    console.log(`ApiCall.call() is executing: ${this.options.method} ${this.options.uri} body: ${JSON.stringify(this.options.body)}`);
    return rp(this.options);
  }

}

module.exports = ApiCall;
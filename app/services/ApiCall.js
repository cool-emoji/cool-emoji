const rp = require('requestretry');

const apiUrl = 'http://localhost:8090/food-bank';

class ApiCall {
  constructor(action, data) {
    this.options = {
      method: 'GET',
      uri: `${apiUrl}/${action}/${data}`,
      json: true,
      simple: false,
      resolveWithFullResponse: true,
      timeout: 180000
    };
  }

  call() {
    console.log(`ApiCall.call() is executing: ${this.options.method} ${this.options.uri}`);
    return rp(this.options);
  }

}

module.exports = ApiCall;
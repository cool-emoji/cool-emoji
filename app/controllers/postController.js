const findPostcode = require('./findPostcode');
const renderManager = require('./renderManager');

module.exports = {
  findFoodBank: [findPostcode, renderManager.renderFoodBank],
};
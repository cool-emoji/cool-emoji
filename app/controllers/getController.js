const renderManager = require('./renderManager');

module.exports = {
  index: [renderManager.renderIndex],
  foodBankIndex: [renderManager.renderFoodBank],
  mentalHealthIndex: [renderManager.renderMentalHealth],
  mentalHealthDepression: [renderManager.mentalHealthDepression]
};
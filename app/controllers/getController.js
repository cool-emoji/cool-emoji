const renderManager = require('./renderManager');

module.exports = {
  index: [renderManager.renderIndex],
  foodBankIndex: [renderManager.renderFoodBank],
  uncomfortableStuffIndex: [renderManager.renderUncomfortableStuff],
  mentalHealthIndex: [renderManager.renderMentalHealth],
  mentalHealthDepression: [renderManager.mentalHealthDepression]
};
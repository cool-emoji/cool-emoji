const getController = require('../controllers/getController');
const postController = require('../controllers/postController');

module.exports = (app) => {

  app.get('/', getController.index);

  app.get('/food-bank', getController.foodBankIndex);
  app.post('/food-bank/find', postController.findFoodBank);

  app.get('/mental-health', getController.mentalHealthIndex);
  app.get('/mental-health/depression', getController.mentalHealthDepression);

  return app;
};
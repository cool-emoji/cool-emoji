const ApiCall = require('../services/ApiCall');

module.exports = async (req, res, next) => {
  try {

    const response = await new ApiCall('captureDetails', {}).call();

    if (response.statusCode === 200) {
      // TODO - implement
    } else {
      console.log(`Non-200 http response when executing ${req.method} ${req.url}. Response: ${JSON.stringify(response.body)}`);
      res.locals.errors = [{message: 'Something went wrong...'}];
    }
  } catch (error) {
    console.log(`Something went wrong when executing ${req.method} ${req.url}. Error: ${error}`);
    res.locals.errors = [{message: 'Something went wrong'}];
  } finally {
    next();
  }
};
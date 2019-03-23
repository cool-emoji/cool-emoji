const ApiCall = require('../services/ApiCall');

module.exports = async (req, res, next) => {
  try {

    const response = await new ApiCall('postcode', req.body.postcode).call();

    if (response.statusCode === 200) {
      res.locals.foodbanks = response.body;

      let a = response.body.map(e => {
          let changed = e.centre_address.replace(/<br \/>/g,'')
          e.centre_address = changed;
          return e;
      });

      res.locals.foodbanks = a;

        console.log(a);
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
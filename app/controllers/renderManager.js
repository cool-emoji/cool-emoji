module.exports = {
  renderIndex: (req, res) => res.render('index'),
  renderFoodBank: (req, res) => res.render('food-bank/index'),
  renderMentalHealth: (req, res) => res.render('mental-health/index'),
  mentalHealthDepression: (req, res) => res.render('mental-health/depression')
};
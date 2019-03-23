require('dotenv').config();

const nunjucks = require('nunjucks');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/app/assets')));

app.set('view engine', 'njk');

let nunjucksEnv = nunjucks.configure(path.join(__dirname, '/app/views/'), {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require(path.join(__dirname, '/app/routes/routes.js'))(app);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`UCM Tracker listening on port ${PORT}`));

module.exports = server;
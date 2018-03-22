const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const routes = require('./routes');

app.use(bodyParser.json());

app.use('/api', routes);



app.listen(config.server.port, ()=> {
  console.log('App starting on port ' + config.server.port);
});
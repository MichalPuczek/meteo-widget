// == IMPORT variables d'environnement
require('dotenv').config();

// == IMPORT server EXPRESS
const express = require('express');

// == IMPORT router
const router = require('./App/router');

// -- variable d'environnement PORT
const PORT = process.env.PORT || 5050;

// == EXPRESS (1)
const app = express();

// == ROUTER
app.use(router);

// == EXPRESS (2)
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
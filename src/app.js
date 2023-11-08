const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const mongoose = require('./mongoose');
const app = express();

app.use(express.json());
app.use('/v1', routes);

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.send(`<h1>Welcome to Backend<h1/>`);
  next();
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

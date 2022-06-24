'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3090;
const server = require('./src/server');

const { sequelize } = require('./src/auth/models/index');

sequelize.sync().then(() => {
  server.startup(PORT);
}).catch((err) => {
  console.log(err);
}
);
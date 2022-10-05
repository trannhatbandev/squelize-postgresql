const dotenv = require('dotenv');
const path = require('path');
const envPath = path.resolve(__dirname, '../../.env');
const envFound = dotenv.config({ path: envPath });

if (!envFound) {
  throw new Error(500);
}

const DB = {
  depveloment: {
    host: process.env.DB_DEV_HOST,
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    dialect: process.env.DB_DEV_CLIENT,
  },
  test: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: process.env.DB_DEV_CLIENT,
  },
  production: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: process.env.DB_DEV_CLIENT,
  },
};

module.exports = {
  DB,
  PORT: process.env.PORT,
};

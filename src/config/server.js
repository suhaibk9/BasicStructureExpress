const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const EMAIL = process.env.EMAIL;
module.exports = {
  PORT,
  EMAIL,
};

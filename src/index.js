const { PORT } = require('./config/server');
const express = require('express');
const app = express();
const homeRouter = require('./routes/index');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use('/api', homeRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

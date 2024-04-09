const express = require('express');
const router = express.Router();
const { homePingController } = require('../../controllers/home.controller');

router.get('/home', homePingController);
module.exports = router;

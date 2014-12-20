'use strict';

var express = require('express');
var controller = require('./main.controller');

var router = express.Router();

router.get('/', controller.findindex);

module.exports = router;
'use strict';

var express = require('express');
var controller = require('./rooms.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.getPeople);
module.exports = router;

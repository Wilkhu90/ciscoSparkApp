/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
//Cisco Spark
var assert = require(`assert`);
process.env.CISCOSPARK_ACCESS_TOKEN = 'OTlkY2U5M2YtOWFhOS00MWJlLWE3MTctMjUxYWFhZTM4YzJkNTBiYWFmMGItMzc2';
var ciscospark = require('ciscospark/env');

// Get list of things
exports.index = function(req, res) {
  ciscospark.rooms.list({
    max: 10
  }).then(function(rooms) {
    res.json(rooms.items);
  });
};

exports.getPeople = function(req, res) {
  console.log(req.params.id);
  ciscospark.memberships.list({
    roomId: req.params.id
  }).then(function(m) {
    res.send(m.items);
  });
};

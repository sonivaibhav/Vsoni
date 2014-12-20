
'use strict';

var _ = require('lodash');
var MainData = require('./main.model');

// Get list of things
exports.findindex = function(req, res) {
 MainData.find(function (err, data) {
 if(err) { return handleError(res, err); }
 return res.json(200, data);
 });
 };
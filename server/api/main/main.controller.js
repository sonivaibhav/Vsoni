
'use strict';

var _ = require('lodash');
var MainData = require('./main.model');

// Get list of things
exports.index = function(req, res) {
 MainData.find(function (err, pageData) {
 if(err) { return handleError(res, err); }
 return res.json(200, pageData);
 });
 };
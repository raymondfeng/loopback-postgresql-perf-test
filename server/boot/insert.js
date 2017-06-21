'use strict';
var json = require('./test-msg.json');
var str = JSON.stringify(json);
var async = require('async');
module.exports = function(app, cb) {
  var mm = app.models.MonitorMessage;
  var start = process.hrtime();
  async.times(
    1000,
    function(n, done) {
      mm.create({uuid: '1', data: str}, done);
    },
    function(err) {
      console.log(process.hrtime(start));
      cb(err);
    }
  );
};

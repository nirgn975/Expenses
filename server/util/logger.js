const chalk = require('chalk');
var _ = require('lodash');

var config = require('../config/config');

// create a noop (no operation) function for when loggin is disabled
var noop = function(){};
// check if loggin is enabled in the config
// if it is, then use console.log, if not then noop
var consoleLog = config.logging ? console.log.bind(console) : noop;

var logger = {
  log: function() {
    var tag = chalk.green('[ ✨ LOG ✨ ]');
    // arguments is an array like object with all the passed
    // in arguments to this function
    var args = _.toArray(arguments)
      .map(function(arg) {
        if(typeof arg === 'object') {
          // turn the object to a string so we
          // can log all the properties and color it
          var string = JSON.stringify(arg, null, 2);
          return tag + '  ' + chalk.cyan(string);
        } else {
          return tag + '  ' + chalk.cyan(arg);
        }
      });

    // call either console.log or noop here with the
    // console object as the context and the new colored args :)
    consoleLog.apply(console, args);
  },

  error: function() {
    var args = _.toArray(arguments)
      .map(function(arg) {
        arg = arg.stack || arg;
        var name = arg.name || '[ ❌ ERROR ❌ ]';
        var log = chalk.yellow(name)  + '  ' + chalk.red(arg);
        return log;
      });

    consoleLog.apply(console, args);
  }
};

module.exports = logger;

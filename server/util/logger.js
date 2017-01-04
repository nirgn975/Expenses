const chalk = require('chalk');

const config = require('../config/config');

// create a noop (no operation) function for when loggin is disabled
const noop = () => {};
// check if loggin is enabled in the config
// if it is, then use console.log, if not then noop
const consoleLog = config.logging ? console.log.bind(console) : noop;

const logger = {
  log(messages) {
    const tag = chalk.green('[ ✨ LOG ✨ ]');
    // arguments is an array like object with all the passed
    // in arguments to this function
    const args = messages.map((arg) => {
      if (typeof arg === 'object') {
        // turn the object to a string so we
        // can log all the properties and color it
        const string = JSON.stringify(arg, null, 2);
        return `${tag} ${chalk.cyan(string)}`;
      }
      return `${tag} ${chalk.cyan(arg)}`;
    });

    // call either console.log or noop here with the
    // console object as the context and the new colored args :)
    consoleLog.apply(console, args);
  },

  error(messages) {
    const args = messages.map((arg) => {
      const errorArg = arg.stack || arg;
      const name = errorArg.name || '[ ❌ ERROR ❌ ]';
      const log = `${chalk.yellow(name)} ${chalk.red(errorArg)}`;
      return log;
    });

    consoleLog.apply(console, args);
  },
};

module.exports = logger;

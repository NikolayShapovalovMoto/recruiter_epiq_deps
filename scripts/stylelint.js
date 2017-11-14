var exec = require('child_process').exec,
    chalk = require('chalk');

var cmd = 'cd node_modules/recruiter_epiq_deps && gulp lint-css';

console.log('Running stylelint script - ' + chalk.yellow('gulp lint-css'));
exec(cmd, function (error, stdout, stderr) {
    // command output is in stdout
    if (!error) {
        console.log(chalk.green(stdout));
    }
    else {
        console.log(chalk.white(stdout));
        console.log(chalk.red(error));
    }
    console.log(chalk.red(stderr));
});
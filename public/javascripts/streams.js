const fs = require('fs');
const child = require('child_process');
const scriptfile = './testScript.sh';
const logfile = './logs/log1.txt';

const childProc = child.spawn('./bashscripts/testScript.sh', {stdio: 'inherit', shell: true});

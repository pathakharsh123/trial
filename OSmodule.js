const OS = require('os');

console.log(OS.userInfo());

console.log(`The system uptime is ${OS.uptime()} seconds `);

const currentOS = {
    name: OS.type(),
    release: OS.release(),
    totalmem: OS.totalmem(),
    freemem: OS.freemem(),
}

console.log(currentOS);
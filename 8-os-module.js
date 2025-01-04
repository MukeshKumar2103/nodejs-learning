const os = require('os');

// Info about current user
const userInfo = os.userInfo()
console.log('userInfo:', userInfo);


// method returns the system uptime in seconds
const uptime = os.uptime();
console.log(`The system uptime is ${uptime} 'seconds`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log('currentOs:', currentOs);

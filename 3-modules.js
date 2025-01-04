// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHello = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')

const { kumar, peter } = names;

// console.log({module,exports:module.exports});

sayHello('Mukesh');
sayHello(kumar);
sayHello(peter);
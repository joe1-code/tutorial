
//GLOBALS - NO WINDOW !!
//_dirname - path to current directory
//_filename - file name
//require - funtions to use modules (commonJS)
// module - info about current module (file)/CommonJS,every file is module by default,encapsulated code(only share file minimum)
//process - info about env where the program is being executed


const names = require ('./4-names');
const sayHi = require ('./5-utilis');
const data = require ('./6-alternative');
const person = require ('./6-alternative')
require('./7-mind')
console.log(data)



sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
 



 
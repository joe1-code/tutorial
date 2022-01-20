//GLOBALS
console.log(__dirname);
setInterval(() => {
       console.log('server running')
}, 1000)

//npm - global command, comes with node
//npm --version
//local dependency - use only in this project (locally)
// npm install <packagename>

//global dependency - use in any project(accessed globally)
//npm i -g <packagename>
//sudo npm install -g(mac)
//package.json - manifest file(stores the important info about the project dependencies)
//manual approach - creates a package.json file in the root,create properties.
//npm init - step by step,press enter to skip
//npm init -y(everything default)
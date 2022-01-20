// Built-in Module (OS module)

const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

//Return the current uptime info in seconds
console.log(`the uptime info is : ${os.uptime()} seconds`)

const currentOS = {
 name: os.type(),
 Release: os.release(),
 Freemem: os.freemem(),
 Totalmem: os.totalmem()
}
console.log(currentOS)
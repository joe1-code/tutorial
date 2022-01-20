const num1 = 3;
const num2 = 2;


function AddValue() {
 console.log(`the sum is : ${num1 + num2}`)
}
AddValue()



module.exports.AddValue = AddValue
console.log(`the value is: ${num1 + num2}`)
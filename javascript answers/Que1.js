const prompt = require('prompt-sync')();

var amount=prompt("Enter Amount ");
var simpleInterest= prompt("Enter Simple Interest ");
var time= prompt("Enter time ");
console.log("Simple Interest : ",amount*simpleInterest*time/100);
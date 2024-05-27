import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter currency from",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },

  {
    name:"to",
    message:"Enter currency to",
    type:"list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"]

  },

  {
    name:"amount",
    message:"Enter your amount",
    type:"number"
  }
]);



let fromAmount = currency[answer.from]
let toAmount = currency[answer.to]
let amount = answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log (convertedAmount); 
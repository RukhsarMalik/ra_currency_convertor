#! /usr/bin/env node
import inquirer from "inquirer"

const currency: any = 
{
    USD: 1, // base ammount
    EUR: 0.91,
    GBP: 0.76,  
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt 
([
    {
        name: "from",
        message : "Select the Currency you want to convert from.",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Select the currency you want to convert to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]

    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }

]);

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount* toAmount
console.log(convertedAmount);


#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    usd: 1,
    eur: 0.90,
    gbp: 0.70,
    inr: 75.34,
    pkr: 300,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["usd", "euro", "gbp", "inr", "pkr"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["usd", "euro", "gbp", "inr", "pkr"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromamount;
let covertedamount = baseamount * toamount;
console.log(Math.round(covertedamount));

#!/usr/bin/env node
console.log("can i get a hoooyaaa");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter ther first number",
        type: "number",
        name: "firstNumber" },
    { message: "enter the second number",
        type: "number",
        name: "secondNumber"
    },
    { message: "select the operator for calculation",
        type: "list",
        name: "operator",
        choices: ["add", "sub", "mult", "div"]
    },
]);
if (answer.operator === "add") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "sub") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "mult") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "div") {
    console.log(answer.firstNumber / answer.secondNumber);
}
//console.log(answer);

#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNum" },
    { message: "Enter second number", type: "number", name: "secondNum" },
    {
        message: "Seclect one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log("Your Answer is ", answer.firstNum + answer.secondNum);
}
else if (answer.operator === "Subtraction") {
    console.log("Your Answer is ", answer.firstNum - answer.secondNum);
}
else if (answer.operator === "Multiplication") {
    console.log("Your Answer is ", answer.firstNum * answer.secondNum);
}
else if (answer.operator === "Division") {
    console.log("Your Answer is ", answer.firstNum / answer.secondNum);
}
else {
    console.log("Please select valid operator");
}

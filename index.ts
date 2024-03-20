#! /usr/bin/env node

import inquirer from "inquirer";
// in line 1 # is called sha ! is called bang, SHAbANG   tells that this is not an ordinary file it can be execute in terminal
//inquirer won't work if npm i inquirer
//then npm i --save-dev @types/inquirer
while (true) {
  //this is a loop for input again and again
  const answer = await inquirer.prompt([
    //                                              ---name is use for what format will answer be save in
    //   --message is to show use before/after input
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
      message: "select one of the operators to perform action",
      type: "list",
      name: "operator",
      choices: ["Addition", "Substraction", "Multiplication", "Division","end"],
      //   choice to show action performing6

    },
  ]);
  //prompt is for user input-------EXAMPLE: we all study after the arrivalof teacher
  // await : wait for user inpur or user data
  //  []--[array]-- for multiple type of DATA in this bracket
  // {}--for whatuser input

  //  --------------NOW FOR CONDITIONAL STATEMENT---------------
  // --------wHEN usER SAYS ADDTION---
  if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
  } else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  } else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  } else if (answer.operator === "Division")
    console.log(answer.firstNumber / answer.secondNumber);
    else if (answer.operator === "end") {
      break;
    } else {
      console.log("please select valid operator ");
    }
    }
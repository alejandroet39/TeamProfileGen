const Employee = require("./classes/employees");
//  dot dash is checking what is in that folder
// dot dot dash is saying what is in that folder above you

const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const requirehtml = require("./generatehtml");

const qManager = [
  "what is the manager's name?",
  "what is the manager's email?",
  "what is the manager's ID?",
  "what is the manager's office number?",
];
const nameManager = ["mgerName", "mgerEmail", "mgerID", "mgerOfficeNO"];

const managerArray = [];
for (let i = 0; i < qManager.length; i++) {
  managerArray.push({
    type: "input",
    message: qManager[i],
    name: nameManager[i],
  });
}
console.log(managerArray);

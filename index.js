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

const qEngineer = [
  "what is the engineer's name?",
  "what is the engineer's email?",
  "what is the engineer's ID?",
  "what is the engineer's office number?",
];
const nameEngineer = ["engName", "engEmail", "engID", "engOfficeNO"];

const engArray = [];
for (let i = 0; i < qEng.length; i++) {
  engArray.push({
    type: "input",
    message: qEngineer[i],
    name: nameEngineer[i],
  });
}
console.log(engArray);

const qIntern = [
  "what is the intern's name?",
  "what is the intern's email?",
  "what is the intern's ID?",
  "what is the intern's office number?",
];
const nameIntern = ["intName", "intEmail", "intID", "intOfficeNO"];

const intArray = [];
for (let i = 0; i < qIntern.length; i++) {
  engArray.push({
    type: "input",
    message: qIntern[i],
    name: nameIntern[i],
  });
}
console.log(intArray);

const Employee = require("./classes/employees");
//  dot dash is checking what is in that folder
// dot dot dash is saying what is in that folder above you

const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const generatehtml = require("./generatehtml");
const { generateKey } = require("crypto");

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
// console.log(managerArray);

const qEngineer = [
  "what is the engineer's name?",
  "what is the engineer's email?",
  "what is the engineer's ID?",
  "what is the engineer's gitHub?",
];
const nameEngineer = ["engName", "engEmail", "engID", "engGitHub"];

const engArray = [];
for (let i = 0; i < qEngineer.length; i++) {
  engArray.push({
    type: "input",
    message: qEngineer[i],
    name: nameEngineer[i],
  });
}
// console.log(engArray);

const qIntern = [
  "what is the intern's name?",
  "what is the intern's email?",
  "what is the intern's ID?",
  "what is the intern's school?",
];
const nameIntern = ["intName", "intEmail", "intID", "intSchool"];

const intArray = [];
for (let i = 0; i < qIntern.length; i++) {
  intArray.push({
    type: "input",
    message: qIntern[i],
    name: nameIntern[i],
  });
}
// console.log(intArray);

const menu = [
  {
    type: "list",
    message: "do we still need to add more staff?",
    name: "menu",
    choices: ["add more interns", "add more engineers", "done and happy"],
  },
];

const staff = [];

function team() {
  inquirer.prompt([...managerArray]).then((manager) => {
    var myManager = new Manager(
      manager.mgerName,
      manager.mgerEmail,
      manager.mgerID,
      manager.mgerOfficeNO
    );
    staff.push(myManager);
    dashboard();
  });
}
function dashboard() {
  inquirer.prompt([...menu]).then((people) => {
    if (people.menu == "add more interns") {
      inquirer.prompt(intArray).then((internData) => {
        var intern = new Intern(
          internData.intName,
          internData.intEmail,
          internData.intID,
          internData.intSchool
        );
        staff.push(intern);
        dashboard();
      });
    } else if (people.menu == "add more engineers") {
      inquirer.prompt(engArray).then((engData) => {
        var engineer = new Engineer(
          engData.engName,
          engData.engEmail,
          engData.engID,
          engData.engGitHub
        );
        staff.push(engineer);
        dashboard();
      });
    } else if (people.menu == "done and happy") {
      console.log(staff);
      fs.writeFile("staff.html", generatehtml(staff), function (err) {
        err ? console.error(err) : console.log("success");
      });
    }
  });
}
team();

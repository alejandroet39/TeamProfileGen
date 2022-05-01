const Employee = require("./employees");
class Intern extends Employee {
  constructor(name, email, ID, school) {
    super(name, email, ID);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return `Intern`;
  }
  getRender() {
    return ``;
  }
}
module.exports = Intern;

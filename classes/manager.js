const Employee = require("./employees");
class Manager extends Employee {
  constructor(name, email, ID, officeNumber) {
    super(name, email, ID);
    this.officeNumber = officeNumber;
  }
  getofficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return `Manager`;
  }
  getRender() {
    return ``;
  }
}
module.exports = Manager;

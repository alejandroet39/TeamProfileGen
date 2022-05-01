const Employee = require("./employees");
class Engineer extends Employee {
  constructor(name, email, ID, gitHub) {
    super(name, email, ID);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return `Engineer`;
  }
  getRender() {
    return ``;
  }
}
module.exports = Engineer;

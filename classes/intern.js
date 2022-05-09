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
    return `<div class="col-sm-4">
    <div class="card p-3">
      <div class="card-body">
        <h5 class="card-title">${this.getname}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.getRole}</h6>
        <a href="#" class="card-link">id: ${this.getID} </a>
        <a href= mailto:"${this.getemail}"  target="_blank" class="card-link">email: ${this.getemail}</a>
        <a href= "#" target="_blank" class="card-link">school: ${this.getSchool}</a>
      </div>
    </div>
  </div>`;
  }
}
module.exports = Intern;

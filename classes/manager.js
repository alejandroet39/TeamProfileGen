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
    return `<div class="col-sm-4">
    <div class="card p-3">
      <div class="card-body">
        <h5 class="card-title">${this.getname}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.getRole}</h6>
        <a href="#" class="card-link">id: ${this.getID} </a>
        <a href= mailto:"${this.getemail}"  target="_blank" class="card-link">email: ${this.getemail}</a>
        <a href= "#" target="_blank" class="card-link">officeNumber: ${this.getofficeNumber}</a>
      </div>
    </div>
  </div>`;
  }
}
module.exports = Manager;

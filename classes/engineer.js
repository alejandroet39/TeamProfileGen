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
    return ` <div class="col-sm-4">
    <div class="card p-3">
      <div class="card-body">
        <h5 class="card-title">${this.getname()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
        <a href="#" class="card-link">id: ${this.getID()} </a>
        <a href= mailto:"${this.getemail()}"  target="_blank" class="card-link">email: ${this.getemail()}</a>
        <a href= "https://github.com/${this.getGitHub()}" target="_blank" class="card-link">userName:${this.getGitHub()}</a>
      </div>
    </div>
  </div>
`;
  }
}
module.exports = Engineer;

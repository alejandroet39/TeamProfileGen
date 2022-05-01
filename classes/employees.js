class Employee {
  constructor(name, email, ID) {
    this.name = name;
    this.email = email;
    this.ID = ID;
  }

  getname() {
    return this.name;
  }
  getemail() {
    return this.email;
  }
  getID() {
    return this.ID;
  }
  getRole() {
    return `Employee`;
  }
}
module.exports = Employee;

// var employee = new Employee("Ale", "ale@gmail.com", "01");
// var employee = new Employee("Kimi", "kimi@gmail.com", "01");
// var employee = new Employee("Marco", "marco@gmail.com", "01");

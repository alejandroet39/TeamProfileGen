const Employee = require("../classes/employees");
describe("Employee", () => {
  describe("inicialization", () => {
    it("create object with name, email, ID", () => {
      const employee = new Employee("ale", "ale@gmail.com", "01");

      expect(employee.name).toEqual("ale");
      expect(employee.email).toEqual("ale@gmail.com");
      expect(employee.ID).toEqual("01");
    });
  });
});

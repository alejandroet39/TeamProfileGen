const Manager = require("../classes/manager");

describe("Manager", () => {
  describe("inicialization", () => {
    it("create object with name, email, ID", () => {
      const manager = new Manager("ale", "ale@gmail.com", "01", "office1");

      expect(manager.name).toEqual("ale");
      expect(manager.email).toEqual("ale@gmail.com");
      expect(manager.ID).toEqual("01");
      expect(manager.officeNumber).toEqual("office1");
    });
    it("testing the getRole function that returns manager", () => {
      const manager = new Manager("ale", "ale@gmail.com", "01", "office1");
      const role = `Manager`;

      expect(manager.getRole()).toEqual(role);
    });
  });
});

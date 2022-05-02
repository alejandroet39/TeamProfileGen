const Engineer = require("../classes/engineer");
describe("Engineer", () => {
  describe("inicialization", () => {
    it("create object with name, email, ID", () => {
      const engineer = new Engineer("ale", "ale@gmail.com", "01", "userName");

      expect(engineer.name).toEqual("ale");
      expect(engineer.email).toEqual("ale@gmail.com");
      expect(engineer.ID).toEqual("01");
      expect(engineer.gitHub).toEqual("userName");
    });
    it("testing the getRole function that returns employee", () => {
      const engineer = new Engineer("ale", "ale@gmail.com", "01", "userName");
      const role = `Engineer`;

      expect(engineer.getRole()).toEqual(role);
    });
  });
});

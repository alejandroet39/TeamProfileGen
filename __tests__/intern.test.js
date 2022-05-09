const Intern = require("../classes/intern");
describe("Intern", () => {
  describe("inicialization", () => {
    it("create object with name, email, ID", () => {
      const intern = new Intern("ale", "ale@gmail.com", "01", "cookingSchool");

      expect(intern.name).toEqual("ale");
      expect(intern.email).toEqual("ale@gmail.com");
      expect(intern.ID).toEqual("01");
      expect(intern.school).toEqual("cookingSchool");
    });
    it("testing the getRole function that returns intern", () => {
      const intern = new Intern("ale", "ale@gmail.com", "01", "cookingSchool");
      const role = `Intern`;

      expect(intern.getRole()).toEqual(role);
    });
  });
});

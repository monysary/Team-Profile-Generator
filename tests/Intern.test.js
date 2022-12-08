const intern = require("../lib/Intern");

describe("Intern", () => {
    it("Tests if intern name property returns name value", () => {
        const name = "Tom Timmy";
        const testObj = new intern(name);
        expect(testObj.name).toBe(name);
    })

    it("Tests if intern id property returns id value", () => {
        const id = 321;
        const testObj = new intern("Tom Timmy", id);
        expect(testObj.id).toBe(id);
    })

    it("Tests if intern email property returns email value", () => {
        const email = "TomTimmy@gmail.com";
        const testObj = new intern("Tom Timmy", 321, email);
        expect(testObj.email).toBe(email);
    })

    it("Tests if intern office number property returns officeNumber value", () => {
        const school = "The University";
        const testObj = new intern("Tom Timmy", 321, "TomTimmy@gmail.com", school);
        expect(testObj.school).toBe(school);
    })
})
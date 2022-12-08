const manager = require("../lib/Manager");

describe("Manager", () => {
    it("Tests if manager name property returns name value", () => {
        const name = "Jane Doe";
        const testObj = new manager(name);
        expect(testObj.name).toBe(name);
    })

    it("Tests if manager id property returns id value", () => {
        const id = 456;
        const testObj = new manager("Jane Doe", id);
        expect(testObj.id).toBe(id);
    })

    it("Tests if manager email property returns email value", () => {
        const email = "JaneDoe@gmail.com";
        const testObj = new manager("Jane Doe", 456, email);
        expect(testObj.email).toBe(email);
    })

    it("Tests if manager office number property returns officeNumber value", () => {
        const officeNumber = 101;
        const testObj = new manager("Jane Doe", 456, "JaneDoe@gmail.com", officeNumber);
        expect(testObj.officeNumber).toBe(officeNumber);
    })

    it("Tests if manager getRole method returns 'Manager'", () => {
        const testObj = new manager("Jane Doe", 456, "JaneDoe@gmail.com", 101);
        expect(testObj.getRole()).toBe("Manager");
    })
})
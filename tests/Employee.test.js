const employee = require("../lib/Employee");

describe("Employee", () => {
    it("Tests if employee name property returns name value", () => {
        const name = "John Doe";
        const testObj = new employee(name);
        expect(testObj.name).toBe(name);
    })
    
    it("Tests if employee id property returns id value", () => {
        const id = 123;
        const testObj = new employee("John Doe", id);
        expect(testObj.id).toBe(id);
    })
    
    it("Tests if employee email property returns email value", () => {
        const email = "JohnDoe@gmail.com";
        const testObj = new employee("John Doe", 123, email);
        expect(testObj.email).toBe(email);
    })
})
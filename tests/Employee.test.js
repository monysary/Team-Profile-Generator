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

    it("Tests if employee getName method returns employee's name", () => {
        const testObj = new employee("John Doe", 123, "JohnDoe@gmail.com");
        expect(testObj.getName()).toBe("John Doe");
    })

    it("Tests if employee getID method returns employee's ID", () => {
        const testObj = new employee("John Doe", 123, "JohnDoe@gmail.com");
        expect(testObj.getID()).toBe(123);
    })

    it("Tests if employee getEmail method returns employee's email", () => {
        const testObj = new employee("John Doe", 123, "JohnDoe@gmail.com");
        expect(testObj.getEmail()).toBe("JohnDoe@gmail.com");
    })

    it("Tests if employee getRole method return's 'Employee'", () => {
        const testObj = new employee("John Doe", 123, "JohnDoe@gmail.com");
        expect(testObj.getRole()).toBe("Employee");
    })
})
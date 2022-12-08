const engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Tests if engineer name property returns name value", () => {
        const name = "Billy Bob";
        const testObj = new engineer(name);
        expect(testObj.name).toBe(name);
    })

    it("Tests if engineer id property returns id value", () => {
        const id = 789;
        const testObj = new engineer("Billy Bob", id);
        expect(testObj.id).toBe(id);
    })

    it("Tests if engineer email property returns email value", () => {
        const email = "BillyBob@gmail.com";
        const testObj = new engineer("Billy Bob", 789, email);
        expect(testObj.email).toBe(email);
    })

    it("Tests if engineer office number property returns officeNumber value", () => {
        const gitHub = "billybob";
        const testObj = new engineer("Billy Bob", 789, "BillyBob@gmail.com", gitHub);
        expect(testObj.gitHub).toBe(gitHub);
    })
})
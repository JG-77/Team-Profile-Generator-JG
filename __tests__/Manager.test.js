const Manager = require('../lib/Manager');

describe('Manager class getOfficeNum()', () => {
     //Test for getOfficeNum()
    it("should diplay the manager's office number", () => {

        expect(new Manager('Jon','17','Sample@email.com','Office-Number').getOfficeNum()).toBe('Office-Number');
    });
    it("should return error if no input is given", () => {

        expect(new Manager().getOfficeNum()).toBe(undefined);
    });
    //Test getRole()
    it("should diplay the employee's role", () => {

        expect(new Manager().getRole()).toBe('Manager');
    });
});
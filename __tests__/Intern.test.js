const Intern = require('../lib//Intern');

describe('Intern class getSchool()', () => {
     //Test for getSchool()
    it("should diplay the interns's school name", () => {

        expect(new Intern('Jon','17','Sample@email.com','SDSU').getSchool()).toBe('SDSU');
    });
    it("should return error if no input is given", () => {

        expect(new Intern().getSchool()).toBe(undefined);
    });
    //Test getRole()
    it("should diplay the employee's role", () => {

        expect(new Intern().getRole()).toBe('Intern');
    });
});
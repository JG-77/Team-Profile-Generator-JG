const Employee = require('../lib/Employee');

describe('Employee class', () => {
    //Test for getName()
    it("should diplay the employee's name", () => {

        expect(new Employee('Sample Name').getName()).toBe('Sample Name');
    });
    it("should return error if no input is given", () => {

        expect(new Employee().getName()).toBe(undefined);
    });

    //Test for getId()
    it("should display employee's ID", () => {
        // const employee = new Employee('Jon',10);
        // expect(employee.getId()).toBe('number');
        expect(new Employee('Jon','17').getId()).toBe('17');
    });
     it("should return error if no input is given", () => {

        expect(new Employee().getId()).toBe(undefined);
    });

    //Test for getEmail()
    it("should display employee's email", () => {

        expect(new Employee('Jon','17','Sample@email.com').getEmail()).toBe('Sample@email.com');
    });
     it("should return error if no input is given", () => {

        expect(new Employee().getEmail()).toBe(undefined);
    });
})
//const Employee = require('./Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer class getgitHub()', () => {
     //Test for getGitHub()
    it("should diplay the engineer's github URL", () => {

        expect(new Engineer('Jon','17','Sample@email.com','Sample-user').getGitHub()).toBe('Sample-user');
    });
    it("should return error if no input is given", () => {

        expect(new Engineer().getGitHub()).toBe(undefined);
    });
    //Test getRole()
    it("should diplay the employee's role", () => {

        expect(new Engineer().getRole()).toBe('Engineer');
    });
});
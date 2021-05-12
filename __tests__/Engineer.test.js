//const Employee = require('./Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer class getgitHub()', () => {
     //Test for getGitHub()
    it("should diplay the engineer's github URL", () => {

        expect(new Engineer('Sample-user').getGitHub()).toBe('https://github.com/Sample-user');
    });
    it("should return error if no input is given", () => {

        expect(new Engineer().getGitHub()).toBe(undefined);
    });
});
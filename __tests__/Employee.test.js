// const { it } = require('@jest/globals');
// const { describe } = require('yargs');
// const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe('Employee class', () => {
    //describe('getName', () => {
        it("should diplay the employee's name", () => {

            expect(new Employee('Sample Name').getName()).toBe('Sample Name');
        });
        it("should return error if no input is given", () => {

            expect(new Employee().getName()).toBe(undefined);
        });


    //})
})
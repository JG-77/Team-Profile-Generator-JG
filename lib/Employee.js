class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    };

    getId(str) {
        return str;
    };

    getEmail(str) {
        return str;
    };
}

module.exports = Employee;
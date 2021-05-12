const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(gitHub) {
        super()
        this.gitHub = gitHub
    }

    getGitHub() {
        return `https://github.com/${this.gitHub}`;
    };
}

module.exports = Engineer;
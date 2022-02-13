const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    //Returns engineer's github username
    getGithub(){
        return this.github;
    }

    //Overrides parent getRole
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    //Returns Intern's school
    getSchool(){
        return this.school;
    }

    //Overrides parent getRole
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
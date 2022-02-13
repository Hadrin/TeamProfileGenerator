const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
    }

    //Returns Manager's Office Number
    getOffice(){
        return this.office;
    }

    //Overrides parent getRole
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
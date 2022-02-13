const fs = require('fs');

class pageCreator{
    constructor(team){
        for(var i = 0; i < team.length; i++){
            switch(team[i].getRole()){
                case "Manager":
                    managerCard(team[i]);
                    break;
                case "Engineer":
                    engineerCard(team[i]);
                    break;
                case "Intern":
                    internCard(team[i]);
                    break;
                default:
                    throw new Error("Bad getRole() encountered in pageCreator: " + team[i].getRole());
            }
        }
    }
}

function managerCard(manager){

}

function engineerCard(engineer){

}

function internCard(intern){

}

module.exports = pageCreator;
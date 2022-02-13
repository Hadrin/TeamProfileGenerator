//Imports packages required for the program
const inquirer = require('inquirer');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');
const Manager = require('./src/Manager');
const pageCreator = require('./lib/pageCreator');


//Creates an array to hold team members
let team = new Array;

//Defines prompts for object creation
const teamManagerPrompt = [
    {
        type: "input",
        message: "Enter the name of the Team Manager:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the Team Manager's employee ID:",
        name: "employeeID"
    },
    {
        type: "input",
        message: "Enter the Team Manager's email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the Team Manager's office number:",
        name: "office"
    }
]

const engineerPrompt = [
    {
        type: "input",
        message: "Enter the name of the Engineer:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the Engineers's employee ID:",
        name: "employeeID"
    },
    {
        type: "input",
        message: "Enter the Engineers's email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the Engineer's github username:",
        name: "github"
    }
]

const internPrompt = [
    {
        type: "input",
        message: "Enter the name of the Intern:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the Intern's employee ID:",
        name: "employeeID"
    },
    {
        type: "input",
        message: "Enter the Intern's email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the Intern's school:",
        name: "school"
    }
]

const menuPrompt = [
    {
        type: "list",
        message: "Select an option:",
        name: "choice",
        choices: [
            {
                name: "Add Engineer"
            },
            {
                name: "Add Intern"
            },
            {
                name: "Exit and generate page"
            }
        ]
    }
]

//Prompts the user to create a Manager and adds to the team
function addManager() {
    inquirer.prompt(teamManagerPrompt).then((answers) => {
        let newManager = new Manager(answers.name, answers.employeeID, answers.email, answers.office);
        team.push(newManager);
        console.log(`Manager ${answers.name} created`);
        mainLoop();
    });
}

//Prompts the user to create an Engineer and adds to the team
function addEngineer() {
    inquirer.prompt(engineerPrompt).then((answers) => {
        let newEngineer = new Engineer(answers.name, answers.employeeID, answers.email, answers.github);
        team.push(newEngineer);
        console.log(`Engineer ${answers.name} created`);
        mainLoop();
    });
}

//Prompts the user to create an Intern and adds to the team
function addIntern() {
    inquirer.prompt(internPrompt).then((answers) => {
        let newIntern = new Intern(answers.name, answers.employeeID, answers.email, answers.school);
        team.push(newIntern);
        console.log(`Intern ${answers.name} created`);
        mainLoop();
    });
}

//Main Program Loop
function mainLoop() {
    inquirer.prompt(menuPrompt).then((answers) => {
        switch (answers.choice) {
            case "Add Engineer":
                addEngineer();
                break;
            case "Add Intern":
                addIntern();
                break;
            case "Exit and generate page":
                createPage();
                break;
            default:
                throw new Error("improper menu choice detected: " + answers.choice);
        }
    })
}

//TODO: Page Creation Logic
function createPage() {
    new pageCreator(team);
}

//Begin primary program loop
addManager();


//dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

//constructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('template.js');
const { ADDRGETNETWORKPARAMS } = require('dns');

// empty arrays for team and id as place holders
const teamArr = [];
const idArr = [];

//start
function init() {
    //prompts user for information  to create manaager
    function addManager() {
        console.log("Build your team profile");
        inquirer.prompt([{
                type: "input",
                name: "managerName",
                message: "What's the Manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the Manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's Email?"
            },
            {
                type: "input",
                name: "managerOffNum",
                message: "What is the Manager's office number?"
            },
        ]).then(answer => {
            const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffNum);
            teamArr.push(manager);
            idArr.push(answer.managerId);
            addTeam();
        });

    }

    //addTeam function after addManager
    function addTeam() {
        //prompt for team members
        inquirer.prompt([{
            type: "list",
            name: "teamChoice",
            message: "What would you like to add next?",
            choices: ["Engineer", "Inter"]
        }]).then(userChoice => {
            switch (userChoice.teamChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHtml();
            }
        });
    };

    //add engineer when selected
    function addEngineer() {
        inquirer.prompt([{
            type:
        }])
    }
}
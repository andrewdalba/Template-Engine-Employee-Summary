const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const renderHtml = require("./lib/HtmlFileWriter.js");
const questions = require("./lib/questions.js");

const outputDirect = path.resolve(__dirname, "output");
const outputPath = path.join(outputDirect, "team.html");

let employees = [];
let teamName = ""; //initialize teeamName to a string
let isManager = false;
let isEngineer = false;

function inputEmployeeInfo() {
    let employeeData = {};
    inquirer.prompt(questions).then(response => {
        if (response.role === "Manager") {
            employeeData = new Manager(response.employeeName, response.employeeID, response.email, response.officeNumber);
            isManager = true;
        } 
        else if (response.role === "Engineer") {
            employeeData = new Engineer(response.employeeName, response.employeeID, response.email, response.gitHubUsername);
            isEngineer = true;
        } 
        else { //if not manager and not engineer then employee must be intern
            employeeData = new Intern(response.employeeName, response.employeeID, response.email, response.school);
        }
        employees.push(employeeData);
        if (response.nextEmployee) {
            //if there is another employee then ask questions again
            inputEmployeeInfo();
        } 
        else {
            //there must be at least a manager or an engineer on the team
            if (isManager === false) {
                console.log("No Managers");
                inputEmployeeInfo();
            } 
            else if (isEngineer === false) {
                console.log("No Engineers");
                inputEmployeeInfo();
            } 
            // if at least a manager and/or an engineer role has been filled and 
            // there are no other employees on the team then write the file
            else {
                
                fs.writeFile(outputPath, renderHtml(employees, teamName), (er) => {
                    if (er) return console.log(er);
                    console.log(`team.html has been created at: ${outputPath}`);
                });
                return
            }
        }


    });
};

function getTeamName() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of your team.",
            name: "teamName",
            validate: teamName => {
                if (teamName.length < 1) {
                    return "Team name is too short";
                }
                else {
                    return true;
                }
            },
        },
    ]).then(response => {
        teamName = response.teamName;
        inputEmployeeInfo();
    });
}
getTeamName();






// ------------------------- PSUEDO CODE ------------------------
// somehow we have to ask questions about the team

// create the team based on the data

// write the html

// finally tell the user hwere the html file is



// - test cases first
// - create the objects and methods to pass those test cases
// - refactor the code (if we have time)
// - go to the next step in the project
// ------------------------- END OF PSUEDO CODE ------------------------



// const employeeQuestions = [{
//     type: "input",
//     message: "Enter name of Employee.",
//     name: "name",
//     validate: input => {
//         const validName = /^[a-zA-Z]+([\ A-Za-z\'\-]+)*/i;
//         if (validName.test(input)) return true;
//         return "Please enter a valid name.";
//     },
// }
// ];

// function init() {
//     // takes the individual array elements from 'questions' and puts them into the inquirer module
//     // the module takes that data to prompt the user
//     // THEN the response is put into a function
//     inquirer.prompt(employeeQuestions).then((response) => {
//         console.log(response);
        
//     })

// }
// init();
const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const employeeQuestions = [{
    type: "input",
    message: "Enter name of Employee.",
    name: "name",
    validate: input => {
        const validName = /^[a-zA-Z]+([\ A-Za-z\'\-]+)*/i;
        if (validName.test(input)) return true;
        return "Please enter a valid name.";
    },
}
];

function init() {
    // takes the individual array elements from 'questions' and puts them into the inquirer module
    // the module takes that data to prompt the user
    // THEN the response is put into a function
    inquirer.prompt(employeeQuestions).then((response) => {
        console.log(response);
        
    })

}
init();
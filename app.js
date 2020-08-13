const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const renderHtml = require("./lib/HtmlFileWriter.js");





let employees = [];






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
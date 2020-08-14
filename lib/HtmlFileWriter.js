const path = require("path");
const fs = require('fs');
const templatesPath = path.resolve(__dirname, "../templates");

// "employees" is an array keeping track of the class objects called "employeeData"
function renderHtml(employees, teamName) {
    const html = [];
    // the array "employees" is passed into an arrow function with the paramter "employee"
    // this function (called filter()) returns an array that contains only the elements from "employees" that when paired with the ".getRole()" method, return "manager"
    // the map part of this takes all of the elements filtered out and puts them into an arrow function with the parameter "manager"
    // the function takes each element, puts them into the "renderManager()" function, and returns the result which would be an array -- the .join method removes commas between these array elements
    // the resulting array is made up of html templates populated with information specific to the role.
    // the resulting array is pushed into another array called "html".
    html.push(employees
        .filter(employee => employee.getRole() === "Manager") 
        .map(manager => renderManager(manager)).join("") 
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer)).join("")
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern)).join("")
    );
    return replacePlaceholders(renderMain(html.join("")), "MyTeam", teamName);
    // This function returns a function that replaces the placeholders in an html template with the elements of the array "html" which is made up of blocks of html

}


module.exports = renderHtml;
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

const renderManager = manager => {
    // fs.readFileSync() returns the contents of the path inside of it -- these contents are saved in a variable called "template"
    // path.resolve() combines it's contents into one path
    // "template" now contains the contents of the html file with the tile "manager.html"
    let template = fs.readFileSync(path.resolve(templatesPath, "manager.html"), "utf8");
    // updates "template" by replacing the placeholders
    template = replacePlaceholders(template, "name", manager.getMemberName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getIdNumber());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
    // returns the populated template back to be processed by the map method above
    // after it is mapped it is put into the "html" array which is passed into the "renderMain()" function
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesPath, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getMemberName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getIdNumber());
    template = replacePlaceholders(template, "github", engineer.getGitHub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesPath, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getMemberName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getIdNumber());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};
// getting the headings
const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesPath, "template.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};
// main replacing function
const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};


module.exports = renderHtml;
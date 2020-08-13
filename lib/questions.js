const questions = [
    {
        type: "list",
        message: "Please choose your position in the team.",
        choices: ["Manager", "Engineer", "Intern"],
        default: 0,
        name: "role"
    },
    {
        type: "input",
        message: "Please enter your name.",
        name: "employeeName",
        validate: employeeName => {
            let inputRequirements = /^(([A-za-z-_]+[\s]{1}[A-za-z-_]+)|([A-Za-z-_]+))$/gim;
            if (!employeeName.match(inputRequirements)) {
                return "Unexpected character.";
            } 
            else {
                return true

            }
        }
    },
    {
        type: "input",
        message: "Please enter your emploee ID.",
        name: "employeeID",
        validate: employeeID => {
            let inputRequirements = /^([0-9])+$/;
            if (!employeeID.match(inputRequirements)) {
                return "Unexpected character; Employee ID must be a number.";
            } 
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email",
        validate: email => {
            let inputRequirements = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if (!email.match(inputRequirements)) {
                return "Invalid email address.";
            } 
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Please enter your Github username.",
        name: "gitHubUsername",
        validate: gitHubUsername => {
            let inputRequirements = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i; //alphanumeric characters or hyphens. No consecutive hyphens. Does not begin or end with a hyphen. Max length 39
            if (!gitHubUsername.match(inputRequirements)) {
                return "Invalid GitHub Username";
            } 
            else {
                return true;
            }
        },
        when: function (response) { return response.role === "Engineer" }
    },
    {
        type: "input",
        message: "Please enter your office number.",
        name: "officeNumber",
        validate: officeNumber => {
            let inputRequirements = /^([0-9])+$/;
            if (!officeNumber.match(inputRequirements)) {
                return "Invalid office number; Office number must be a number";
            } 
            else {
                return true;
            }
        },
        when: function (response) { return response.role === "Manager" }
    },
    {
        type: "input",
        message: "Please enter the name of your school.",
        name: "school",
        validate: school => {
            if (school.length < 1) {
                return "School name is too short";
            }
            else {
                return true;
            }
        },
        when: function (response) { return response.role === "Intern" }
    },
    {
        type: "confirm",
        message: "Would you like to add another Employee?",
        name: "nextEmployee",
    },

];

module.exports = questions;
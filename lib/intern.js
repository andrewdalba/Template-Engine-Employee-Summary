const TeamMember = require("../teammember.js");
class Intern extends TeamMember {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        if (this.school.length < 1) {
            console.log("School name is too short.");
            throw "Error on school name length";
        }
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
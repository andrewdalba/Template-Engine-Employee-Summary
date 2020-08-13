const TeamMember = require("./teammember.js")
class Engineer extends TeamMember {
    constructor(memberName, idNumber, email, gitHub) {
        // "super" allows you to use the same properties and methods 
        // from the parent class constructor. in this case the parent constructor is TeamMember
        super(memberName, idNumber, email);
        this.gitHub = gitHub;

        let containsSpecialCharacters;
        const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`=";
        for (let i = 0; i < specialChars.length; i++) {
            if (this.gitHub.indexOf(specialChars[i]) > -1) {
                containsSpecialCharacters = true;
                console.log("GitHub username is not valid");
                throw "Invalid GitHub username";
            }
            else{
                containsSpecialCharacters = false;
            }

        }
        

    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;
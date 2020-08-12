const TeamMember = require("../teammember.js")
class Engineer extends TeamMember {
    constructor (memberName, idNumber, email, gitHub){
        // "super" allows you to use the same properties and methods 
        // from the parent class constructor. in this case the parent constructor is TeamMember
        super(memberName, idNumber, email); 
        this.gitHub = gitHub;
    }
    getRole(){
        return "Engineer";
    }
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;
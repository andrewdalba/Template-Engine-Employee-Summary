const TeamMember = require("./teammember.js");

class Manager extends TeamMember{
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        // if(this.officeNumber != true){
        //     console.log("Office number must be a number");
        //     throw "Invalid office number";
        // }
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;
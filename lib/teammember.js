class TeamMember{
    constructor(memberName, idNumber, email){
        this.memberName = memberName;
        this.idNumber = idNumber;
        this.email = email;
        if (this.memberName.length < 1) {
            console.log("Team member name is too short.");
            throw "Team member name is too short";
        }
    }
    getMemberName (){
        return this.memberName;
    }
    getIdNumber (){
        return this.idNumber;
    }
    getEmail (){
        return this.email;
    }
    getRole (){
        return "Employee";
    }
}
module.exports = TeamMember;
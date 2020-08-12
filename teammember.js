class TeamMember{
    constructor(memberName){
        this.memberName = memberName;
        if (this.memberName.length < 1) {
            console.log("Team member name is too short.");
            throw "Team member name is too short";
        }
    }
}
module.exports = TeamMember;
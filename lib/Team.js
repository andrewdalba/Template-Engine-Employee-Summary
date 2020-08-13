
class Team {
    constructor(name) {
        this.name = name;
        if (this.name.length < 1) {
            console.log("Name is too short.");
            throw "Error on name length or name type";
        }
    }
    // constructor(name) {
    //     this.name = name;

    //     const acceptableNames = ["engineer", "intern", "manager", "Engineer", "Intern", "Manager"];
    //     let arrayContainsName;
    //     if (acceptableNames.indexOf(this.name) === -1){
    //         arrayContainsName = false;
    //     }
    //     else{
    //         arrayContainsName = true;
    //     }
        
    //     if (this.name.length < 1 || arrayContainsName === false) {
    //         console.log("Name is too short or name is incorrect type -- name must be 'Engineer', 'Intern', or 'Manager'.");
    //         throw "Error on name length or name type";
    //     }
    // }
}

module.exports = Team;
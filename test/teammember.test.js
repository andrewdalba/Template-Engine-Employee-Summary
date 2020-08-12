const TeamMember = require("../teammember.js");

// test suits here
describe("TeamMember", () => {
    describe("Test Team Member", () => {
        it("should contain team member name", () => {
            // Setup
            let memberName = "Andrew D'Alba" //to be entered by the user

            // Execution
            let andrew = new TeamMember(memberName)
            let output = andrew.memberName;

            // Evaluate
            expect(output).toEqual(memberName);
        });
        it("should not accept an empty team member name and console log an error", () => {
            // Setup
            // Must create a mock for console.log
            let memberName = "";
            let error = "Team member name is too short.";
            mock = jest.spyOn(console, "log")
            mock.mockImplementation( () => {});

            // Execution
            try{
                let andrew = new TeamMember(memberName);
            }
            catch(e){
                // do nothing
            }
            
            // Evaluate
            expect(mock).toBeCalledWith(error);
        });
    });
});
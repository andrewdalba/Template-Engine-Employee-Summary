const Team = require("../Team.js");
const { italic } = require("ansi-styles");
const expectExport = require("expect");

describe("Team", () => {
    // describe("Test framework", () => {
    //     it("Test it - should fail", () => {
    //         expect(true).toEqual(false);
    //     });
    //     it("Test it - should pass", () => {
    //         expect(true).toEqual(true);
    //     });
    // });

    describe("Name property suite", () => {
        it("should take a name and save it to something alled name on the object", () => {
            // setup
            let name = "engineer";
            // Execution
            let engineer = new Team(name);
            let output = engineer.name;

            // Evaluate
            expect(output).toEqual(name);
        });
        it("should not accept an empty name and console log an error", () => {
            // need a mock for console.log
            // setup
            let name = "";
            let error = "name is too short.";
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation( () => {});

            // Execution
            try{
                let engineer = new Team(name);
            }
            catch(e){
                // do nothing
            }
            
            // Evaluate
            expect(mock).toBeCalledWith(error);

        });
    });
});

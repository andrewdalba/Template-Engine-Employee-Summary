const Team = require("../lib/Team.js");

describe("Team", () => {
    // describe("Test framework", () => {
    //     it("Test it - should fail", () => {
    //         expect(true).toEqual(false);
    //     });
    //     it("Test it - should pass", () => {
    //         expect(true).toEqual(true);
    //     });
    // });
    describe("Name Property Suite", () => {
        it("should take a name and save it to something called name on the object", () => {
            // setup
            let name = "Cool Guys Engineering";

            // execution
            let seahawks = new Team(name);
            let output = seahawks.name;
            // Evaluate
            expect(output).toEqual(name);
            
        });
        it("should not accept an empty name and console log an error", () => {
            //  need a mock for console.log
            // setup
            let name = "";
            let error = "Name is too short.";
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation( () => {});
            // execution
            try{
               let coolGuys = new Team(name); 
            }
            catch(e){
                // do nothing
            }
            
            // Evaluate
            expect(mock).toBeCalledWith(error);
        });

        // it("should not accept a name other than 'Engineer', 'Intern', or 'Manager' or an empty name and console log an error", () => {
        //     //  need a mock for console.log
        //     // setup
        //     let name = "not engineer";
        //     let error = "Name is too short or name is incorrect type -- name must be 'Engineer', 'Intern', or 'Manager'.";
        //     const mock = jest.spyOn(console, "log");
        //     mock.mockImplementation( () => {});
        //     // execution
        //     try{
        //        let engineer = new Team(name); 
        //     }
        //     catch(e){
        //         // do nothing
        //     }
            
        //     // Evaluate
        //     expect(mock).toBeCalledWith(error);
        // });

    });
});


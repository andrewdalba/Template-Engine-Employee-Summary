const Intern = require("../lib/intern.js");

describe("Intern", () => {
    describe("Intern Property Suite", () => {
        it("should not accept an empty school name and console log an error", () => {
            //  need a mock for console.log
            // setup
            let school = "";
            let error = "School name is too short.";
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation( () => {});
            // execution
            try{
               let coolIntern = new Intern("Andrew", 1, "testemail@email.com", school); 
            }
            catch(e){
                // do nothing
            }
            
            // Evaluate
            expect(mock).toBeCalledWith(error);
        });
    });
});

const Manager = require("../lib/manager.js");

describe("Manager", () => {
    describe("Manager Property Suite", () => {
        it("should not accept anything other than a number for 'Office Number' and console log an error", () => {
            //  need a mock for console.log
            // setup
            let officeNumber = false;
            let error = "Office number must be a number";
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation( () => {});
            // execution
            try{
               let coolManager = new Manager("Andrew", 1, "testemail@email.com", officeNumber); 
            }
            catch(e){
                // do nothing
            }
            
            // Evaluate
            expect(mock).toBeCalledWith(error);
        });

    });
});


const Engineer = require("../lib/engineer.js")

describe("Engineer", () => {
    describe("Test Engineer", () => {
        it("Should not accept an invalid github username and console log an error", () => {
            // Setup
            // Must create a mock for console.log
            let github = "@ndrewd!lba";
            let error = "GitHub username is not valid";
            mock = jest.spyOn(console, "log")
            mock.mockImplementation(() => { });

            // Execution
            try {
                let andrewdalba = new Engineer("Andrew", 1, "testemail@email.com", github);
            }
            catch (e) {
                // do nothing
            }

            // Evaluate
            expect(mock).toBeCalledWith(error);
        });


    });
});
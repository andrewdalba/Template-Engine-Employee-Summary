const HtmlFileWriter = require("../HtmlFileWriter.js");
const fs = require("fs");

// test suites here
describe("HtmlFileWriter", () => {
    describe("Test File Writer", () => {
        it("should try to write the file", () => {
            // setup
            const writer = new HtmlFileWriter();
            const mock = jest.spyOn(fs, "writeFileSync"); //normally would use "writeFile" instead of "writeFileSync" but this is easier to test
            // fs is the file system module
            // writeFileSync() is a function inside of the module "fs"
            // The same way log() is a function inside of the console module
            // fs.writeFileSync() has 3 parameters - file, data, options
            // We want to test that the execution section of our code
            // creates a file with the exact same (file, data, options) that we specified

            mock.mockImplementation( () => {});
           
            const name = "Seahawks Engineering" // to be set as the title of the file we are writing. This will not be tested in the "toBeCalledWith" function
            const templateHtml = '<html><head></head><body><h1><!-- heading --></h1></body></html>'    //this can be an external file the same way the README generator was (I think)
           
            // This will be the (file) parameter in the writeFileSync() function
            const fileName = "team.html";
            
            // this will be the (data) parameter in the writeFileSync() function
            const fileHtml = '<html><head></head><body><h1>Seahawks Engineering</h1></body></html>' //this will be an external file -- it will be created by passing the "templateHtml" into a function

            // 'utf8' will be the (options) parameter in the writeFileSync() function because all html files are utf8

            // execution
            // functions that we will create inside of the HtmlFileWriter class
            writer.addFilename(fileName)
            writer.addTemplate(templateHtml);
            writer.addtitle(name);
            writer.writeFile();

            // evaluate
            // use jest to test that the variable "mock" is equal to
            expect(mock).toBeCalledWith(fileName, fileHtml, "utf8"); 
        });
    });
});


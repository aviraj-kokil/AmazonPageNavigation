# AmazonPageNavigation
Cypress provides two ways to test cases. Either using the Cypress UI Test Runner or from the CLI using the "cypress run" command. So, we accomplished the tasks of having a good overview of the Cypress Test Runner. 
First in visual studio code open this  two file  one is feature file and another is js file.
Here require to create one folder and give same name as feature file and crete one js file same name as feature file. 
From cli run command npx cypress open and see test case in test runner. 
If test case fail then try 3-4 times again here url facing issue so require 3-4 times.
Here one more additional plug in require to be install npm install cypress-real-events. 
Register new commands by adding this to your cypress/support/index.{js,ts} file. import "cypress-real-events/support";.

Register new commands by adding this to your cypress/support/index.{js,ts} file
Cypress.on("uncaught:exception", (err, runnable) => {   
    return false;
});
 


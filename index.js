// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateMarkdown } = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
// const questions = [];

const askQuestions = () => {
    return  inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the purpose or function of the app?"
      },
      {
        type: "input",
        name: "installation",
        message: "How can the app be installed?",
      },
      {
            type: "input",
            name: "usage",
            message: "How can the app be used?"
          },
        {
            type: "list",
            name: "license",
            message: "Which license would you like to apply to the app?",
            choices: [  "GPLv3",
                        "MIT License",
                        "Apache License 2.0",
                        "none"]
        },
          {
                type: "input",
                name: "contributing",
                message: "How can users contribute to the app?"                    
              },
              {
                    type: "input",
                    name: "github_username",
                    message: "What is your Github username?"
                  },
                  {
                        type: "input",
                        name: "email_address",
                        message: "What is your email address?"
                      },
                ]);
            };
                        
            // TODO: Create a function to write README file
            // function writeToFile(fileName, data) {}
            // DONE BELOW
            
            
            
            // TODO: Create a function to initialize app
            const init = async() => {
                try {
                    
                    const answers = await askQuestions();
                    
                    // TODO BLAKE: define the license choice.
                    const license = answers.license;
        console.log(`Chosen license is: ${license}\n`);

      const generatedMarkdown = generateMarkdown(answers);
      
      await writeFileAsync(`${answers.title}_README.md`, generatedMarkdown.trim()); 
      
        console.log('successfully wrote file')
  
    } catch (err) {
      console.log(err);
    }
  };
    
// Function call to initialize app
init();


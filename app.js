// // npm packages
const inquirer = require('inquirer');
const { TimeoutError } = require('rxjs');
  // // npm modules
// const fs = require('fs');

// // project modules
// const generatePage = require('./src/page-template.js');

promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else{
          console.log("Please enter your name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github Username',
      validate: username => {
        if (username) {
          return true;
        } else{
          console.log("Please enter your Github Username!");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else { 
          return false
        }
      }
    }
  ]);
};

  const promptProject = portfolioData => {
    // if theres no projects array, create one
    if(!portfolioData.projects) {
    portfolioData.projects = [];
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (required)',
        validate: projectName => {
          if (projectName) {
            return true;
          } else{
            console.log("Please enter your project name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: description => {
          if (description) {
            return true;
          } else{
            console.log("Please enter your project description!");
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: githubLink => {
          if (githubLink) {
            return true;
          } else{
            console.log("Please enter your github link!");
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData
      }
    });
  };

  promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

// // variable for this file
// const pageHTML = generatePage(name, github);

// // write user input to an HTML file
// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });


// // PRINT INPUT
// // generatePage = (name, github) => {
// //   return `
// //   Name: ${name}
// //   GitHub: ${github}
// //   `;
// // };
// // console.log(name, github);
// // console.log(generatePage(name, github));
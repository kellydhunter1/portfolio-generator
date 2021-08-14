// // npm packages
const inquirer = require('inquirer');
  // // npm modules
// const fs = require('fs');

// // project modules
// const generatePage = require('./src/page-template.js');

inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));


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
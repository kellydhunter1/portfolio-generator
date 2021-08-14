// allows js to create file using local file system
const fs = require('fs');
// allows other other files to connect to functions/objects in this file
const generatePage = require('./src/page-template.js');


// variable for this file
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;


// write user input to an HTML file
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});


// PRINT INPUT
// generatePage = (name, github) => {
//   return `
//   Name: ${name}
//   GitHub: ${github}
//   `;
// };
// console.log(name, github);
// console.log(generatePage(name, github));
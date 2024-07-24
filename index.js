const inquirer = require('inquirer');
const fs = require('fs');
const {markdownOutput} = require("./markdownOutput");
const {userQuestions} = require("./questions");

function getLicenseBadge(license) {
    let licenseBadge;
      if (license === "MIT License"){
        licenseBadge = `[<img src="https://img.shields.io/badge/License-MIT_License-blue">](https://mit-license.org/)`
        
          } else if (license === "Apache License 2.0"){
            licenseBadge = `[<img src="https://img.shields.io/badge/License-Apache_License_2.0-green">](https://www.apache.org/licenses/LICENSE-2.0)`
        
          } else if (license === "BSD 3-Clause 'Revised'"){
            licenseBadge = `[<img src="https://img.shields.io/badge/License-BSD_3Clause_'Revised'-yellow">](https://opensource.org/license/bsd-3-clause)`
        
          } else if (license === "BSD 2-Clause 'Simplified'"){
            licenseBadge = `[<img src="https://img.shields.io/badge/License-BSD_2Clause_'Simplified'-pink">](https://opensource.org/license/bsd-2-clause)`
        
          } else if (license === "ISC License"){
            licenseBadge = `[<img src="https://img.shields.io/badge/License-ISC_License-gray">](https://www.isc.org/licenses/)`
          } else {licenseBadge = ""};
          return licenseBadge;
      };

async function init(){
    const questions = userQuestions();
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = getLicenseBadge(answers.license);
    const outputMD = markdownOutput(answers);
    fs.writeFile('README.md', outputMD, (err) =>{
        if (err){
            console.error("The README could not be generated; please try again.")
        } else {
            console.log("README successfully generated from the information collected.")
        }
    })
};

init();
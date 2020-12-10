// use Installed Package
const inquirer = require('inquirer');
const fs = require('fs');

// Prompt lists that Inquirer will use to ask and get answers from the command Line.
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Tell me Details about your Project',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Tell me Installation Instruction( Seperate Each Line with ", " )',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Tell me Details about Contibution Guidelines ( Seperate Each Line with ", " )',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Tell me How to Test your Application',
        name: 'test',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please selecet Your application licence',
        choices: ['Distributed under the MIT License.', 'Distributed under the Apache License 2.0.', 'Distributed under the GNU General Public License v3.0.']
      },
    {
        type: 'input',
        message: 'Please Enter your Github UserName',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please Enter your contact E-mail',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please Enter your contact E-mail',
        name: 'email',
    },
  ])

  // get datas into cosnt by each promts
  .then((data) => {
    const dataTitle = data.title;

    // multi-line abled prompts, splited by ", " to make arrays to append on to document.
    const dataDescription = data.description.split(", ");
    const dataInstallation = data.installation.split(", ");
    const dataContribution = data.contribution.split(", ");
    const dataTest = data.test;
    const dataLicense = data.license;
    const dataGithub = data.github;
    const dataEmail = data.email;
    
    // Use wirteFileSync on first pront to clear out existing data on document.
    fs.writeFileSync('README.md', "# "+ dataTitle +" \n "
    );
    // use appendFileSync to append bellow previously written data on document.
    fs.appendFileSync("README.md","![" + dataTitle + "](./asset/image/snapshot.gif?raw=true)\n" 
    );
    fs.appendFileSync('README.md', "# Table of Contents\n");

    //Create Table Of Content that will take to corresponding secion by clicking on the headers.
    fs.appendFileSync("README.md", 
        "**[About This Project](#about-this-project)**<br>" +
        "**[installation](#installation)**<br>" +
        "**[Contribution](#contribution)**<br>" +
        "**[Test](#test)**<br>" +
        "**[License](#license)**<br>" +
        "**[Contact](#contact)**<br>\n" 
    );
    fs.appendFileSync('README.md', "# About This Project\n"+ dataDescription+"\n"
    );
    fs.appendFileSync('README.md', "# installation\n"
    );

    // loop through arrays on const to append each to document on sepeate line. 
    for ( let i =0; i<dataInstallation.length; i++) {
        fs.appendFileSync('README.md',dataInstallation[i]+"\n")
        }
    
    fs.appendFileSync('README.md', "# Contribution\n" 
    );

    for ( let i =0; i<dataContribution.length; i++) {
        fs.appendFileSync('README.md',dataContribution[i]+"<br>\n")
        }

    fs.appendFileSync('README.md', "# Test \n"+ dataTest+"\n"
    );
    

    // Applying License Badge, and corresponding URL based on selection user make.
    if ( dataLicense === "Distributed under the MIT License.") {
        fs.appendFileSync('README.md',"# License\n ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) " + dataLicense + "(https://opensource.org/licenses/MIT)\n" )
    }
    if ( dataLicense === "Distributed under the Apache License 2.0.") {
        fs.appendFileSync('README.md',"# License\n![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg) "+ dataLicense + "(https://opensource.org/licenses/Apache-2.0)\n")
    }
    if ( dataLicense === "Distributed under the GNU General Public License v3.0.") {
        fs.appendFileSync('README.md',"# License\n![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg) " + dataLicense + "(https://www.gnu.org/licenses/gpl-3.0)\n" )
    }
 

    fs.appendFileSync('README.md', "# Contact \n"+ "Please Contact [Jaden Lee] for additional Question <br>\n" + "Github UserName: " + dataGithub + " <br>\n" 
    );
    fs.appendFileSync('README.md',  "E-mail: " + dataEmail + " \n "
    );


  });

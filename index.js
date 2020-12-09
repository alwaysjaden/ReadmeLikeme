const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'Tell me Installation Instruction',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Tell me Details about Contibution Guidelines',
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
  ])

  .then((data) => {
    const dataTitle = data.title;
    const dataDescription = data.description.split(",");
    const dataInstallation = data.installation.split(",");
    const dataContribution = data.contribution.split(",");
    const dataTest = data.test;
    const dataLicense = data.license;
    const dataGithub = data.github;
    const dataEmail = data.email;
    

    fs.writeFileSync('README.md', "# "+ dataTitle +" \n "
    );

    fs.appendFileSync('README.md', "# Table of Contents\n");
    fs.appendFileSync("README.md", 

    "**[About This Project](#about-this-project)**<br>" +
    "**[installation](#installation)**<br>" +
    "**[Contribution](#contribution)**<br>" +
    "**[Test](#test)**<br>" +
    "**[License](#license)**<br>" +
    "**[Contact](#contact)**<br>" 
    );

    fs.appendFileSync("README.md","![" + dataTitle + "](./asset/image/snapshot.gif?raw=true)\n" 
    );
    fs.appendFileSync('README.md', "# About This Project\n"+ dataDescription+"\n"
    );
    fs.appendFileSync('README.md', "# installation\n"+ dataInstallation[0] + " \n"+ dataInstallation[1] + " \n"+ dataInstallation[2]+ " \n"+ dataInstallation[3]+ " \n" );
    fs.appendFileSync('README.md', "# Contribution\n"+ dataContribution[0] + " \n" + dataContribution[1] + " \n" + dataContribution[2] + " \n" + dataContribution[3] + " \n" 
    );
    fs.appendFileSync('README.md', "# Test \n"+ dataTest+"\n"
    );
    
        if ( dataLicense === "Distributed under the MIT License.") {
            fs.appendFileSync('README.md',"# License![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)\n " + dataLicense + "(https://opensource.org/licenses/MIT)\n" )
        }
        if ( dataLicense === "Distributed under the Apache License 2.0.") {
            fs.appendFileSync('README.md',"# License![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)\n "+ dataLicense + "(https://opensource.org/licenses/Apache-2.0)\n")
        }
        if ( dataLicense === "Distributed under the GNU General Public License v3.0.") {
            fs.appendFileSync('README.md',"# License![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)\n " + dataLicense + "(https://www.gnu.org/licenses/gpl-3.0)\n" )
    }
 

    fs.appendFileSync('README.md', "# Contact \n"+ "Jaden Lee <br>" + "Github UserName: " + dataGithub + " <br>" 
    );
    fs.appendFileSync('README.md',  "E-mail: " + dataEmail + " \n "
    );


  });

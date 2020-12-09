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
    const dataDescription = data.description;
    const dataInstallation = data.installation;
    const dataContribution = data.contribution;
    const dataTest = data.test;
    const dataLicense = data.license;
    const dataGithub = data.github;
    const dataEmail = data.email;
    

    fs.writeFileSync('README.md', "# "+ dataTitle +"\n"
    );
    fs.appendFileSync('README.md', "# About This Project\n"+ dataDescription+"\n"
    );
    fs.appendFileSync('README.md', "# installation\n"+ dataInstallation+"\n"
    );
    fs.appendFileSync('README.md', "# Contribution\n"+ dataContribution+"\n"
    );
    fs.appendFileSync('README.md', "# To Test \n"+ dataTest+"\n"
    );
    fs.appendFileSync('README.md', "# License \n"+ dataLicense+"\n"
    );

    if ( dataLicense === "Distributed under the MIT License.") {
        fs.appendFileSync('README.md',"![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n")
    }
    if ( dataLicense === "Distributed under the Apache License 2.0.") {
        fs.appendFileSync('README.md',"![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n")
    }
    if ( dataLicense === "Distributed under the GNU General Public License v3.0.") {
        fs.appendFileSync('README.md',"![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n")
    }

    fs.appendFileSync('README.md', "# Contact \n"+ "Jaden Lee \n" + "Github UserName: " + dataGithub + "\n" 
    );
    fs.appendFileSync('README.md',  "E-mail: " + dataEmail + "\n"
    );


  });


//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//   [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//   [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
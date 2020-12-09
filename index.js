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
    

   
    fs.writeFileSync('README.md', JSON.stringify(data, null, '\n'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
   
    fs.appendFileSync('README.md', "Title is \n"+ dataTitle
  );


  });
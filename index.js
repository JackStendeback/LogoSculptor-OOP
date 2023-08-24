const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'svgContent',
        message: 'Enter up to three characters'
    },
    {
        type: 'list',
        name: 'svgColor',
        message:  'Please enter a color'
    },
    {


        
    }
])




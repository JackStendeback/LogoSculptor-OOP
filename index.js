const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'svgContent',
        message: 'Enter up to three characters'
    },
    {
        type: 'input',
        name: 'svgColor',
        message:  'Please enter a color'
    },
    {
        type: 'list',
        name: 'svgShape',
        message: 'Please choose a shape',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'svgShapeColor',
        message: 'Please enter your preferred shape color'
    }
]).then(answers => {
    const svgContent = answers.svgContent;
    const generatedSVG = `<svg>${svgContent}</svg>`;

    fs.writeFile('output.svg', generatedSVG, 'utf8', (err) => {
        if (err) {
          console.error('Error writing SVG file:', err);
        } else {
          console.log('SVG file generated successfully.');
        }
      });
    });




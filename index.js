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
    const svgColor = answers.svgColor;
    const svgShape = answers.svgShape;
    const svgShapeColor = answers.svgShapeColor;

    let shapeSVG = '';
    let textX = 0;
    let textY = 0;


    if (svgShape === 'circle') {
        shapeSVG = `<circle cx="50" cy="50" r="40" fill="${svgShapeColor}" />`;
        textX = 50;
        textY = 55;
    } else if (svgShape === 'square') {
        shapeSVG = `<rect x="10" y="10" width="80" height="80" fill="${svgShapeColor}" />`;
        textX = 50;
        textY = 55;
    } else if (svgShape === 'triangle') {
        shapeSVG = `<polygon points="50,10 90,90 10,90" fill="${svgShapeColor}" />`;
        textX = 50;
        textY = 75;
    }

    const generatedSVG = `<svg width="100" height="100">
    ${shapeSVG}
    <text x="${textX}" y="${textY}" fill="${svgColor}" text-anchor="middle">${svgContent}</text>
    </svg>`;
    
    fs.writeFile('output.svg', generatedSVG, 'utf8', (err) => {
        if (err) {
          console.error('Error writing SVG file:', err);
        } else {
          console.log('SVG file generated successfully.');
        }
      });
    });




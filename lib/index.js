const inquirer = require('inquirer');
const fs = require('fs');

async function getUserInput() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'svgContent',
            message: 'Enter up to three characters',
            validate: function(input) {
                if (input.length > 3) {
                    return "Please enter up to three characters.";
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'svgColor',
            message:  'Please enter a color or hexadecimal value',
            validate: function(input) {
                if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input) || /^[a-zA-Z]+$/.test(input)) {
                    return true;
                }
                return "Please enter a valid color keyword or hexadecimal value.";
            }
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
            message: 'Please enter your preferred shape color',
            validate: function(input) {
                if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input) || /^[a-zA-Z]+$/.test(input)) {
                    return true;
                }
                return "Please enter a valid color keyword or hexadecimal value.";
            }
        }
    ]);
}

function generateShapeSVG(svgShape, svgShapeColor) {
    let shapeSVG = '';
    let textX = 0;
    let textY = 0;

    if (svgShape === 'circle') {
        shapeSVG = `<circle cx="150" cy="100" r="40" fill="${svgShapeColor}" />`;
        textX = 150;
        textY = 105;
    } else if (svgShape === 'square') {
        shapeSVG = `<rect x="110" y="60" width="80" height="80" fill="${svgShapeColor}" />`;
        textX = 150;
        textY = 105;
    } else if (svgShape === 'triangle') {
        shapeSVG = `<polygon points="150,20 230,180 70,180" fill="${svgShapeColor}" />`;
        textX = 150;
        textY = 130;
    }

    return { shapeSVG, textX, textY };
}

function generateSVG(answers) {
    const svgContent = answers.svgContent.substring(0, 3);
    const svgColor = answers.svgColor;
    const svgShape = answers.svgShape;
    const svgShapeColor = answers.svgShapeColor;

    const { shapeSVG, textX, textY } = generateShapeSVG(svgShape, svgShapeColor);

    const generatedSVG = `<svg width="300" height="200">
    ${shapeSVG}
    <text x="${textX}" y="${textY}" fill="${svgColor}" text-anchor="middle">${svgContent}</text>
    </svg>`;

    fs.writeFile('logo.svg', generatedSVG, 'utf8', (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('Generated logo.svg.');
        }
    });
}

module.exports = { getUserInput, generateSVG, generateShapeSVG};


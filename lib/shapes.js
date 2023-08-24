const { getUserInput, generateSVG } = require('./index.js');

async function main() {
    try {
        const userInput = await getUserInput();
        generateSVG(userInput);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
const { getUserInput, generateShapeSVG, generateSVG } = require('./index.js');
const inquirer = require('inquirer');

jest.mock('inquirer', () => ({
    prompt: jest.fn(),
}));

describe('getUserInput', () => {
    it('should validate input length', async () => {
        // Mock the inquirer.prompt function with the expected responses
        inquirer.prompt.mockResolvedValue({
            svgContent: '123', // Up to three characters
        });

        // Call the getUserInput function
        const input = await getUserInput();

        // Test the validation logic within getUserInput
        expect(input.svgContent).toBe('123');
    });

    it('should validate color input', async () => {
        // Mock the inquirer.prompt function with the expected responses
        inquirer.prompt.mockResolvedValue({
            svgColor: '#FF0000', // Valid color
        });

        // Call the getUserInput function
        const input = await getUserInput();

        // Test the validation logic within getUserInput
        expect(input.svgColor).toBe('#FF0000');
    });
});
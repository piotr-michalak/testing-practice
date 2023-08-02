function capitalize(text) {
    return text.charAt(0).toUpperCase();
}

function reverseString(text) {
    return [...text].reverse().join("");
}

const calculator = (a, b) => {
    const add = () => a + b;

    const subtract = () => a - b;

    const divide = () => a / b;

    const multiply = () => a * b;

    return { add, subtract, divide, multiply };
};

function caesarCipher(text, shift) {
    
}

export { capitalize, reverseString, calculator, caesarCipher };
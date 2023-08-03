function capitalize(text) {
    return text.charAt(0).toUpperCase();
}

function reverseString(text) {
    return [...text].reverse().join('');
}

const calculator = (a, b) => {
    const add = () => a + b;

    const subtract = () => a - b;

    const divide = () => a / b;

    const multiply = () => a * b;

    return { add, subtract, divide, multiply };
};

function caesarCipher(text, shift) {
    const encodedText = [...text].map((char) => {
        let charCode = char.charCodeAt() + shift;

        if (charCode > 'z'.charCodeAt()) {
            charCode = 'a'.charCodeAt() + (charCode - 'z'.charCodeAt() - 1);
        } else if (charCode > 'Z'.charCodeAt() && charCode < 'a'.charCodeAt())  {
            charCode = 'A'.charCodeAt() + (charCode - 'Z'.charCodeAt() - 1);
        }

        return String.fromCharCode(charCode);
    });

    return encodedText.join('');
}

export { capitalize, reverseString, calculator, caesarCipher };
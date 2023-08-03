import { capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./practice";

test('First character is capitalized', () => {
    expect(capitalize('John').charAt(0)).toMatch(/^[A-Z]$/);
});

test('String is reversed', () => {
    expect(reverseString('John')).toMatch(/nhoJ/);
});

test('Return correct calculation results', () => {
    const calc = calculator(2, 2);

    expect(calc.add()).toBe(4);

    expect(calc.subtract()).toBe(0);

    expect(calc.divide()).toBe(1);

    expect(calc.multiply()).toBe(4);
});

test('Return shifted text', () => {
    expect(caesarCipher('John', 3)).toBe('Mrkq');
    
    expect(caesarCipher('Zohn', 3)).toBe('Crkq');

    expect(caesarCipher('zohn', 3)).toBe('crkq');
});

test('Return correct property values', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });

    expect(analyzeArray([13, 5, 23, 77, 102, 2, 2])).toEqual({ average: 32, min: 2, max: 102, length: 7 });
});
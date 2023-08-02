import { capitalize, reverseString, calculator, caesarCipher} from "./practice";

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
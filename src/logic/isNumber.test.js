import isNumber from './isNumber'

describe('Input to number function should return true for all integers', () => {


    test('pass in a postive integer', () => {
        expect(isNumber(3)).toBe(true);
    });

    test('pass in a negative integer', () => {
        expect(isNumber(-33)).toBe(true);
    });

    test('pass in a positive decimal number', () => {
        expect(isNumber(3.33)).toBe(true);
    });

    test('multiplies 3 * 3 to equal 9', () => {
        expect(isNumber(-3.33)).toBe(true);
    });
});

describe('Input to number function should return false for all non-numeric characters', () => {
    test('pass in a character', () => {
        expect(isNumber('A')).toBe(false);
    });

    test('pass in a non Alphanumeric character', () => {
        expect(isNumber('.')).toBe(false);
    });

    test('pass in a string of numbers', () => {
        expect(isNumber('33')).toBe(true);
    });

    test('passing in an empty array', () => {
        expect(isNumber([])).toBe(false);
    });

    test('passing in an empty obj', () => {
        expect(isNumber({})).toBe(false);
    });
});

const returnNumbers = require('../functionFive');

describe('returnNumbers', () => {
    test('test', () => {
        expect(true).toBe(true);
    })
    test('returnNumbers', () => {
        expect(returnNumbers(15)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive ');
    })
    test('returnNumbers', () => {
        expect(returnNumbers(12)).toBe('1 2 three 4 five three 7 8 three five 11 three ');
    })
    test('returnNumbers', () => {
        expect(returnNumbers(2)).toBe('1 2 ');
    })
    test('returnNumbers', () => {
        expect(returnNumbers(20)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive 16 17 three 19 five ');
    })
    test('check not number', () => {
        expect(returnNumbers('st')).toBe("");
    })
    test('check null', () => {
        expect(returnNumbers(null)).toBe("");
    })
})
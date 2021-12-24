const chekNumber = require('../checkNumber')

describe('chekNumber', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test ('chekNumber', () => {
        expect(chekNumber(15, '20')).toEqual(5);})
    test ('chekNumber', () => {
        expect(chekNumber(7, '20')).toEqual(27);})
    test ('chekNumber', () => {
        expect(chekNumber('string', '20')).toEqual(false);})
    test ('chekNumber', () => {
        expect(chekNumber( 1 , 'string')).toEqual(false);})
})


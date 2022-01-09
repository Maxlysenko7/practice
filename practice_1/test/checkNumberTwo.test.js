const chekNumberTwo = require('../checkNumberTwo')

describe('chekNumber', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test ('chekNumberTwo', () => {
        expect(chekNumberTwo('string')).toEqual('Incorrect input data');})
    test ('chekNumberTwo', () => {
        expect(chekNumberTwo(0)).toEqual([false, true, true]);})
    test ('chekNumberTwo', () => {
        expect(chekNumberTwo(17)).toEqual([ true, false, false ]);})
    test ('chekNumberTwo', () => {
        expect(chekNumberTwo(20)).toEqual([ false, true, true ]);})
})
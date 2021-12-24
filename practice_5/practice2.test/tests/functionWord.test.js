const isAnagram = require('../functionWord');
describe('isAnagram', () => {
    test('test is anagram', () => {
        expect(isAnagram('Пи ла','Ли па')).toStrictEqual('Строки являются анаграммами');
        expect(isAnagram('Пи ла','Кипа')).toStrictEqual('Строки не являются анаграммами');
    })
})
const palindrome = require('../palindrome')

describe('palindrome', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test ('palindrome', () => {
        expect(palindrome('vav')).toEqual(true);
        expect(palindrome('asd')).toEqual(false);
        expect(palindrome('')).toEqual('in valid');
    })
})
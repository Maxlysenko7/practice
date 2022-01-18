function every(arr, callback) {

    let result = true;

    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

let result = every([8,4,3], function(num) {
    return num % 2 === 0;
});

console.log(result)

module.exports = { every }
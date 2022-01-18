Number.prototype.isOdd = function () {
    if (this % 2 === 0) return false;
    if (this % 2 !== 0) return true;
}

console.log(Number(2).isOdd());

module.exports = { Number }

let a = Number.prototype
console.log(a)
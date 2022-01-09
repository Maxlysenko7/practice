function chekNumber(a, b){
   let sum = '';

   if (typeof a !== 'number' || a === null ) {
    return false;
} 

if(Number.isNaN(Number(b))){
    return false;
}
 
if (a % 3 === 0 || a % 5 === 0 || a % 15 === 0) {
       a *= -1
   }

   return sum = +a + +b
}

console.log(chekNumber(15, '20'))

module.exports = chekNumber
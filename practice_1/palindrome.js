// function palindrome(str) {

//        let len = str.toLowerCase.length;
//           let mid = Math.floor(len/2);
    
//           for ( let i = 0; i < mid; i++ ) {
//               if (str[i] !== str[len - 1 - i]) {
//                   return false;
//               }
//           }
//           return true;
//      }
//      console.log(palindrome('коток'));

     
//      module.exports = palindrome;

 function palindrome(str) {
     let string = str;
if(typeof str !== 'string' || str === null || str === ''){
    return 'in valid'
} 
return str === string.split('').reverse().join('');
 }

 console.log(palindrome('vav'))
 console.log(palindrome('aasssdddffgg'))

 module.exports = palindrome;
// Задание 1

//  function palindrome(str) {

//       let len = str.toLowerCase.length;
//       let mid = Math.floor(len/2);

//       for ( let i = 0; i < mid; i++ ) {
//           if (str[i] !== str[len - 1 - i]) {
//               return false;
//           }
//       }
//       return true;
//  }
//  console.log(palindrome('коток'))








// Задание 2


// function isSymbol(char) {
//   return ',.!:-_? '.includes(char)

// }

// function checkSymbols(str) {
//   return [',', '.', '!', ':', '-', '_', '?', ' '].some((symbol) => str.includes(symbol));

// }

// function isValidString(str) {
//   if (str || typeof str === 'string') {
//       if (str.length >= 2 && str.length <= 20 && checkSymbols(str) && (!isSymbol(str[0]) || str[0] === str[0].toUpperCase())) {
//           return 'VALID';
//       } else {
//           return 'INVALID';
//       }
//   }

//   return 'incorrect input data';
// }









// Задание 3

//  function name(a, b){
     //   let a = 15;
     //   let b = '25';
//      let sum = '';

//      if (a % 3 === 0 && a % 5 === 0 && a % 15 === 0) {
//          a *= -1
         //  console.log(a)
//      }
//      return sum = +a + +b
//  }

//  console.log(name(15, '20'))









//  Задание 4


      

function checkNumber(value) {

  if (Number.isNaN(Number(value))) {
      return 'Incorrect input data';
  }
  let checkNumberStatus = [true, false, false];

  if (value > 1) {
      for (let i = 2; i < value; i++)
          if (value % i === 0) {
              checkNumberStatus[0] = false;
          }
  } else {
      checkNumberStatus[0] = false;
  }

  checkNumberStatus[1] = value % 2 === 0;
  checkNumberStatus[2] = value % 10 === 0;

  return checkNumberStatus;
}


    //   return result = array.concat(arrayTwo, arrayThree);
    //   }

    //   console.log(name())



    // Является ли число простым???


    //  function name(a){

    //      for (let i = 2; i < a; i++) {
    //      if (a % i === 0) {
    //      return false;
    //      } else{ return true;
    //     } 
    //  }
    //  }
    
    //  console.log(name(25))

    function reverse(nums) {
        let reverse = "";
        for (let i = String(nums).length - 1; i >= 0; i--) {
          reverse += String(nums)[i];
        }
        return reverse;
      }
      
      function Palindrome(num) {
        if (String(num).length < 2) {
          return num + 1
        }
      
        for (let i = num + 1; ; i++) {
          if (String(i) === reverse(i)) {
            return i
          }
        }
      }
      
      console.log(Palindrome(23))
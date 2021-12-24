// 1 work
// function five(n){
// for (let i = 1; i < n; i++){
//     if( i % 3 === 0 && i % 5 === 0){
//         console.log('ThreeFive')
//     } else if ( i % 3 === 0){
//         console.log('Three')
//    } else if ( i % 5 === 0){
//        console.log('Five')
//    } else console.log(i)
// }
// }
// five(20)


//2 work
// function stop(){
//     for(let i = 0; i <= 15; i++){
//         for(let p = 0; p < 20; p++){
//             if ( i === 15 && p === 15){
//                 p = p - 1; break;
//             }
//             console.log(i, p)
//         }
//     }
// }
// stop();

//3 work
// function word(str){
//     const charObj = {};
//     str = str.toLowerCase().replace(/[^\w]/g);
//     for (let char of str){
//         charObj[char] = charObj[char] + 1 || 1;
//     }

//     return charObj;

// }

// function name(strA, strB){
//     const aCharObj = word(strA);
//     const bCharObj = word(strB);

//     if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
//         return false;
//     }

//     for (let char in aCharObj){
//         if (aCharObj[char] !== bCharObj[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(name('Ров', "вор"))
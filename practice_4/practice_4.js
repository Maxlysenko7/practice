//Задание 1

// let arr = [1, 2, 3, 4, 7, 7]

// function summ(num){   
// for (i = 0; i < arr.length; ++i){
//     for (let n = 0; n < arr.length; n++){ 
//     if(i !== n && arr[i] + arr[n] === num ){
//         return true;
//     }
// }
// }
// return false
// }
// console.log(summ(3));


//Задание 2

// function transformArray(arr) {
//     let result = []

//     for (let i = 0; i < arr.length; i++){
//         if (Array.isArray(arr[i])){
//             result = result.concat(transformArray(arr[i]));
//         } else result.push(arr[i])
//     }
//     return result
// }

// console.log(transformArray([1, 2, [3, 4, [5]]]))


//Задание 3

// function arrSlice(){ 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrSize = 2;
// let arrSlice = [];

// for (let i = 0; i <arr.length; i += arrSize) {
//     arrSlice.push(arr.slice(i, i + arrSize));
// }
// console.log(arrSlice)
// }

// arrSlice()


//Задание 4

// function nameOne(){
//     let a = {x: 1, y: 1}
//     let b = {x: 1, y: 1}
//     for(let key in a) {
//         if(!(key in b) || a[key] !== b[key]) {
//             return false;
//         }
//     }
//     for(let key in b) {
//         if(!(key in a) || a[key] !== b[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(nameOne())

// let arr = [1, 2, 3, 4, 5, 6, 7,7,7]

// const newArray = [...new Set(arr)]

// console.log(newArray)

// let arr = [1, 2, 3, 3, 3, 5, 6, 7, 8, 8]

// const newArray = arr.filter((item, index) => {
//     return index === arr.indexOf(item);
// })

// console.log(newArray)



// work 1

// function tickets(){
//     let price = (['25', '25', '50', '100']); 
//     let  ticket = 0;
//   for (i = 0; i < price.length; i++){
//    price[i] === 25 ? ticket += 25 : ticket -= price[i] - 25 ;
//         console.log(ticket)
// }
//     if (ticket < 0){
//     return "NO";
//   } else {
//     return "YES";
//   }
// }

// console.log(tickets())



// work 2
// let a = ('11111111111111111111111111111111111111111111111')
// let b = ('22222222222222222222222222222222222222222222222')

// function calcSumm(){
//     let split = a.split('')
//     let splitTwo = b.split('')
    
//     let summ = +a.split('') + +b.split('')
//     console.log(summ)

// }

// calcSumm()

let listOfPosts2 = [
  {
      id: 1,
      post: 'some post1',
      title: 'title 1',
      author: 'Ivanov',
      comments: [
          {
              id: 1.1,
              comment: 'some comment1',
              title: 'title 1',
              author: 'Rimus'
          }, {
              id: 1.2,
              comment: 'some comment2',
              title: 'title 2',
              author: 'Uncle'
          }]
  }, {
      id: 2,
      post: 'some post2',
      title: 'title 2',
      author: 'Ivanov',
      comments: [
          {
              id: 1.1,
              comment: 'some comment1',
              title: 'title 1',
              author: 'Rimus'
          },
          {
              id: 1.2,
              comment: 'some comment2',
              title: 'title 2',
              author: 'Uncle'
          },
          {
              id: 1.3,
              comment: 'some comment3',
              title: 'title 3',
              author: 'Rimus'
          },
          {
              id: 1.4,
              comment: 'some comment3',
              title: 'title 3',
              author: 'Rimus'
          }

      ]
  }, {
      id: 3,
      post: 'some post3',
      title: 'title 3',
      author: 'Rimus'
  }, {
      id: 4,
      post: 'some post4',
      title: 'title 4',
      author: 'Uncle'
  }
]

function findMessage(arr, name){
  let post = 0;
  let comment = 0;
  let result = [];
  for (let key in listOfPosts2){
    if (listOfPosts2[key].author === name){
      post = post + 1
    }
  }

  // for (let key in listOfPosts2){
  //   if(listOfPosts2.includes(name)){
  //     comment = comment + 1
  //   }
  //   console.log(listOfPosts2[key].comments)
  //   }
  //   return {post, comment}
  }

  console.log(findMessage(listOfPosts2, 'Rimus'))


// Object.keys(listOfPosts2).reduce(function(acc, key){
//   var value = listOfPosts2[key];
//   if(typeof value === 'object') { 
//       acc.push.apply(acc, print(value, prefix + '.' + key));
//   }
//   else { 
//       acc.push(prefix + '.' + key + ' = ' + value);
//   }
//   return acc;







// function cached(fn) {
//   // создаем объект для хранения результатов, возвращаемых функцией при каждом выполнении
//   const cache = Object.create(null)

//   // возвращаем обернутую функцию
//   return function cachedFn(value) {
//       // если кэш не содержит результата, функция выполняется
//       if (value !== undefined) {
//           let result = fn(value)

//           // сохраняем результат выполнения функции в кэше
//           cache[value] = result
//       }
//       return cache[value]
//   }
// }

// console.log(cached('Hello'))

// const memoizer = (func) => {
//   let cache = {}
//   return (n) => {
//       if (cache[n] != undefined) {
//           console.log(`<= Fetching: "${n}" from cache`)
//           return cache[n]
//       } else {
//           console.log(`=> Write: "${n}" in cache`)
//           let result = func(n)
//           cache[n] = result
//           return result
//       }
//   }
// }

//  function myFunc(){
//     let x = 15;
//     let t = '25';
//      let sum = '';

//      if (x % 3 === 0 && x % 5 === 0 && x % 15 === 0) {
//          t *= -1
//        console.log(x)
//      }
//      return sum = +x + +t
//  }

//  console.log(myFunc(15, '20'))

// console.log('myFunc:', myFunc(10))
// console.log('myFunc:', myFunc(10))
// console.log('myFunc:', myFunc(10))

// console.log('\n')

// const myFuncMem = memoizer(myFunc)

// console.log('myFuncMem:', myFuncMem(10))
// console.log('myFuncMem:', myFuncMem(10))
// console.log('myFuncMem:', myFuncMem(10))
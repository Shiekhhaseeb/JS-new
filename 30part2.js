// const myNums =[1,2,3,4,5,6,7,8,9,10]

// //just like filter we can do other things 
// // add 10 in each
// const newNums= myNums.map((num) => num+10)

// console.log(newNums);
/**[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
] */
///////////////////////////////
  /***But if we open the scope, we have to write  return, nahi toh undefined aayenga sare values */
//   const myNums =[1,2,3,4,5,6,7,8,9,10]

//   const newNums= myNums.map((num) => {return num+10})
  
//   console.log(newNums);

  /****do same uing forEach*********** */
//   const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = [];
// myNums.forEach((num) => {
//   if (num <11) {
//     newNums.push(num + 10);
//   }
// });
// console.log(newNums);
  /*********************************************/
  //chaining:--> 2,3 method saath use karna
  //like .map().map(),.filter() .forEach() etc
//   const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)

  
//   console.log(newNums);
  //output:-->
/**[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
] */

  /******************** */

  // we can do jitni marzi utni chaining
  const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums= myNums
                .map((num) => num * 10)// .map()return all
                .map((num) => num + 1)
                .filter((num) => num >=40)// 40 se upar wali value,filter is t/f
  
  console.log(newNums);
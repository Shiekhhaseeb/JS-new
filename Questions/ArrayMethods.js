// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3=[7,8,9];

// // const combinedArray=[].concat(arr1,arr2,arr3)//concatination returns the [empty] array or
// const combinedArray=arr1.concat(arr2,arr3)
// console.log(combinedArray);

/************************ */
// const array=[[1,2,3],[4,5,6],[7,8,9]]

// const ans= array.(1,)
// console.log(ans);
/**********2D array into 1D array:-->*************** */
// const arrOfArrs = [[1,2,3],[4,5,6],[7,8,9]];
// const combinedArray = arrOfArrs.reduce((acc, curr) => acc.concat(curr), []);
// // const combinedArray = arrOfArrs.flat(); //it flats
// console.log(combinedArray); // Output: [1,2,3,4,5,6,7,8,9]

/************************************** */
// const array1=[1,2,3];
// const array2=[4,5,6]
// const array3=[7,8,9]
// const combinedArray=[...array1,...array2,...array3]
// console.log(combinedArray);

/************************************ */
// const twoDArray=[[1,2,3],[4,5,6],[7,8,9]];
// const combinedArray=twoDArray.flat();
// const combinedArray=twoDArray.reduce((acc,curr)=> acc.concat(curr));
// console.log(curr);
// const combinedArray=[].concat(...twoDArray)//using spread operator
// console.log(combinedArray);

/******Implement array methods on :-->************************************/
//[1,2,3,4,5,6,7,8]

//1.forEach() :-->
// const numbers=[1,2,3,4,5,6,7,8]
// numbers.forEach(function(number,index){
//     console.log(number*2);

// })
//2.map():--> its return type and makes new array,used in react
// const numbers=[9,10,11,12,13,14,15,16]
/***** */
// const square=function(number){
//     return (number*number)
// }
// const squaredNumber=numbers.map(square)
// console.log(squaredNumber);
/***** */
// numbers.map(function(number,index){
//     console.log(`The square of the array's number ${number} is :->`,number*number);

// })

/**************** */
//3.filter();:-->
//This method also return return ,and result is stored in new array
// const numbers=[9,10,11,12,13,14,15,16];

// const isEven =function (number) {
//     return number %2===0
// }

// const evenNumber=numbers.filter(isEven)
// console.log(`The even numbers in the array [${numbers}] is:-->`,evenNumber);
/************************************* */
//4.reduce():-->
// const numbers=[1,2,3,4,5,6,7,8,9];
// //sum of all elements in the array

// const sum=numbers.reduce((accumulator,currentValue) =>{
// return accumulator +currentValue
// },100)
// console.log(sum);
// acc      //currval    return
/******************************* */
//5.sort()
// const numbers=[10,20,3,4,50,6,7,8,9];
// numbers.sort((a,b)=>
// {
//     return a-b;

// });
// console.log(numbers);

// numbers.sort((a,b)=>
//     {
//         return b-a;//descending order

//     });
//     console.log(numbers);

/**************** */
//6.find():-->
// const myArray=["Hello","cat","dog","rat"]
// function isLength(String) {
//     return String.length===3
// }
// const ans=myArray.find(isLength)
// console.log(ans);
/****************************** */
//7.every():--->(like AND)gives false even if 1 value does'nt satisfy the condition/return boolean value
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// function isEven(number) {
//   return number % 2 === 0;
// }
// const ans = numbers.every(isEven);
// console.log(ans);//false
/******************************* */
//8.some():--> like OR
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// function isEven(number) {
//   return number % 2 === 0;
// }
// const ans = numbers.some(isEven);
// console.log(ans);//true


/***************** */
//9.fill():-->
// insert value ,start ,end(excluding that value)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.fill(0,2,5);//excluding 5
// console.log(numbers);
/*************** */

//10.splice():-->
//splice(start, deleteCount, item1)
//index start ,deleteCount karo ,insert karo

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result=numbers.splice(1,2,5);
// console.log(result);//2,3 delete huas
// console.log('The final array is :-->',numbers);

/******************************* */
//11.slice():--> o
// const arr = [1, 2, 3, 4, 5];
// const result = arr.slice(1, 4);

// console.log(result); // [2, 3, 4]
// console.log('The final array is :-->',arr);    //original array

/************************** */
// const numbers=[2,3,6,1,7,13,19]
// //sum of all elements in the array

// const sum=numbers.reduce((accumulator,currentValue) =>{
// return accumulator +currentValue
// },100)
// console.log(sum);

/********Reverse***************************/
// const numbers=[2,3,6,1,7,13,19]
// //reverse of array
// const rev =numbers.reverse()
// console.log(numbers);

/********Prime number************************************* */
// function isPrime(n) {
//     let n=[1,2,3,4,5,6,7,8,9,10]
//     // let =2;
//     for (let i = 0; i < array.length; i++) {
        
//         if (n=0) {
//             console.log("0 is not Prime");
//             return false;
            
//         }
        
//         else if (n<2) {
//             console.log("The  number is not Prime");
//             return false;

//         } 
//         else if (n=2) {
//             console.log("The  number is Prime");
//             return false;

//         }
//         else {
//             if (n%2==0 ) {
                
//             }
//         }
//     }


// }
// console.log(isPrime);


/****************************** */

// function isPrime(n){
//     if (n<2) {
//         return `${n} is not prime`;
//         for (let i = 0; i < n; i++) {
// return  `${n} is not prime number`;
         
//         }
        
//     }
//     return  `${n} is a prime number`;

// }
// console.log(isPrime(10));
//**********************Numbers in the array****************/
// const numbers=[2,3,6,1,7,13,19]
// const total=numbers.shift()//removes first element of array while pop removes last element
// console.log('Shifted array is :-->',total);
/***********************************************************/

// const numbers=[2,3,6,1,7,13,19]
// const total=numbers.shift(102)//
// console.log('unShifted array is :-->',numbers);
/************************************************* */
/*The filter() method in JavaScript is used to create a new array that contains only the elements from the original array that pass a test (i.e., return true) from a given function. */
// const myArray=[1,2,3,4,5,6,7,8];
////Prime basics:--->
// let number = 10
// for(let i = 2; i < 10; i++){
//     if(number% i === 0){
//         break;
//     }
// }

/***** */

function isPrime(num) {
    if (num<2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
if (num % i===0) {
    return false;
}        
    }
    return true;
}

let arr=[1,2,3,4,5,6,7,8];
let ans=arr.filter(isPrime);//It will only return true values
console.log(ans);


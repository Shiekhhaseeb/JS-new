//filter function /method also returns return as call back value
//Filter is also stored in new Array
//Its call back fxn return Boolean (true/false)
// const numbers =[1,3,2,6,4,8]
// const isEven=function(a){ //    let num = numbers[i];
// return a%2===0;//gives us even number
// }
// const evenNumbers =numbers.filter(isEven);
// console.log(evenNumbers);

/***************************************** */
// const a =[1,3,2,6,4,8]
// const isOdd =function(b){
//     return b%2!==0;
// }
// const oddNumbers=a.filter(isOdd);
// console.log(oddNumbers);
/******************************************** */

//using arrow functions
// const numbers =[1,3,2,6,4,8];

// const evenNumbers =numbers.filter((number)=>//arrow functions takes i/p as number
// {
//     return number %2===0;//true/false
// });
// console.log(evenNumbers);

/*********************************************/
//array methods
// chalte kispe hai, array pe

//inbuilt, first parameter, element of array, second index


function isOdd(x)
{
    return x%2==1 ;
}
let arr = [1,2,3,4,5,6,7,8,9,10];
let ans = [];
// for(let i = 0 ; i<arr.length ; i++)
// {
//   if(isOdd(arr[i]))
//   {
//     ans.push(arr[i]) ;
//   }
// }
// console.log(ans)
ans =arr.filter(isOdd) ;

console.log(ans);



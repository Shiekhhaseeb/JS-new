//This method makes an new array
//call back function calls back-function returns return value
//Takes call back function as input
//USED in more frequently react

// const numbers=[3,4,6,1,8];
// const square =function(number){//anomlous function
//     return(number*number);
// }
// const squaredNumber =numbers.map(square);//make an new array
// console.log(squaredNumber);

/******************** */
// const numbers =[3,5,6,7,8];
// const square=function(number){
//     return(number*number);
// }
// const squaredNumber=numbers.map(square);
// console.log(squaredNumber);

/**************************/
//using arrow functions
// const numbers =[3,4,6,1,8];

// const squaredNumber =numbers.map((number)=>{// numbers is passed as parameter becoz we return n*n
//     return number*number;
// }
// );
// console.log(squaredNumber);
/******************* */
const numbers =[3,4,6,1,8];

const squaredNumber =numbers.map((number)=>{// numbers is passed as parameter becoz we return n*n
    return ` index:${index} ${number*number}`;
}
);
console.log(squaredNumber);
//.map() gives us array and in return we will store that array in const(variable)

//reduce takes callback function
//which can be :-
//Ananmolous function
//Arrow function

// const numbers =[1,2,3,4,5,10]

// //aim:- sum of all numbers in 

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(sum);


//accumulator         current value                 return
//1                     2                            3
//3                     3                            6
//6                     4                            10
//10                    5                             15
//15                    10                            25
/******************************************** */
//  const numbers =[1,2,3,4,5,10]

// // //aim:- sum of all numbers in 

// const sum = numbers.reduce((accumulator, currentValue) => {
//    return accumulator + currentValue;
//  },100);//100 is the base value of the accumulator
//  console.log(sum);
/*********************************** */
// const numbers =[1,2,3];

// const sum =numbers.reduce((acc,curr),100);//100 acts as base value of the accumulator
//     console.log(sum);
    
/********************************/
const userCart =[
    {ProductId :1,ProductName :"mobile",Price:1200},
    {ProductId :2,ProductName :"laptop",Price:22000},
    {ProductId :3,ProductName :"tv",Price:15000}

]

const totalAmount =userCart.reduce((totalPrice,currentProduct)=>{//accumulator,currentValue
    return totalPrice + currentProduct.Price
},0)
console.log(totalAmount);
/**************************************** */
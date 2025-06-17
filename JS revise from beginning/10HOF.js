//Higher order Functions
// let arr=[1,2,3,4,5]
// let squaredArr =[]

// for (let i = 0; i < arr.length; i++) {
// squaredArr.push(arr[i]*arr[i]);   
// }
// console.log(squaredArr);
/*********************************************/
//1.map():-->
// const num=[1,2,3,4,5]
// const squaredNum= num.map(function(n)
// {
//     return n *n;
// })
// console.log(squaredNum);
//map() is as same as forEach() but forEach() does not return anyvalue
//map() return a newaRRAY , forEach() return 

//2.toFixed() : shows us exact values
const transactions =[1000,30000,4000,2000,-898,3800,-4500]
const intoDollars =80;

let transactionsInDollars = transactions.map((amount)=>{
    return (amount /intoDollars).toFixed(0)
})

console.log(transactionsInDollars);
/******************************************/

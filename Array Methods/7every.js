//every :- will check every element and give true or false 
//gives Boolean value(true/false)

// const numbers=[2,4,6,8,10]

// const myNumber=numbers.every((number)=>number%2===0);
// console.log(myNumber);//true/false

/*****************************************************/
// const numbers=[2,4,6,8,10];

// function isEven(number){
//     return number%2===0;
// }
// const ans=numbers.every(isEven);
// console.log(ans);
/***************************************************** */
/************************************************** */
const userCart =[
    {ProductId :1,ProductName :"mobile",Price:1200},
    {ProductId :2,ProductName :"laptop",Price:22000},
    {ProductId :3,ProductName :"tv",Price:15000}

]
const ans=userCart.every((cartItem)=>cartItem.Price<30000);
console.log(ans);

/*cartItem is the parameter of your arrow function.

.every() automatically passes each item of the array (userCart) into this function one by one.

So cartItem is just a name you choose — it could be called anything: */
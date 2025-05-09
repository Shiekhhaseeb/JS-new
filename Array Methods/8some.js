//some():- Agar 1 bhi condition satisfy hogi to TRUE aayega,just like OR
//otherwise false
// const numbers=[3,5,11,9]
// const ans =numbers.some((number)=>number%2===0)
//     console.log(ans);

/********************************************************* */
const userCart =[
    {ProductId :1,ProductName :"mobile",Price:1200},
    {ProductId :2,ProductName :"laptop",Price:22000},
    {ProductId :3,ProductName :"tv",Price:150000}

]
const ans=userCart.some((cartItem)=>cartItem.Price>100000)//true,kuonki 1 item 1 lack se upar hais
console.log(ans);

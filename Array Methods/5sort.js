// const numbers=[5,9,1200,410,3000]
// numbers.sort();
// console.log(numbers);
/*********************************************** */
//used in string
// const userNames =['harshit','abcd','mohit','nitish','ABC','Harshit']
// userNames.sort()
// console.log(userNames);
/*********************************************** */
// const numbers=[5,9,1200,410,3000]

// numbers.sort((a,b)=>{
//     return a-b;//like 123, chaotta pehle,Ascending order
// });
// console.log(numbers);

/*************************************** */
// can also be used in strings
// const names=[1,45,66,9,0,1,]; 
// names.sort((a,b)=>{//bada pehle,descending order
//     return b-a;
// })
// console.log(names);

/******************************* */
const userCart =[
    {ProductId :1,ProductName :"mobile",Price:1200},
    {ProductId :2,ProductName :"laptop",Price:22000},
    {ProductId :3,ProductName :"tv",Price:15000}

]

const lowToHigh =products.slice(0).sort((a,b)=>{
    return a.price -b.Price
});

const HighTolow =products.slice(0).sort((a,b)=>{
    return b.Price -a.price ;
});

console.log(lowToHigh);
console.log(HighTolow);


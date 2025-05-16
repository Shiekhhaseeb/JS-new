//html file:--> (3Promisis.html)

//Promise resolve 
// const myPromise=Promise.resolve(5)
// myPromise.then(value=>{//receive value
// console.log(value);

// })
/***************** */
//or
// const myPromise=Promise.resolve(5)
// Promise.resolve(5).then(value=>{
//     console.log(value);
// })
/********************** */
//IMPT:---->
//NOTE:--.then() method always return promise 
/***************************** */
// function myPromise(){
//     return new Promise ((resolve,reject)=>{
//         resolve("foo")
//     })
// }
// myPromise()
// .then(value =>{
//     console.log(value);
//     value +="bar"
//     return value;//internally:--> return Promise.resolve(value),yaha pe promise() return horaha hai
//     //or  :-> return Promise.resolve(value)

//     //Note : if we don't return ,return then it will return undefined
//     //b.t.s:--Promise.resolve(undefined)
// })

// .then(value =>{
//     console.log(value);
   
// })
//String pe Promise nahi laga sakhte.
// "harshit".then((value)=>{
//     console.log(value);//Uncaught TypeError: "harshit".then is not a function
    
// })
/***************************** */
function myPromise(){
    return new Promise ((resolve,reject)=>{
        resolve("foo")
    })
}
myPromise()
.then(value =>{
    console.log(value);
    value +="baar"
    return value;
})
.then(value =>{
    console.log(value);
    value +="baaz"
    return value;
})
.then(value =>{
    console.log(value);
   
})

//o/p:-->
/*foo
foobaar
foobaarbaaz
 */
/***************************** */
//Promise chaining

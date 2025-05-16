// //promise
// //old name : future value(its a future value)


// /*before;-
// i promised u fried rice 
// but promise is pending

// status : pending
// value :________null

// */
// //after
// //when i complete my promise 
// //status : fulfilled
// // value :_____

// //if things are not available
// // //status : reject
// // value :salt is not available
// const bucket = ['coffee','chips','vegetables','salt','rice']

// //promise kiya, thus create it 
// const friedRicePromise=new Promise((resolve,reject)=>{
//     if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//          resolve({value:"Fried Rice"})// we can pass any value here fxn,{}[]etc
//     }
//     else{
//         reject("could'nt do it")// we can pass any value here fxn,{}[]etc
//     }
// })
// //promise produced above:-->


// //promise consume below:-->
// //how to consume
// //we consume more
// //then : as a i/p takes call back fxn,isme resolve() hone ke bad wali value aayegi

// friedRicePromise.then(
//     //jab promise resolve hoga
// (myfriedRice)=>{
//     console.log("Let's eat", myfriedRice);//Let's eat Fried Rice   
// },
// //jab promise reject hoga
// (error)=>{//then can take 2 callback fxns

//     console.log(error);
    
// })

/************************** */
//promise
//old name : future value(its a future value)


/*before;-
i promised u fried rice 
but promise is pending

status : pending
value :________null

*/
//after
//when i complete my promise 
//status : fulfilled
// value :_____

//if things are not available
// //status : reject
// value :salt is not available
/*********************************** */

// console.log("script starts");
// const bucket = ['coffee','chips','vegetables','salt','rice']

// //promise kiya, thus create it 
// const friedRicePromise=new Promise((resolve,reject)=>{
//     if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//          resolve({value:"Fried Rice"})// we can pass any value here fxn,{}[]etc
//     }
//     else{
//         reject("could'nt do it")// we can pass any value here fxn,{}[]etc
//     }
// })


// friedRicePromise.then(
//     //jab promise resolve hoga
// (myfriedRice)=>{
//     console.log("Let's eat", myfriedRice);//Let's eat Fried Rice   
// },
// //jab promise reject hoga
// ).catch(
// (error)=>{//then can take 2 callback fxns

//     console.log(error);
    
// })

// for (let i = 0; i < 100; i++) {
//     console.log(Math.random(),i);
    
// }
// console.log("script ends!!!");
/******************************** */
console.log("script starts");
const bucket = ['coffee','chips','vegetables','salt','rice']

//promise kiya, thus create it 
const friedRicePromise=new Promise((resolve,reject)=>{
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
         resolve({value:"Fried Rice"})// we can pass any value here fxn,{}[]etc
    }
    else{
        reject("could'nt do it")// we can pass any value here fxn,{}[]etc
    }
})

//.then .catxh and settimeout(ye kem browser karega)
friedRicePromise.then(
    //jab promise resolve hoga
(myfriedRice)=>{
    console.log("Let's eat", myfriedRice);//Let's eat Fried Rice   
},
//jab promise reject hoga
).catch(
(error)=>{//then can take 2 callback fxns

    console.log(error);//present in Microtask queue(promise)
    
})

setTimeout(()=>{
    console.log("Hello from settimeout");
    
},0)

for (let i = 0; i < 100; i++) {
    console.log(Math.random(),i);
    
}
console.log("script ends!!!");
//Microtask queue sabse pehle execute hota hota hai,even before call back function.

//internet exp used to give call back > Microtask queue,more priority then later ticket was raised by ppl
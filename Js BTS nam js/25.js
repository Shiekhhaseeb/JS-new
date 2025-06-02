//Promise API's


// const p1 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p1 Success"),3000);
// });

// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p2 Success"),1000);
// });

// const p3 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p3 Success"),2000);
// });

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// });
//Output :-->
/*(3) ['p1 Success', 'p2 Success', 'p3 Success']
0: "p1 Success"
1
: "p2 Success"
2: "p3 Success"
length
: 
3
[[Prototype]]
: 
Array(0) */

/************** */
// const p1 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p1 Success"),3000);
// });

// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p2 Success"),1000);
//         // setTimeout(()=>reject("p2 fail"),1000);

// });

// const p3 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p3 Success"),2000);
//         setTimeout(()=>reject("p3 fail"),2000);

// });

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);// it will catch error properly like : p2 fail, it will /*avoid uncaught error*/
// });

/********************* */

//2. Promise.allSettled :-->
// const p1 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p1 Success"),3000);
// });

// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p2 Success"),1000);
//         // setTimeout(()=>reject("p2 fail"),1000);

// });

// const p3 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p3 Success"),2000);
//         setTimeout(()=>reject("p3 fail"),2000);

// });

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);// it will catch error properly like : p2 fail, it will /*avoid uncaught error*/
// });
//output:-->
/*
(3) [{…}, {…}, {…}]
0: {status: 'fulfilled', value: 'p1 Success'}
1: {status: 'fulfilled', value: 'p2 Success'}
2
: {status: 'rejected', reason: 'p3 fail'}
length
: 
3[[Prototype]]
: 
Array(0) 
gives us object*/ 

/******************* */
// const p1 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p1 Success"),3000);
// });

// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p2 Success"),1000);
//         // setTimeout(()=>reject("p2 fail"),1000);

// });

// const p3 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p3 Success"),2000);
//         setTimeout(()=>reject("p3 fail"),2000);

// });

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);// it will catch error properly like : p2 fail, it will /*avoid uncaught error*/
// });
// o/p:--> p2 successs

/**************************** */
//3. promise.race()
// const p1 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p1 Success"),3000);
// });

// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p2 Success"),5000);
//         // setTimeout(()=>reject("p2 fail"),1000);

// });

// const p3 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p3 Success"),2000);
//         setTimeout(()=>reject("p3 fail"),2000);

// });

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);// it will catch error properly like : p2 fail, it will /*avoid uncaught error*/
// }); 
//afer 2s:--> p3 fails
/************************** */
//4.promise.any():-->
// const p1 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p1 Success"),3000);
// });

// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p2 Success"),5000);
//         // setTimeout(()=>reject("p2 fail"),1000);

// });

// const p3 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p3 Success"),2000);
//         setTimeout(()=>reject("p3 fail"),2000);

// });

// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// }); 
//o/p :--> p1 Success ,it avoids failed condition,it will give output after 3s 

/***************** */
//Q:-->
// const p1 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p1 Success"),3000);
//             setTimeout(()=>reject("p1 fail"),3000);

// });

// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p2 Success"),5000);
//         // setTimeout(()=>reject("p2 fail"),1000);

// });

// const p3 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p3 Success"),2000);
//         setTimeout(()=>reject("p3 fail"),2000);

// });

// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// }); 
// after 5s gives :--> p2 Success,ignores p3 and p1

/*************** */
//Q2: if all conditions fails
// const p1 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p1 Success"),3000);
//             setTimeout(()=>reject("p1 fail"),3000);

// });

// const p2 =new Promise((resolve,reject)=>{
//         setTimeout(()=>reject("p2 fail"),1000);

// });

// const p3 =new Promise((resolve,reject)=>{
//     // setTimeout(()=>resolve("p3 Success"),2000);
//         setTimeout(()=>reject("p3 fail"),2000);

// });

// Promise.any([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// }); 
//AggregateError: All promises were rejected


/*********** */
const p1 =new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("p1 Success"),3000);
            setTimeout(()=>reject("p1 fail"),3000);

});

const p2 =new Promise((resolve,reject)=>{
        setTimeout(()=>reject("p2 fail"),1000);

});

const p3 =new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("p3 Success"),2000);
        setTimeout(()=>reject("p3 fail"),2000);

});

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors);//objects .give us errors in form of list
    
}); 
/**
 *  AggregateError: All promise  were rejected

(3) ['p1 fail', 'p2 fail', 'p3 fail']
0: "p1 fail"
1: "p2 fail"
2: "p3 fail"
length
: 
3
 */
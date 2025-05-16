//creating a promise(), chaining and Error handling
// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);//orderId

// promise.then(function(orderId){
//     console.log(orderId);
//     // proceedToPayment(orderId);
// });
// //producer:-->

// function createOrder(cart){
//     //create newAPI
// const pr= new Promise(function(resolve,reject){
//     //createOrder
//     //validateCart
//     //orderId
    
//     //reject promise
//     if (!validateCart(cart)) {
//      const err =new Error("Cart is not valid")
//         reject(err)
//     }
//     //logic for createOrder
//     const orderId ="12345";
//     if(orderId){
//         resolve(orderId) //resolve promise
//     }
// });

// return pr;

// }
// function validateCart(cart){
// return true;
// }


/******************* */
//If there is an API CALL:-->
// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);//orderId
// console.log(promise);//here it will show pending because earlier there was no data
// //i.e why it will show pending


// promise.then(function(orderId){
//     console.log(orderId);
//     // proceedToPayment(orderId);
// });
// //producer:-->

// function createOrder(cart) {
//     //create newAPI
// const pr= new Promise(function(resolve,reject){
//     //createOrder
//     //validateCart
//     //orderId
    
//     //reject promise
//     if (!validateCart(cart)) {
//      const err =new Error("Cart is not valid")
//         reject(err)
//     }
//     //logic for createOrder
//     const orderId ="12345";
//     if(orderId){
//         setTimeout(function(){
//         resolve(orderId) //resolve promise after 5s
//         },5000)
//     }
// });

// return pr;

// }
// function validateCart(cart){
// return true;
// }

/************************** */
// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);//orderId
// // console.log(promise);


// promise.then(function(orderId){
//     console.log(orderId);
//     // proceedToPayment(orderId);
// })
// //failure callback
// .catch(function(err){
//     console.log(err.message);
    
// })

// //producer:-->

// function createOrder(cart) {
//     //create newAPI
// const pr= new Promise(function(resolve,reject){
//     //createOrder
//     //validateCart
//     //orderId
    
//     //reject promise
//     if (!validateCart(cart)) {
//      const err =new Error("Cart is not valid")
//         reject(err)
//     }
//     //logic for createOrder
//     const orderId ="12345";
//     if(orderId){
//         setTimeout(function(){
//         resolve(orderId) //resolve promise after 5s
//         },5000)
//     }
// });

// return pr;

// }
// function validateCart(cart){
// return false;//to reject() a promise, make it false
// }

/******************* */
//Promise Chaining:::--->
// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart)
// .then(function(orderId){
//     console.log(orderId);
//     return orderId;
//     // we want  proceedToPayment(orderId) as well;
// })
// .then(function(orderId){
//      return proceedToPayment(orderId)//return with promise
     
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
    
// })
// //failure callback
// .catch(function(err){
//     console.log(err.message);
    
// })

// //producer:-->

// function createOrder(cart) {
//     //create newAPI
// const pr= new Promise(function(resolve,reject){
//     //createOrder
//     //validateCart
//     //orderId
    
//     //reject promise
//     if (!validateCart(cart)) {
//      const err =new Error("Cart is not valid")
//         reject(err)
//     }
//     //logic for createOrder
//     const orderId ="12345";
//     if(orderId){
//         setTimeout(function(){
//         resolve(orderId) //resolve promise after 5s
//         },5000)
//     }
// });

// return pr;

// }
// function proceedToPayment(orderId){
//     //return a promise
//     return new Promise(function(resolve,reject){
//         resolve("Payment successful");
//     })
// }
// function validateCart(cart){
// return true;//to reject() a promise, make it false
// }

/************************ */
//If there is are more than 10/15 then if any will fail then other condition will not work
//Thus keep catch() in the beginning
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
    // we want  proceedToPayment(orderId) as well;
})
.catch(function(err){ //attatch catch()/callback fxn to promise object.
    console.log(err.message);
    
})
.then(function(orderId){
     return proceedToPayment(orderId)//return with promise
     
})
.then(function(paymentInfo){
    console.log(paymentInfo)
    
})
//failure callback
.catch(function(err){
    console.log(err.message);
    
})
.then(function(orderId){
    console.log("No matter what happens, I will be called");
    // we want  proceedToPayment(orderId) as well; 
})
//producer:-->

function createOrder(cart) {
    //create newAPI
const pr= new Promise(function(resolve,reject){
    //createOrder
    //validateCart
    //orderId
    
    //reject promise
    if (!validateCart(cart)) {
     const err =new Error("Cart is not valid")
        reject(err)
    }
    //logic for createOrder
    const orderId ="12345";
    if(orderId){
        setTimeout(function(){
        resolve(orderId) //resolve promise after 5s
        },5000)
    }
});

return pr;

}
function proceedToPayment(orderId){
    //return a promise
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    })
}
function validateCart(cart){
return true;//to reject() a promise, make it false
}
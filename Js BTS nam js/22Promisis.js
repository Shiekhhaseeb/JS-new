//promisis
// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {

//   proceedToPayment(orderId);
   
// });

// const promise =createOrder(cart)//promise is empty object with data value
// //{data : undefined}
// //{data : orderDetails}

// // promise.then() isme callback function call karo
// promise.then(function (orderId) {

//   proceedToPayment(orderId);
   
// })

/************************ */
//fetch():--> given by browser to make external calls 
//It returns us a promise
// const GITHUB_API ="https://api.github.com/users/akshaymarch7"

// const user = fetch(GITHUB_API);//open console> use debugger
// console.log(user);

/****************** */
// const GITHUB_API ="https://api.github.com/users/akshaymarch7"

// const user = fetch(GITHUB_API);

// console.log(user);

// //call back attatched to this promise() object
// user.then(function(data){
// console.log(data);

// })

/************************* */
// const GITHUB_API ="https://api.github.com/users/akshaymarch7"

// const user = fetch(GITHUB_API);

// console.log(user);

/*********** */
//promisis for INTERVIEW :-->
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {


  proceedToPayment(orderId,function(paymentInfp){

     showOrderSummary(paymentInfp,function(){

        updateWalletBalance();//This is called Pyramid of DOOM

});

});
   
});
// const promise =createOrder(cart);

// promise.then(function (orderId) {

//   proceedToPayment(orderId);
   
// });

//or
//without attaching variables using .then()
// createOrder(cart).then(function (orderId) {

//   return proceedToPayment(orderId);
// })
// //agar 1 or dikhana ho then add another then().This is called promise() chaining.
// .then(function (paymentInfp) {

//   return showOrderSummary(paymentInfp);
// })
// .then(function (paymentInfp) {

//   return updateWalletBalance(paymentInfp);
// })
/*************** */
//Promise comes with an impt. concept of Promise chaning :-->

//some developers like to use Arrow function:
//like :-->
createOrder(cart)
 .then((orderId)=> proceedToPayment(orderId))
 .then((paymentInfp)=> showOrderSummary(paymentInfp))
.then((paymentInfp)=> updateWalletBalance(paymentInfp));
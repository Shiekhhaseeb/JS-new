// const promiseOne =new Promise(function(resolve,reject){

//     //Do any Async task
//     //DB calls,cryptography,network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000);//1s tak chalega

// })
// promiseOne.then(function(){//then() is connected to the resolve using resolve()
//     console.log('Promise consumed');
    
// })
// /**2****************************** */
// //other way
// //promise need not to be stored in the variable:-->
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task2');
//         resolve()

//     },1000)
// }).then(function(){
//     console.log('Async 2 is resolved');
    
// })
// /*3****************************** */
// //we can pass object,arrray,function etc in resolve():-->
// const PromiseThree =new Promise(function(resolve,reject){
// setTimeout(function(){
//     resolve({username :'chai',email:'chai@example.com'})//we can pass data in resolve()
// },2000);

// })
// PromiseThree.then(function(user){//here we can collect data
// console.log(user);

// })
// /*4******************************** */
// // const PromiseFour =new Promise(function(resolve,reject){
// //     setTimeout(function(){
// // let error = true;
// // if (!error) {
// //     resolve({username :'chai',password:123})
    
// // }
// // else{
// //     reject('ERROR : Something went wrong')
// // }
// //     },1000)
// // })
// // //consume promise 4
// // PromiseFour
// //   .then((user) => {//gives full object
// //     console.log('User received:', user);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   })
// //   .finally(()=>console.log('The Promise is either resolved or rejected'));//kinda default,ye hoga he hoga
//   /************************************ */
//   const PromiseFour =new Promise(function(resolve,reject){
//     setTimeout(function(){
// let error = false;
// if (!error) {
//     resolve({username :'chai',password:123})
    
// }
// else{
//     reject('ERROR : Something went wrong')
// }
//     },1000)
// })
// //consume promise 4
// PromiseFour
//   .then((user) => {//gives full object
//     console.log(user);
//     return user.username//chai milega
//   })
//   .then((username)=>{
//     console.log(username);//chaining
    
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(()=>console.log('The Promise is either resolved or rejected'));
  /************************************************ */
  //It's not necessary to use .then() .catch() for promisis()
  //promises are used in D.B connection 
  //Few do 
  //1.Async await 
  //2.then(),catch()
/********************************** */
  //asyn await():-->
  /*Thodi der wait karta hai,warna phir wahi error deta hai
  Here we do'nt handle catch() gracefully */

  /*5****************************** */
//   const PromiseFive =new Promise(function(resolve,reject){
//     let error = false;
//     if (!error) {
//         resolve({username :'JS',password : 123})
//     }
//     else{
//         reject('ERROR, JS went wrong')
//     }
//   },1000)

//   async function ConsumePromiseFive(){
// const response =await PromiseFive
// console.log(response);
//   }
//   ConsumePromiseFive()
  /*************************** */
//   const PromiseFive =new Promise(function(resolve,reject){
//     let error = true;
//     if (!error) {
//         resolve({username :'JS',password : 123})
//     }
//     else{
//         reject('ERROR, JS went wrong')
//     }
//   },1000)

//   async function ConsumePromiseFive(){
//     //using try{} catch {} block:-->
// try{
//     const response =await PromiseFive
//     console.log(response);
    
// }catch(error){
// console.log(error);

// }

//   }
//   ConsumePromiseFive()
/******************************** */


//   async function getAllUsers(){

//     const response =await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = response.json();
//     console.log(data);

// }
//   getAllUsers()//Promise { <pending> }
/******************************** */
// async function getAllUsers(){
// try{
//     const response =await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();//response takes time thus we keep this in await
//     console.log(data);
// }
//    catch(error){
// console.log('E',error);

//    }

// }
//   getAllUsers()
/****************************** */
//using .then() and catch() :-->

//     fetch('https://jsonplaceholder.typicode.com/users')
//     //data --> variable name
//     .then((response)=>{
//         return response.json()
//     })
//     //Handle karega upar wale ko(Chain/Thenable)
//     .then((data)=>{
//         console.log(data);
        
//     })
//     //agar error incase toh catch karoo:-->
//     .catch((error)=>    console.log('E',error))
// //we can also use .finally if we want
// .finally( console.log('This is the finally() block which will run anyhow'));

/***************************************** */
fetch('https://jsonplaceholder.typicode.com/users') // Step 1: Fetch data
  .then((response) => { // Step 2: Handle the response
    return response.json(); // Convert response to JSON,as data is in the form of String in order to convert it into Object we use .json()
  })
  .then((data) => { // Step 3: Use the data
    console.log(data); // Display the data in the console
  })
  .catch((error) => { // Step 4: Handle errors
    console.log('Error:', error); // Display the error in the console
  })
  .finally(() => { // Step 5: Final cleanup
    console.log('This is the finally() block which will run anyhow');
  });

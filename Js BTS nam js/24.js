//Async
//whats await?
//How async await works behind the scenes?
//e.g of using async/await
//Error Handling
//Interviews
//Async await vs Promise .then() /.catch()

/****************** */
// async function getData() {
//     return "Namass"
// }
// const dataPromise = getData();
// console.log(dataPromise);//async :This will return a promise always
/** output:-->
 * 
Promise {<fulfilled>: 'Namass'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"Namass
 */
/************************** */
//How to get result:
// async function getData() {
//     return "Namass"
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then(res => console.log(res));//response
//o/p :-->Namass

/********************** */
//If we create promise from here:-->
// const p =new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!!")
// })
// //always return a promise
// async function getData() {
//     return p;
// }
// const dataPromise = getData();
// //p = dataPromise
// dataPromise.then(res => console.log(res));

//o/p:--> Promise Resolved Value!!
/************************************/
// const p =new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!!")
// })
// //always return a promise
// async function getData() {
//     return p;
// }
// const dataPromise = getData();
// //p = dataPromise,p.then()
// dataPromise.then(res => console.log(res));

/**************************************/
//USING await with async?
//Note :--> async and await combo is used to handle Promisis
// const p =new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!!")
// });
// //Q1 :How we used to handle promisis before async await? :-->
// function getData(){
//     p.then(res => console.log(res));
// }
// getData();//o/p:--> Promise Resolved Value!!

/*********************** */
//Q2: using async await to handle this:-->
// const p =new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!!")
// });
// //create async function
// async function handlePromise() {

//     const val=await p;//promise se pehle await lagao or isko val me store karo
//     //p will store value of the resolve() Promise
//     //NOTE :--> await() can only be used inside a async function
//  console.log(val);
// }
// handlePromise();//Promise Resolved Value!!

/*********************** */
//How is async await diff. than handling promise in an normal way
/******************************** */

//older way / Normal behaviour  :-->

// const p =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!!")
//     },10000)//10secs
// });
// function getData(){
//     //JS engine will not w8 for Promise to resolved
//     p.then(res => console.log(res));
//     console.log("Nam javascript");

// }
// getData();
//output :-->
//Nam javascript
//after 10 seconds :--> Promise Resolved Value!!
// Time,tide and js waits for none
//problem :- with this  method was that few programmers used to think that JS will w8 for set timeout the execute other part of code

/******************************** */

//new way / async await() :-->

// const p =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!!")
//     },10000)//10secs
// });
// //await can only be used inside an async function
// async function handlePromise() {
// console.log("Hello world");
// //JS Engine was waiting for promise to resolved
//  const val = await p;//yaha program w8 karega
//   console.log("Nam javascript 1");
//  console.log(val);

// const val2 = await p;
//   console.log("Nam javascript 2");
//  console.log(val2);

// }
// handlePromise();

//o/p :-->

//Hello world
//Nam javascript 1
//  Promise Resolved Value!!
//  Nam javascript 2
//  Promise Resolved Value!!
/*************************************** */
//e.g 2:-->
// const p1 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!!")
//     },10000)//10secs
// });

// const p2 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!!")
//     },5000)//5 secs
// });
// //await can only be used inside an async function
// async function handlePromise() {
// console.log("Hello world");
// //JS Engine was waiting for promise to resolved
//  const val = await p1;//yaha program w8 karega
//   console.log("Nam javascript 1");
//  console.log(val);

// const val2 = await p2;
//   console.log("Nam javascript 2");
//  console.log(val2);

// }
// handlePromise();

/**
 * Hello world
ye saare ek saath print honge 10s bad :-->

 * Nam javascript 1
Promise Resolved Value!!
 Nam javascript 2
 Promise Resolved Value!!
 */
/********************** */
//e.g 3:-->
// const p1 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!!")
//     },5000)//5secs
// });

// const p2 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!!")
//     },10000)//10 secs
// });
// //await can only be used inside an async function
// async function handlePromise() {
// console.log("Hello world");
// //JS Engine was waiting for promise to resolved
//  const val = await p1;//yaha program w8 karega
//   console.log("Nam javascript 1");
//  console.log(val);

// const val2 = await p2;
//   console.log("Nam javascript 2");
//  console.log(val2);

// }
// handlePromise();

//o/p :-->
/**
 * Hello world
1st will print after 5 seconds :-->
 * Nam javascript 1
Promise Resolved Value!!

2nd will print after 10 seconds :-->
 Nam javascript 2
 Promise Resolved Value!!
 */
/************************ */
//call stACK DEKHO 20/40 SECONDS E.G
// const p1 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!!")
//     },10000)//10secs
// });

// const p2 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve("Promise Resolved Value!!")
//     },20000)//20 secs
// });
// //await can only be used inside an async function
// async function handlePromise() {
// console.log("Hello world");
// //JS Engine was waiting for promise to resolved
//  const val = await p1;//yaha program w8 karega
//   console.log("Nam javascript 1");
//  console.log(val);

// const val2 = await p2;
//   console.log("Nam javascript 2");
//  console.log(val2);

// }
// handlePromise();
/***************** */
//rEAL WORLD E.G:-->
//How fetch() works

//   const API_URL = "https://api.github.com/users/akshaymarch7"
//   //await can only be used inside async function
// async function handlePromise() {
// const data  =await fetch(API_URL)
// const jsonValue =await data.json()// This is also a promise & its handled using await()
// console.log(jsonValue)
// //How fetch works:--->
// // fetch().then(res=> res.json()).then(res => console.log())

// //fetch() => Response.json() => jsonValue
// }
// handlePromise();

/************************************* */
// const API_URL = "https://api.github.com/users/akshaymarch7";

// // ✅ async function
// async function handlePromise() {
//   const data = await fetch(API_URL);         // fetch returns a Response
//   const jsonValue = await data.json();       // .json() returns a Promise
//   console.log(jsonValue);                    // ✅ should print GitHub user data
// }

// handlePromise(); // ✅ call it
/*************************************** */
//ERROR HANDLING in js.
//Here we don't use .catch() method to handle errors,here we use try{} and catch{}
//wrap async await inside the try block

// const API_URL = "https://api.github.com/usersss/akshaymarch7";

// // // ✅ async function
// async function handlePromise() { 
//   //async await ko try block me rakho
//   try {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue);
    
//   } 
    
//   catch (error) {
//       console.log(error);
//   }


// }
// handlePromise();
////********************** */
//USING older way / traditional method :--->
const API_URL = "https://api.github.com/users/akshaymarch7";
async function handlePromise() {
  //async await ko try block me rakho
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}
//handling errors,using catch() only not try{}
handlePromise().catch(err => console.log(err))//jab galat API url hoga tab chalega
   
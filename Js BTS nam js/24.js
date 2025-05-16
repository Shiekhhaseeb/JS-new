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
const p =new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!")
});
//create async function
async function handlePromise() {
    
    const val=await p;//promise se pehle await lagao or isko val me store karo
    //p will store value of the resolve() Promise
    //NOTE :--> await() can only be used inside a async function
 console.log(val);
}
handlePromise();//Promise Resolved Value!!


// function getData(){
//     p.then(res => console.log(res));
// }
// getData();
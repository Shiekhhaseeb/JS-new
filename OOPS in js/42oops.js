// //Object literals
// const user ={
//     username: "John",
//     loginCount:8,
//     signedIn :true,

//     getUserDetails :function (){
//     console.log('Got user details from D.B');

// }
// }
// console.log(user.username);

// console.log(user.getUserDetails());
//output-->
// John
// Got user details from D.B
// undefined

/*************************** */
// const user ={
//     username: "John",
//     loginCount:8,
//     signedIn :true,

//     getUserDetails :function (){
//     // console.log('Got user details from D.B');
//         console.log(`Username: ${this.username}`);

// }
// }
// console.log(user.username);

// console.log(user.getUserDetails());
/*John
Username: John
undefined */

/******************* */
// const user ={
//     username: "John",
//     loginCount:8,
//     signedIn :true,

//     getUserDetails :function (){
//     // console.log('Got user details from D.B');
//         // console.log(`Username: ${this.username}`);
// console.log(this);

// }
// }
// console.log(user.username);

// console.log(user.getUserDetails());
/*John
{
  username: 'John',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
undefined */
/********************** */

// const user ={
//     username: "John",
//     loginCount:8,
//     signedIn :true,

//     getUserDetails :function (){
//     // console.log('Got user details from D.B');
//         // console.log(`Username: ${this.username}`);
// console.log(this);

// }
// }
// console.log(user.username);
// console.log(this);//this in global context o/p:--> {}
//by default this in brower has got many things
// console.log(user.getUserDetails());

//To make user2 i have to copy upper code again n again

// const user2 ={
//     username: "John",
//     loginCount:8,
//     signedIn :true,

//     getUserDetails :function (){
//     // console.log('Got user details from D.B');
//         // console.log(`Username: ${this.username}`);
// console.log(this);

// }
// }
// console.log(user2.username);
// console.log(this);

//To avoid this we have got Constructor function
/************************ */
// function User(username, loginCount, isloggedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedisloggedIn =isloggedIn

//   return this//ye by default hota hai
// }

// const userOne = new User('hitesh',12,true)//new keyword creates an new instance, helps us to avoid override,purana data gayab nahi hoga ,new instance banega
// const userTwo = new User('ChaiAurCode',11,false)

// console.log(userOne);
// console.log(userTwo);
/***************************** */
// function User(username, loginCount, isloggedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedisloggedIn =isloggedIn

// //we can also make methods:-->
//   this.greeting =function () {
//     console.log(`Welcome ${this.username}`);
//       }
//   return this//ye by default hota hai
// }

// const userOne = new User('hitesh',12,true)
// const userTwo = new User('ChaiAurCode',11,false)

// console.log(userOne);
// console.log(userTwo);

/***************** */
function User(username, loginCount, isloggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedisloggedIn =isloggedIn
  
//we can also make methods:-->
  this.greeting =function () {
    console.log(`Welcome ${this.username}`);
      }
  return this//ye by default hota hai
}

const userOne = new User('hitesh',12,true)
const userTwo = new User('ChaiAurCode',11,false)

console.log(userOne.constructor); //constructor:->[Function: User] its the reference to itself
console.log( userOne instanceof User);//true
//without new keyword,check object directly
console.log( userOne instanceof Object);//true 

console.log(userTwo);
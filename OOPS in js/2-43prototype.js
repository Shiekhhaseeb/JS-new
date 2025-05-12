// let myName = 'hitesh';
// console.log(myName.length);//6

/****************** */
// //IF we add 5 spaces
// let myName = 'hitesh     ';
// console.log(myName.length);//11
// console.log(myName.trim().length); //not good way

/************* */
// let myName = 'hitesh     '
// let mychannel = 'chai     '
// console.log(myName.truelength);

//STORY::-->

// let myHeros = ["thor", "spiderman"];

// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",
//   //to define method
//   getSpiderPower: function () {
//     console.log(`spidy power is ${this.spiderman}`);
//   },
// }

// Object.prototype.hitesh = function(){
//     console.log('hitesh is present in all objects');

// }
// // heroPower.hitesh( )//hitesh is present in object
// myHeros.hitesh()//array he bhi yehi change aaya

/********************* */
// let myHeros = ["thor", "spiderman"];

// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",
//   //to define method
//   getSpiderPower: function () {
//     console.log(`spidy power is ${this.spiderman}`);
//   },
// };

// Object.prototype.hitesh = function () {
//   console.log("hitesh is present in all objects");
// };
// Array.prototype.heyHitesh = function () {
//   console.log(`Hitesh says hello`);
// };
// // heroPower.hitesh( )//hitesh is present in object
// myHeros.hitesh(); //array he bhi yehi change aaya
// myHeros.heyHitesh(); //array pe power aaya
// heroPower.heyHitesh()//yaha ye access nahi hona hoga

//Inheritance:-->
const User = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSuport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSuport,
};
Teacher.__proto__ = User;
//every object is an instance itself
//kisi or ki properties ko access karna ,this approach is old approach

//Modern syntax:-->
Object.setPrototypeOf(TeachingSuport, Teacher);

/*********** */

let anotherUsername = "chaiAurCode";//11

String.prototype.trueLength = function () {
  console.log(`${this}`);
//   console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};
anotherUsername.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()

 //getOwnPropertyDescriptor: hidden chezon ke bare me batata hai object ke bare me
//  Object.getOwnPropertyDescriptor(Math)
/***************************************** */
//  console.log(Math.PI);
//  Math.PI =5;
//  console.log(Math.PI);//YE OVERRRIDE nahi hoga
/***************************** */
 //why???
 const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")//i want PI ki value
console.log(descriptor);
/*o/p:-->.
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
PS
*/
//we can take their properties and flags and we can also change them
//we can declare object in different ways:
//1.Factory functions:-->by default its value is null
// const mynewObject = Object.create(null)
// const chai = {
//     name :"ginger chai",
//     price :250,
//     isAvailable :true
// }
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));//undefined ,its object not property
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/*{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
} */

  //Since its my code made by me I can easily change its Properties but we can do it always

//we can define our properties in Objects
// Object.defineProperty(chai,"name",{
//     writable :false,
//     enumerable: false

// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/**{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
} */

  /*************************** */
//   const chai = {
//     name :"ginger chai",
//     price :250,
//     isAvailable :true
// }
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));//undefined ,its object not property
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// //using loop
// for (let [key,value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);
//     //objects is not iteratible always depending upon diff diff situation
//     //take enties and make them iterable
// }

/**name : ginger chai
price : 250
isAvailable : true */
/****************************** */
//when will code burst
//  const chai = {
//     name :"ginger chai",
//     price :250,
//     isAvailable :true,
//     orderChai : function(){
//         console.log("code phat gaya");
        
//     }
// }
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));//undefined ,its object not property
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// //using loop :-->
// for (let [key,value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);

// }
/**
 * price : 250
isAvailable : true
orderChai : function(){
        console.log("code phat gaya");

    }
 */
//we dont want it we want key values only

/******************* */
//  const chai = {
//     name :"ginger chai",
//     price :250,
//     isAvailable :true,
//     orderChai : function(){
//         console.log("code phat gaya");
        
//     }
// }
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{
//     // writable :false,
//     enumerable:false,//means iterate/repeat

// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// //using loop :-->
// for (let [key,value] of Object.entries(chai)) {
//     // we want key values
//     if (typeof value !== 'function') {
//          console.log(`${key} : ${value}`);
//     }

// }

//sirf ye do print hinge:--> name print nahi hoga
/**price : 250
isAvailable : true */

/************************** */
 const chai = {
    name :"ginger chai",
    price :250,
    isAvailable :true,
    orderChai : function(){
        console.log("code phat gaya");
        
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai));
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable :false,
    enumerable:true,//true means iterate now/repeat

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//using loop :-->
for (let [key,value] of Object.entries(chai)) {
    // we want key values
    if (typeof value !== 'function') {
         console.log(`${key} : ${value}`);
    }

}
/**name : ginger chai
price : 250
isAvailable : true */
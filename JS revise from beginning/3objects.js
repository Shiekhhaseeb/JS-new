// //Objects in js
// //is an unorderer collection of key-values pairs.Each key value pair is called Property.

// //object literal notation
// //initializing an object with object literal notation {}
// // var person={
// //     firstName :"Adam",
// //     secondName: "smith",
// //     age :25,
// //     ownsCar :false

// // }
// // console.log(person);//{ firstName: 'Adam', secondName: 'smith', age: 25, ownsCar: false }

// // //to ACCESS any value in the object
// // console.log(person.age);//25
// // console.log(person.firstName);//Adam
// // console.log(person['firstName']);//Adam
// ///////////////////
// //object inside object

// var cap = {
//   firstName: "steve",
//   lastName: "Roger",
//   age: 102,
//   friends: ["Bucky Barnes", "Bruce", "Tony Stack"],
//   isAvenger: true,

//   address: {
//     state: "Newyork ",
//     city: {
//       name: "Brooklyn",
//       pincode: 123456,
//     },
//   },
// };
// console.log(cap);
// console.log(cap.address.state); //Newyork
// console.log(cap.address.city.name); //Brooklyn
// console.log();


// //add new properties from outside 
// cap.movies =["age of ultron","civilwar","first Avanger"]
// console.log(cap);
 
// //delete key word
// delete cap.age;
// console.log(cap);
/**************************** */
//ES6 concept
//Destructuring objects ;-->helps us to unpack values from Arrays/properties from objects into distinct variables

// let myObj={
// name :'Adam',
// age: '25',
// gender:'M'
// }
// //destructuring
// let {f,g,h} =myObj;

// console.log(f);
// console.log(g);
// console.log(h);
/**undefined
undefined
undefined */ //we cant destructure object with different key names

//Thus we pass same key names whic are already present:-->
// let myObj={
// name :'Adam',
// age: '25',
// gender:'M'
// }
//destructuring
//while destructuring objects its necessary to use same name 
// let {name,age,gender} =myObj;

// console.log(name);//Adam
// console.log(age);//25
// console.log(gender);//M


//2.we can give alternate name for our "keys"
// let myObj={
// name :'Adam',
// age: '25',
// gender:'M'
// }
// //“Hey, go into myObj, find the name, and store it in a new variable called n. Do the same for age → a and gender → g.”
// let {name:n,age:a,gender:g} =myObj;
// //You need to get the original first, and then assign a copy:

// let { name } = myObj; // original
// let { age } = myObj; // original
// let { gender } = myObj; // original

// console.log(name);//Adam
// console.log(age);//25
// console.log(gender);//M

// //// Destructuring with aliases

// console.log(n);//Adam
// console.log(a);//25
// console.log(g);//M
/********************* */
//Destructure Nested objects:
let myObj={
name :'Adam',
age: '25',
gender:'M',
address:{
    country:"England",
    city:"London"
}
}
let {name:n,age:a,gender:g,
    address:{country,city}}=myObj
    //or
    /**
     * let {name:n,age:a,gender:g,
    address:{country:c,city:ci}}=myObj
     */
console.log(n);//Adam
console.log(a);//25
console.log(g);//M
console.log(country);//England
console.log(city);//London

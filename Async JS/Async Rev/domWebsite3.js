////get multiple elements using getElements by Class name
//get multiple elements using querySelectorAll
//array like objexts :--> indexing, length property
//ja sab ki class same ho
// const navItems = document.getElementsByTagName("a"); //HTMLCollection(3),array like objects with index
// console.log(navItems);
// console.log(navItems.length);
//we cannot use forEach method to iterate through HTMLCollection
//loop :-->

//1.simple for
//2.for of loop
//3.forEach
/******************* */
// for (let i = 0; i < navItems.length; i++) {
// console.log(navItems[i]);
// const navItem =navItems[i];
// navItem.style.backgroundColor ="#fff";
// navItem.style.color = "green";
// navItem.style.fontWeight = "bold";

// }

/******************* */
// for (let navItem of navItems) {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }
/*********************/
// navItems.forEach(navItem => {//error :--> navItems.forEach is not a function
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// });
/**************************** */
//convert this into array using [Array.from(navItems);] :-->
// let navItems = document.getElementsByTagName("a");
// // since inavItem is HTMLcollection , we can change html coll >arrray
// navItems=Array.from(navItems);//true,CHECK YE array he ki nahi
// console.log(Array.isArray(navItems));

// navItems.forEach(navItem => {//error :--> navItems.forEach is not a function
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// });
/************************** */
// let navItems = document.querySelectorAll("a");
//1.simple for
//2.for of loop
//3.forEach

// console.log(navItems);

//1.for():-->
// for (let i = 0; i < navItems.length; i++) {
// console.log(navItems[i]);
// const navItem =navItems[i];
// navItem.style.backgroundColor ="#fff";
// navItem.style.color = "green";
// navItem.style.fontWeight = "bold";

// }
/************** */
//2.forof():-->
// for (let navItem of navItems) {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }

/****************/
//3.forEach():-->
let navItems = document.querySelectorAll("a");
navItems =Array.from(navItems);
console.log(Array.isArray((navItems)));//true,MEANS THIS IS AN ARRAY

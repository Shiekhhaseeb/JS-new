//Hoisting:-->
// var x = 7;


// function getName(){
//     console.log("Nam javascript");
    
// }
// getName();
// console.log(x);
//o/p:-->
//nam js
//7


/*********************************/
// getName();
// console.log(x);

// var x = 7;

// function getName(){
//     console.log("Nam javascript");
    
// }

//o/p:--> in mosst programming langs it will give error
//Nam javascript
// 7Hoisting.js:13 undefined
/************************** */
// getName();//woks good
// console.log(x);//undefined

// console.log(getName);//we get fxn itself

// var x = 7;

// function getName(){
//     console.log("Nam javascript");
    
// }
// console.log(getName);//we get fxn itself again

/*****************************/

// var x = 7;

// function getName(){
//     console.log("Nam javascript");
    
// }

// getName();
// console.log(x);

// console.log(getName);//we get fxn itself
/**********************************/
// getName();
// console.log(x);

// console.log(getName);
// var x = 7;

// function getName(){
//     console.log("Nam javascript");
    
// }
/*********************************/
// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// var getName2 =function () {//it behaves just like a variable,it will allocate the memory with undefined
//     console.log("Nam javascript");
    
// }

// var getName = () => {//it behaves just like a variable
//     console.log("Nam javascript");
    
// }
// function getName(){//only in case of proper fxn declaration it will copy the whole code

// }
/*****************************/


var x = 7;

function getName(){//only in case of proper fxn declaration it will copy the whole code
console.log("Namaste js");

}
getName();
console.log(x);
console.log(getName);

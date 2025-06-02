// let name = {
//     firstName : "Akashay",
//     lastName : "saini",
//     printFullName :function(){
//         console.log(this.firstName + " " + this.lastName);
        
//     }
// }
// name.printFullName();

// let name2 = {
//     firstName : "Sachin",
//     lastName : "Tendulkar",
  
// }
//   //use call method : fxn borrowing
// name.printFullName.call(name2);

/**************** */
// let name = {
//     firstName : "Akashay",
//     lastName : "saini",
// }
// //Good way :-->
// //Dont use method inside object, keep it outside in a variable

//  let printFullName = function(){
//         console.log(this.firstName + " " + this.lastName);//this refers to the name
        
//     }

// printFullName.call(name);

// let name2 = {
//     firstName : "Sachin",
//     lastName : "Tendulkar",
  
// }
//   //use call method : fxn borrowing
// // name.printFullName.call(name2);dont use .name
// printFullName.call(name2);
/***************************************** */
// let name = {
//     firstName : "Akashay",
//     lastName : "saini",
// }

//  let printFullName = function(){
//         console.log(this.firstName + "from " + this.lastName);//this refers to the name
        
//     }

// printFullName.call(name);

// let name2 = {
//     firstName : "Sachin",
//     lastName : "Tendulkar",
  
// }

// printFullName.call(name2);
/************** *****************/
//pass parameter:-->
let name = {
    firstName : "Akashay",
    lastName : "saini",
}
 let printFullName = function(hometown){
        console.log(this.firstName + "from " + hometown + " ," + state);//this refers to the name
        
    }
printFullName.call(name,"Dehradun","Uttrakhand");//if we have more than 2 arguments then use (,) for separation
let name2 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}
printFullName.call(name2,"Mumbai","Maharashtra");

//2. apply()
//instead of passing these arguments individually
// in apply method we pass these arguments in a array list.
printFullName.apply(name2,["Mumbai","Maharashtra"]);
//the bind method looks exactly the same as call method,but only difference is instead of calling this method here ,the bind method binds this method printfullname() with a object & return us copy of that method

//3. bind()
let printMyName=printFullName.bind(name2,"Mumbai","Maharashtra");
console.log(printMyName);//this is a fxn which can be invoked later.
printMyName();
/************** */
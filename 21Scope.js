//Scope
//starts from 3 key words
//1.LET
//2.VAR
//3.CONST
// let a=10;
// var b= 20;
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);
//output :--->
/*10    
20
30 */

/*****************************************/
//scope {fxn,if else} :{}: yehi scope hai
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// // console.log(a);//Error a not defined
// // console.log(b);//Error b not defined
// console.log(c);//30,this is the problem in var ,this is security issue

/********************** */
//global scope

// var c=300
let a=300

if (true) {//block scope
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inner:",a);
      }
  //     for (let i = 0; i < array.length; i++) {
  //       const element = array[i];
        
  //     }
  // //we want for() in only in local scope
  console.log(a)
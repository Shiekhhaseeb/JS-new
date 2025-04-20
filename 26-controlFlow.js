 //if
//  const isUserLoggedIn = true//= assigmnment
//  if (3!=2) {    //== comparison
//     console.log("executed");
    
//  }

 //2<=2
 //<,>,<=,>=,==,!=,===
 /*********Both contorl works******************/ 
//   const temperature =41
//   if (temperature <50) {    //== comparison
//      console.log("temperature is less than 50");
     
//   }
//   console.log("temperature is greater than 50");

  /************if else********************* */
//   const temperature =41
//   if (temperature ===41) {    //=== comparison + typechecking
//      console.log("temperature is less than 50");
     
//   }else{
//   console.log("temperature is greater than 50");
 
//   }
//   console.log("All executed");

/************Scope*********************** */

// const score=200
// if (score >100) {
//     var power ="fly"//block-scope ke bahar bhi access hoga var but not let and const,to avoid security issue error aana chaheye,therefore use let and const
//  console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);

/************************************* */
// const score=200
// if (score >100) {
//     let power ="fly"//block-scope ke bahar bhi access hoga var but not let and const,to avoid security issue error aana chaheye,therefore use let and const
//  console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);
/************************************ */

//shothand notation
// const balance=1000
// if (balance >500) console.log("test");
/************************ */
// const balance=1000
// if (balance >500) console.log("test"),
// console.log("test2");
// ;
/************************* */
//Nested if else
// const balance=1000

// if (balance < 500) {
//     console.log("Less than 500 ");

// }
// else if (balance <750) {
//     console.log("Less than 750");
    
// }
// else if (balance <900) {
//     console.log("Less than 900");
    
// }
// else{
//     console.log("less than 1200");
     
// }

/************************ */
//buy courses online
const isUserLoggedIn=true
const debitCard = true
const LoggedInFromGoogle=false
const LoggedInFromEmail =true

if (isUserLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy courses");

}
if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User logged in");
    
}
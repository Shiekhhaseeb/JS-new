//we dont know the no. of items , we just wanna add no. of items .Just like cart in E-commerce website

// function calculatePrice(num1) {

//     return num1;

// }
// console.log(calculatePrice(2));
/************************************** */
// function calculatePrice(...num1) {
//   //rest operator:- (...)
//   //rest operator means pack all in a bundle and give me all in an array

//   return num1;
// }
// console.log(calculatePrice(200, 400, 500,100,1222));

/**
 * NOTE :--> spread operator and rest operator depends on the use case
 */
/**************************** */
// function calculatePrice(val1,val2, ...num1) {
  
  
//     return num1;
//   }
//   console.log(calculatePrice(200, 400, 500,2000));//value1 or vlaue2 ko chodd kai --> output
// //   [ 500, 2000 ]
/********************* */
// function calculatePrice(val1,val2, ...num1) {
  
  
//     return num1;
//   }
//   console.log()
/************************************************/
//   const user=  {
//     username:"hitesh",
//     price:199
//   }
// //pass object in function
//   function handeObjects(anyobject){//user=anyobject
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
//   }
//   handeObjects(user)//its campolsory to pass object here (user) not anyobject
//oupput--> Username is hitesh and price is 199 
  /************************************************/
//problem comes when we have prices :-
// const user=  {
//     username:"hitesh",
//     prices:199//prices
//   }
// //pass object in function
//   function handeObjects(anyobject){//user=anyobject
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
//   }
//   handeObjects(user)
  //oupput-->  Username is hitesh and price is undefined 
  //i.e why ppl like Typescript(does typechecking itself)
  /************************************** */
  const user=  {
    username:"hitesh",
    prices:199
  }

  function handeObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
  }
//we can pass object directly
  handeObjects({
    username:"Sam",
    price:399
  })

  //we can pass Array as well
  const myNewArray=[200,400,100,600]

  function returnSecondValue(getArray) {
    return getArray[1]//pass Argument
  }
//   console.log(returnSecondValue(myNewArray));//400
// we can pass array directly
console.log(returnSecondValue([200,400,500,1000]));//arr[1]=400
//
//   console.log(myNewArray);
  
//Trust issues with setTimeout:-->
// console.log("Start");

// setTimeout(function cb(){//cb() will be registerd in web API environment
//     console.log("Callback");
    
// },5000);//timer started

// console.log("End");

// //million
// //while loop takes 10s 
// // after 10 this while() will expire,blocks main thread,then it quickly calls "Callback"

// let startDate =new Date().getTime()//gives current date/date API
// let endDate = startDate;
// while(endDate <= startDate +10000) {//run loop for 10s
//     endDate = new Date().getTime();

// }
// console.log("While expires");
//o/p:--> 
/*Start
18.js:9 End
18.js:21 While expires
18.js:5 Callback */
/*********************************/
//same process happens
// console.log("Start");

// setTimeout(function cb(){//cb() will be registerd in web API environment
//     console.log("Callback");
    
// }, 0);//timer started

// console.log("End");
//same o/p:-->

/**Start
 End
Callback */
/*********************** */
console.log("Start");

function cb(){//cb() will be registerd in web API environment
    console.log("Callback");
}

setTimeout(cb, 0);

console.log("End");
//o/p:-->
/**Start
 End
Callback */
//This is all because of the Concurrency model
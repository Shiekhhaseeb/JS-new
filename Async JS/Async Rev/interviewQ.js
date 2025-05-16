// function haseeb(){
//   return function kamran(){
//     console.log("This is Callback");
    
//   }
// }
// let result = haseeb()
// result()

function haseeb(a){
 return a;
 
}

let result = haseeb(function kamran(){
  console.log("This is me");
  
})

console.log(result());
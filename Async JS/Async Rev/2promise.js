//write a function which returns promise
function ricePromise(){
    const bucket = ['coffee','chips','vegetables','salt','rice']
    return new Promise((resolve,reject)=>{
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
         resolve({value:"Fried Rice"})// we can pass any value here fxn,{}[]etc
    }
    else{
        reject("could'nt do it")// we can pass any value here fxn,{}[]etc
    }
})
}
//call ricePromise using ()
ricePromise().then(
    //jab promise resolve hoga
(myfriedRice)=>{
    console.log("Let's eat", myfriedRice);//Let's eat Fried Rice   
},
//jab promise reject hoga
).catch(
(error)=>{

    console.log(error);
    
})
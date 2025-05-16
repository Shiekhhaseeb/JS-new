//promise  && setTimeout


// I wanna to resolve /reject promise after 2 second
function myPromise() {
    
    return new Promise ((resolve,reject)=>{
        const value =false;
        setTimeout(()=>{
            if (value) {
                resolve()
            }
            else{
                reject()
            }
        },2000)
    })
}
myPromise()
.then(()=>{ console.log("Promise resolved")})
.catch(()=>{console.log("Promise Rejected")})
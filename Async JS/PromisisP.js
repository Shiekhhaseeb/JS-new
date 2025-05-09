let pizzaPromise =new Promise((resolve,reject)=>{
    let pizzaReady =false;// Change to false to simulate rejection

    if (pizzaReady) {
        resolve('Your pizza is ready')
    }
    else{
        reject('Sorry, the pizza shop is closed.')
    }

});
pizzaPromise
.then((message)=>console.log(message))//if fulfilled
.catch((error)=> console.log(error))//if rejected
.finally(()=>console.log('Thankyou for your order'))
/*************************************** */

  
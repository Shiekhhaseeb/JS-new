//Singleton
//Object.create

//Object literals:-
const mySymbol=Symbol("Key1")//1.take symbol

const JsUser={
    name:"Hitesh",
    "full name" :"hitesh choudhary",
    [mySymbol]:"mykey1",//2.make symbol act like keys
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn :false,
    lastLoginDays :['Monday','Saturday']
}

// // console.log(JsUser.email,);// 1 way to access values
// console.log(JsUser['email']);// 2nd way using [],take it as string

console.log(JsUser['full name']);
console.log(JsUser.mySymbol);//mykey1,not used as symbol here

// console.log( typeof JsUser.mySymbol);//string,    mySymbol :"mykey1",

//to do so take it like this:- [mySymbol]:'mykey1'
// console.log(JsUser[mySymbol]);
// console.log(typeof mySymbol); // 👉 "symbol"
/*********** */
//change values 
JsUser.email="haseeb@google.com";
//freeze objects
// Object.freeze(JsUser);
JsUser.email="12345@google.com";
// console.log(JsUser);

/************** */
//in js fxns are treated as type 1 citizen

JsUser.greeting=function(){
    console.log("Hello Js user1");
    
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js user2,${this.name}`);
    
}
console.log(JsUser.greeting());//Hello js
// console.log(JsUser.greeting);//function
console.log(JsUser.greetingTwo());//Hello js user Hitesh

//`` string interpolation : 
//undefined is displayed becoz 1 execution apne aap hota hai 
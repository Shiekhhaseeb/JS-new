//There are 2 types of DataTypes in js:-

//1.Primitive(call by value)

//1.String
//2.Number
//3.Boolean
//4.Null
//5.Undefined
//6.Symbol
//7.BigInt
/*************************** */
const score=100;
const score2 =false;
const scoreValue=100.3

const isLoggedIn=false
const OutsideTemp=null
let userEmail;
let userEmail2=undefined;//manually setting it undefined

const id= Symbol('123')
const anotherId =Symbol('123')

const bigNumber=122222222222222224556666n;
 console.log(bigNumber);//122222222222222224556666n
 console.log(typeof bigNumber);
 
 console.log(OutsideTemp);
 console.log(scoreValue);
 
 
/**************************** */
//2.Non-Primitive(Reference-type/call by reference)
//1.Arrays
//2.Objects
//3.Functions

//1.Array 
const heros=['Shaktiman','Naagraj','doga']
console.log(heros)

//2.objects
let myObj={
    name:'Haseeb',
    age:'22'
}

console.log(myObj);
//3.function
const myFn =function(){
    console.log('Hello world!');
    
}
myFn()

console.log(typeof myFn);//fxn
console.log(typeof myObj);//object
console.log(typeof heros);//objects

console.log(typeof anotherId);//symbol


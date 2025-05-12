// const newHero =['Hulk','spideerman']
// newHero

/********************* */
function multipleBy5(num) {
    return num * 5;
}

multipleBy5.power = 2

console.log(multipleBy5(5));//25
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
//output-->
/*
25
2
{}  */
//we can make fxn behave as object
//Thus fxn is a function,object as well

function createUser(Username,score){
    this.Username = Username
    this.score = score
}

createUser.prototype.increment =function(){
    this.score++//this =JIS
}
//another method
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);//this =JIS
    
}
//new tells u additional properties addeded
const chai = new createUser('chai',25);// to make it understand context ,JISNE bhi bulaya hai uske pass jaoo(JISNe= this)
const tea = new createUser('tea',250);

chai.printMe() 

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
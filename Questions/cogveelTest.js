//while loop is used when we dont know the condition
// while (condition) {

// }
/*/*************prime no.*******************************/

// 1.Prime number using while loop:-

// let n = 2;
// if (n < 2) {
//   console.log("The number is composite");
// } else if (n % 2 === 0) {
//   console.log("The number is composite(Not Prime!)");
// } else {
//   console.log("The number is prime");
// }
/*************************** */
// var number=  prompt("Enter the number:-");

// if(number==1){
//     console.log(`${number} is neither prime nor composite`)
// }
// else if(number<1){
//     console.log(`${number} is not prime`);
// }

// else {
//     //15
//     for(var i=2;i<number;i++){
//         //15%2 =R:1
//         //15/2=Q:7
//         if(number%i===0){
//         var result =`${number} is not prime`;
//         break;
//         }
//         else{
//             var result=`${number} is a prime number`
//         }
//     }
//     console.log(result)
// }
/**************************************************************/
//Even series using for loop
// for(i=0;i<=10;i++){
//     if(i%2==0){
//         console.log("even number",i);
//     }
//     else{
//         console.log("odd number",i)
//     }
// }
/***********************/
//2.Even series using do-while
// let i=0;
// do {
//     console.log("The even series is:-",i);
//     i=i+2;
// }
// while (i<=10);
/*************************** */

// let j=0;
// do {
//     console.log("The even series is:-",j);
//     j++;
// }
// while (j%2==0 && j<=10);

// /***********************/
// //3.Factorial of a number using fxns:-
// let n=5;
// function fact(n) {
//     `return fact(n)`
// }

//4.e.g of all functions
//and even odd functions

// let a=0;
// let b=0;

// function even(a) {//parameter
//     `return a%2==0`;
//     console.log("The even number is",a);

// }
// function odd(b) {
//     `return a%2!==0`;
//     console.log("The odd number is",b);
// }

// function sum(a,b) {//2 parameters
//     `return a%2!==0`;
//     console.log("The sum is",a+b);
// }

// function sub(a,b) {
//     `return a%2!==0`;
//     console.log("The sub is",a-b);
// }
// function mul(a,b) {
//     `return a%2!==0`;
//     console.log("The mul is",a*b);
// }
// function div(a,b) {
//     `return a%2!==0`;
//     console.log("The div is",a/b);
// }
// even(10);//argument
// odd(3);
// sum(10,20);
// sub(10,20);
// mul(10,20);
// div(10,20);

/**for():-when we know no. of iterations****************************** */
// for (let i = 0; i <= 10; i++) {
// console.log(i)
// }
/***while() :- when we  dont know no. of iterations********************* */
// let i=0;// var needs to be declared before
// while (i<=10) {
//     console.log(i)
//     i++
// }
/****do while**************** */

// let i=0;//dec var
// do {
//     console.log(i); //print
//     i++;

// } while (i<=10)//condition
/*******even series using do while********************** */
// let i=0;//dec var
// do {
//     console.log("The even seri",i); //print
//     i++;

// } while (i<=10)//condition

/*******Fibonacci series********************** */
// let limit = 100;

// let a = 0;
// let b = 1;
// let c = 0;

// while (limit > 0) {
//   a = b;
//   b = c;
//   c = a + b;
//   limit--;
// }
// console.log(c);
/************************************** */
var number=prompt("Enter the number:-");

if(number==1){
    console.log(`${number} is neither prime nor composite`)
}
else if(number<1){
    console.log(`${number} is not prime`);
}

else {
    //15
    let isPrime=false;
    for(var i=2;i<number;i++){
        //15%2 =R:1
        //15/2=Q:7
        if(number%i===0){
        isPrime=false
        break;
        }
        else{
            isPrime=true
        }
    }
    if(isPrime){
        console.log("Prime")
    }else{
        console.log("Not prime")
    }
}
/********factorial of a number using if else if ,else**************** */
// const number = parseInt(prompt('Enter a positive integer: '));

// if(number<0){
//     console.log(`Error! factorial for -ve number does not exists`)
// }
// else if(number===0){
//         console.log(`Factorial of 0 is 1`);

// }
// else{
//     let fact = 1;
//     for(i=1;i<=number;i++)
//     {
//         fact = fact*i;
//     }
//     console.log(`factorial of ${number} is ${fact}`)
//}
//////////////********Factorial using functions***********************////////////////////////////
// function fact(n) {
//     if (n==1 || n==0) {
//         return 1;
//     }
//     else{
//         return n * fact(n-1);
//     }
    
// }
// console.log(fact(5));

/******************************** */
// const number = parseInt(prompt('Enter a positive integer: '));

// if(number<0){
//     console.log(`Error! factorial for -ve number does not exists`)
// }
// else if(number===0){
//         console.log(`Factorial of 0 is 1`);

// }
// else{
//     let fact = 1;
//     for(i=1;i<=number;i++)
//     {
//         fact = fact*i;
//     }
//     console.log(`factorial of ${number} is ${fact}`)
// }
/**********************************/
// function fact(n) {
//     if (n==1 || n==0) {
//         return 1;
//     }
//     else{
//         return n * fact(n-1);
//     }
    
// }
// console.log(fact(5))

/********************************/
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

//console.log(factorial(5));
/****************************************/
//add 2 numbers 
//static numbers
// let a=10;
// let b=20;

// var c=a + b;//+ concatenates
// console.log("The sum of "+a+" and "+b+" is :-",c);
/******************************/
//DyNAMIC NUMBERS
// let a=prompt("plz enters 1st number");
// let b=prompt("plz enters 2nd number");

// var c=+a + +b;//+ concatenates or use ParseInt(a) instead of +
// console.log("The sum of "+a+" and "+b+" is :-",c);
/**************************************/
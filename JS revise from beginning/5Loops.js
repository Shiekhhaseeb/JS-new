//Loops are statements that can be used to control the flow of program and do some repetative tasks
//1.for():-->
// var a ='Hello World1';
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);
// console.log(a);

//But I want this 50 times ,I will not use console.log(a); x100
//Thus we use loops
// var b ='Hello World2';
// console.log(b);

// console.log(i);//undefined

// for (var i = 0; i < 10; i++) {
// console.log("Looop will run 10 times");
    
// }
// console.log(i);//number for which the loop will run

/***************************/
// var num=[2,3,4,5,6,7,8];
// var firstSquare =num[0]*num[0]
// console.log(firstSquare);

// var squaredArr = [firstSquare] 
// var secondSquare =num[1]*num[1]
// squaredArr.push(secondSquare)
// console.log(squaredArr);
/************ */
// var num=[2,3,4,5,6,7,8];
// var squaredArr =[];

// for (var i = 0; i < num.length; i++) {
//    squaredArr.push(num[i]*num[i]);
    
// }
// console.log(squaredArr);
/***************************/
//2.while():-->
// var i=1;
// while(i<=10){
// console.log(i);
// i++;
// }

/**************** */
//3.do while():-->

// var i=11;
// var n =10;
// do{
//     console.log(i)
//     i++;
// }
// while(i<=n);
// /********************* */
// //for in  : used in the obejects
// var colors={
//     primary:"Blue",
//     secondary:"Red",
//     tertiary:"white"
// }
// for(var color in colors){// color= Object,color holds the key ;colors = Varaible,
//     console.log(color);
//     console.log(colors[color]);
    
//}

/*****************************************/
//for of
// let colors =['Red','White','Green'];
// for (var[index,color] of colors.entries()) {
//     console.log(index + '->'+ color);
// }

//or
let colors =['Red','White','Green'];
//use array destructuring:-->🧠 Why the Square Brackets []?
for (let [index, value] of colors.entries()) {
    console.log(index, value);
}

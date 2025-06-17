//Array in js:-->
// var arr=[1,2,6,5,7,9,10]
// console.log(arr);
// /********************** */
// var arr2=[12,'Ferrari',true,12.5];
// console.log(arr2);
/************ */
//accessing elements in js
// var arr=[1,2,6,5,7,9.5,10]
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[5]);
// /************* */
// //Replace elements of Array
// arr[1]=32;
// console.log(arr);
// //To get length of the array
// console.log(arr.length);
// console.log(`The length of array${arr}`,arr.length);

//Array Methods:-->
// var arr=[1,2,6,5,7,9.5,10]
// //1.pop():-->Takes out the last element
// arr.pop();
// console.log("The popped array is",arr);//[1,2,6,5,7,9.5]
// //2.push():-->Pushes the element at the end (value hame he deni hai)
// arr.push(100)
// console.log("The pushed array is",arr);//o/p:-->
//[
//   1,   2,   6, 5,
//   7, 9.5, 100
// ]

/************* */

//3.unshift method :--> remo
/*********************** */
//using variable:-->

//1.pop()
//2.push()
//3.shift()
//4.unshift()

//1.pop()
// var arr2=[12,14,56,57];
// var c = arr2.pop()
// console.log(c);

//2.push():-->
// var arr2=[12,14,56,57];
// var c = arr2.push(100)
// console.log(c);


//4.shift(): pops first element of the array(pehla wala )
// var arr2=[12,14,56,57];
// var d = arr2.shift();
// console.log(d);
// console.log(arr2);

//3.unshift :--> Its like push,but pushes at starting

// var arr2=[12,14,56,57];

// var c = arr2.unshift(100)
// console.log(c);
// console.log(arr2);

/******************************/
//1.pop(): last wala delete
// var arr3= [12,14,56,57];
// arr3.pop()
// console.log(arr3);
/**********/
// //2.push() : last me add
// var arr3= [12,14,56,57];
// arr3.push(200)
// console.log(arr3);
// /*******************************/
// //3.unshift() : delete pehla wala
// var arr3= [12,14,56,57];
// arr3.unshift()
// console.log(arr3);

// /***********/
// //4.shift()
// var arr3= [12,14,56,57];
// arr3.shift(300)
// console.log(arr3);

//****************** */
//ES6 concept: unpack values from array.
//Destructuring arrays
// let arr =["Hi",'I',"am","Haseeb"]
//access "I am" from array
// let a = arr[1];
// let b =arr[2];
// console.log(a); //I
// console.log(b);//am
//Destructuring


/****************/
let arr =["Hi",'I',"am","Haseeb"]
//make a var/array and make it equal to the given array which we want to destructure(access the each element from the array)
//Here we can give different names while destructuring the array,which is not same in case of objects
let [a,b,c,d] =arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

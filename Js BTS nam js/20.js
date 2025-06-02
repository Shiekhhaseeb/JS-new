// // const arr = [5,1,3,2,6]
// // console.log(arr);

// // //Double- [10,2,6,4,12]

// // //Triple - [15,3,9,6,18]

// // //Binary- ["101","1","11","10","110"]
// //1.map():->
// // function double(x){
// //     return x *2;//creates new array out of it
// // }
// // function triple(x){
// //     return x *3;//creates new array out of it
// // }
// // function binary(x){
// //     return x.toString(2);// Converts number x to binary string
// // }
// // const output1 =arr.map(double);
// // const output2 =arr.map(triple);
// // const output3 =arr.map(binary);

// // console.log(output1);
// // console.log(output2);
// // console.log(output3);
// /*****************************************/
// // const arr = [5,1,3,2,6]
// // console.log(arr);

// //Double- [10,2,6,4,12]

// //Triple - [15,3,9,6,18]

// //Binary- ["101","1","11","10","110"]

// // const output1 =arr.map(function binary(x){
// // return x.toString(2);
// // });
// // console.log(output1);
// /****************** */
// // const arr = [5,1,3,2,6]
// // console.log(arr);

// // //Double- [10,2,6,4,12]

// // //Triple - [15,3,9,6,18]

// // //Binary- ["101","1","11","10","110"]

// // const output =arr.map((x)=>x.toString(2));

// // console.log(output);

// /************* */
// //2.filter
// // const arr = [5,1,3,2,6]
// // console.log(arr);
// // //filer odd values
// // function isOdd(x){
// // return x %2;
// // }
// // const output =arr.filter(isOdd)
// // console.log(output);
// // /************ */
// //for even values

// // const arr = [5,1,3,2,6]
// // console.log(arr);
// // //filer even values
// // function isEven(x){
// // return x %2 ===0;
// // }
// // const output =arr.filter(isEven)
// // console.log(output);
// /*****************************/
// // const arr = [5,1,3,2,6]
// // console.log(arr);
// // //filer odd values
// // function isOdd(x){
// // return x %2 !=0;
// // }
// // const output =arr.filter(isOdd)
// // console.log(output);
// /*********************************************/
// //IF we want to check the conditons
// // const arr = [5,1,3,2,6];
// // console.log(arr);
// // //filer odd values
// // function greaterThan4(x){
// // return x >4;
// // }
// // const output =arr.filter(greaterThan4);

// // console.log(output);//[5, 6]
// /************ */
// // const arr = [5,1,3,2,6];
// // console.log(arr);

// // //pass the fxn direcltly over here
// // const output =arr.filter(function greaterThan4(x){
// // return x >4;
// // });

// // console.log(output);//[5, 6]
// /************* */
// //using arrow fxns:->
// // const arr = [5,1,3,2,6];
// // console.log(arr);

// // const output =arr.filter((x)=> x >4);

// // console.log(output);
// /**************************/
// //3.reduce():->
// // const arr = [5,1,3,2,6];
// // //sum /max in array
// // function findSum(){
// // let sum=0;
// // for (let i = 0; i < arr.length; i++) {
// //     sum =  sum + arr[i];

// // }
// // return sum;
// // }
// // console.log(findSum(arr));//sum 17 aayega
// /**************************************/
// //write reduced code of this
// // const arr = [5,1,3,2,6];
// // //sum /max in array
// // function findSum(){
// // let sum=0;
// // for (let i = 0; i < arr.length; i++) {
// //     sum =  sum + arr[i];

// // }
// // return sum;
// // }
// // console.log(findSum(arr));

// // const output = arr.reduce(function(acc,curr){
// // acc = acc +curr;
// // return acc;

// // },0)
// // console.log(output);//17
// //This whole logic is similar to find sum
// /**************************************/
// const arr = [5, 1, 3, 2, 6];
// //sum /max in array
// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr)); //6 ,6 is the max value among array
// //using reduce():-->
// const output = arr.reduce(function (acc, curr) {
//   // if (curr > acc) {
//   //     acc =curr

//   // }
//     let max = 0;

//   if (curr > max) {
//     max = curr;
//   }

//   return max;
// }, 0);
// console.log(output);
/***************************** */
// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donal", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deepika", lastName: "padukone", age: 26 }
// ];
//list of fullname 
// [  "akshay saini", "donal trump" ......]
// const output =users.map((x)=>x.firstName + " " + x.lastName);
// console.log(output);
//o/p:-->['akshay saini', 'donal trump', 'elon musk', 'deepika padukone']
/********************** */
// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donal", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deepika", lastName: "padukone", age: 26 }
// ];
//how many ppl have same age/particular unique age

//{26 : 2,75 :1,50 : 1}
// const output =users.reduce(function(acc,curr){

//     if (acc[curr.age]) {

//         acc[curr.age] = ++acc[curr.age]
//     }
//     else{
// acc[curr.age] = 1;//if 26 is not there put 1 inside it
//     }
// return acc;
// },{});//{} empty object
// console.log(output);//{26: 2, 50: 1, 75: 1}
/******************* ***********/
//First name of all ppl whose age is <30
//['akshay','deepika']
// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donal", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deepika", lastName: "padukone", age: 26 }
// ];
// const output= users.filter((x)=> x.age <30);

// console.log(output);
/************************* */
// chain these methods
// First name of all ppl whose age is <30
// ['akshay','deepika']
// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donal", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deepika", lastName: "padukone", age: 26 }
// ];
// const output= users.filter((x)=> x.age <30)//whose age,30
// .map((x)=>x.firstName);

// console.log(output);
/******************* */
//Do using reduce
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donal", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 }
];
const output= users.filter((x)=> x.age <30)//whose age,30
.map((x)=>x.firstName);

console.log(output);
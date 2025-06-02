// /************************************/
// //MISTAKES ppl make:-->
// const radius =[3,1,2,4];

// const area =function(radius){
//     return Math.PI * radius * radius//pi r^2
// };

// const circumference = function(radius){
//     return 2 *Math.PI *radius;//2 pi*r
// };

// const diameter = function(radius){
//     return 2*radius;         //2*r
// };
 
// //Array.prototype=this makes this logic availabele in all the arrays we see

// Array.prototype.calculate = function(arr,logic){
// const output =[];
// for (let i = 0; i < arr.length; i++) {
// output.push(logic(arr[i]));
// }
// return output;
// };

// // radius.map(area)//maps whole array with some logic which we pass,t will return us array again
// console.log(radius.map(area));


// console.log(calculate(radius,area));//NOTE :-> This map() and calculate area has got same o/p therefore its same
// console.log(radius.calculate(radius,area));//this is the power we get by using Array.prototype.
// // console.log(calculate(radius,circumference));
// // console.log(calculate(radius,diameter));


// //make generic function
// //gives area of 4 respective circles
/****************** */
/************************************/

const radius =[3,1,2,4];

const area =function(radius){
    return Math.PI * radius * radius//pi r^2
};

const circumference = function(radius){
    return 2 *Math.PI *radius;//2 pi*r
};

const diameter = function(radius){
    return 2*radius;         //2*r
};

Array.prototype.calculate = function(logic){
const output =[];
for (let i = 0; i < this.length; i++) {
output.push(logic(this[i]));
}
return output;
};
console.log(radius.map(area));

//the values of map and calculate are equal(i.e they have got similar values)
console.log(radius.calculate(area));

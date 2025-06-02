// //HIGHER ORDER FUNCTIONS:-->

// function x(){
//     console.log("Nam");
    
// }

// function y(x){//HIGHER ORDER FUNCTION = takes another fxn as an argument
//     x();
// }
/************************************/
//MISTAKES ppl make:-->
const radius =[3,1,2,4];
//ifwe want calculateArea 
const calculateArea= function(radius){
const output =[];
for (let i = 0; i < radius.length; i++) {
output.push(Math.PI * radius[i] * radius[i]);
}
return output;
};

console.log(calculateArea(radius));//gives area of 4 respective circles
/*********************************** */
//if we want calculateCircumference 
const calculateCircumference =function(radius){

const output =[];
for (let i = 0; i < radius.length; i++) {
output.push(2 * Math.PI * radius[i]);
}
return output;
};
console.log(calculateCircumference (radius));
//cal diameter of circle
const calculateDiameter =function(radius){

const output =[];
for (let i = 0; i < radius.length; i++) {
output.push(2 * radius[i]);
}
return output;
};
console.log(calculateDiameter(radius));
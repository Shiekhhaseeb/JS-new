//Conditional statements(if,else,else if)
//if():-->

var myScore =92;
// if (myScore >90) {
//     console.log("Yayhh got my Bicycle");
    
// }
// else{
//     console.log("oops did'nt get it this time!");
    
// }

//else if  ladder:-->
//90-100
//70-89
//50-60
/**
 * let myScore = prompt("Enter your score:");
myScore = Number(myScore); // Convert string to number
 */
var myScore=95;
if (myScore >=90) {
    console.log("Student scored A+ grade");
    
}

else if(myScore >= 70 && myScore <=89){
    console.log(" Student scored B grade");
    
}
else if(myScore >= 50 && myScore <=69){
    console.log(" Student scored C-grade");
    
}
else{
    console.log(" Student scored B-grade");

}
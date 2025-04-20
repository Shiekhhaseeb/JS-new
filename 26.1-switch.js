// switch (expression) {
//     case value1:
//       // Code to execute if expression === value1
//       break;
//     case value2:
//       // Code to e xecute if expression === value2
//       break;
//     // Add as many cases as needed
//     default:
//       // Code to execute if no cases match
//   }
// switch is used becoz it will take more time
/****************************** */
// const month = 3; //key=month
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;

//   default:
//     console.log("default case match");

//     break;
// }
const month = 'march'; //key=month
switch (month) {
  case 'jan':
    console.log("January");
    break;
  case 'feb':
    console.log("Feb");
    break;
  case 'march':
    console.log("March");
    break;
  case 'april':
    console.log("April");
    break;

  default:
    console.log("default case match");

    break;
}
/*Use switch when you’re comparing one variable to multiple specific values.

Use if-else when you need flexibility with conditions.*/

//Nested scope:-->
//child can access parent fxns

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

// one();

/******************** */
if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    console.log(username + website); //hiteshyoutube
  }
  // console.log(website);
}
// console.log(username);
/******************************* */
//impt
console.log(add1(5)); //6,we can call fxn before execution here

function add1(num) {
  return num + 1;
}
add1(5);
console.log(add1(5)); //6
/********/
//other way of fxns,using variables
// Here we can't call fxn before execution here
const add2 = function (num) {
  return num + 2;
};

add2();
console.log(add2(5)); //7

let a = 0;
let b = 1;
let temp;

let num = +(prompt("Enter how many Fibonacci numbers:"));

for (let i = 0; i < num; i++) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
}

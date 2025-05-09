//sum of first 5 natural numbers
function Sum(n){
let sum = 0
    for (let i = 1; i <=n; i++) {
    //return (n*(n+1)/2)
    sum = sum+ i ;
    }
    return sum ;
    // return n*(n+1)/2 ;
}
console.log(Sum(10));

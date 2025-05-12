// function SetUsername(username) {
//     //Complex DB calls
//     this.username=username
// }
// function createUser(username, email, password) {
//     SetUsername(username)

//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai","chai@fb.com","123")
// console.log(chai);

//output-->
//createUser { email: 'chai@fb.com', password: '123' }
/***************** */
function SetUsername(username) {
    //Complex DB calls
    this.username=username
}console.log("called");

function createUser(username, email, password) {
    // SetUsername.call(username)//sirf ref. gaya, call nahi hua
//to hold its ref. we need .call()
//to give our own this,mera samaan ab ap rakhlo
 SetUsername.call(this,username)//current context,agar bahar wala gayab hojayee
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);
//ES6: syntatical sugar


// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

// encryptPassword(){//ye 1 method hai
// return `${this.password}abc`//string return kiya

// }

// }

// const chai =new User("chai","chai@gmail.com","123")
// console.log(chai.encryptPassword());//123abc

/***************************** */
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`; //we can do captilize also
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());
/**************************************** */

//behind the scene:-->

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
};
const tea = new User("tea", "chai@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
//123abc
//TEA


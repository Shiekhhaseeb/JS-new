// class User {
//   constructor(Username) {
//     this.Username = Username;
//   }

//   logMe() {
//     console.log(`Username: ${this.Username}`);
//   }
//   createId() {
//     return `123`;
//   }
// }

// const hitesh = new User("hitesh");
// console.log(hitesh.createId());//123
// console.log(hitesh.logMe());//Username: hitesh

/************************* */
// class User {
//   constructor(Username) {
//     this.Username = Username;
//   }

//   logMe() {
//     console.log(`Username: ${this.Username}`);
//   }
//    static createId() {
//     return `123`;
//   }
// }

// const hitesh = new User("hitesh");
// console.log(hitesh.createId());//error,tells it: this is not for u
// //Don't allow us to access that property 
// //we dont want to give this property to every object which is instantiated from this class,thus we use a keyword c/d "static"
// const Teacher extends User{
//     constructor(username,email){//order do;nt matter here
//         //supre constructor
//         super(username)
// this.email = email
//     }
// }

// const iphone = new Teacher('iphone','i@phone.com')
// iphone.logMe

/********************* */
class User {
  constructor(Username) {
    this.Username = Username;
  }

  logMe() {
    console.log(`Username: ${this.Username}`);
  }
   static createId() {
    return `123`;
  }
}
// Creating a new User object
const hitesh = new User("hitesh");
// console.log(hitesh.createId());
console.log(User.createId());

// Extending the User class
class Teacher extends User{
    constructor(username,email){//order do;nt matter here
        //supre constructor
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','i@phone.com')
iphone.logMe()/*123
Username: iphone */
console.log(iphone.createId());//ye access nahi hoga kynunki its static
 
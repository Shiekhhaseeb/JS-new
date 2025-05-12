class User {
    constructor(username){
        this.username =username
    }
    //method --> logMe :--> gives value of username
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}
class Teacher extends User {
    constructor(username,email,password){
        super(username)//b.t.s, in simple ye khud this add kardega uparwle se
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

//make object from  teacher
const chai = new Teacher("chai","chai@teacher.com","123")

chai.addCourse()
//o/p --> A new course was added by chai
chai.logMe()//USERNAME is chai

const masalaChai = new User("masalaChai")
// masalaChai.addCourse()
masalaChai.logMe()//USERNAME is masalaChai
console.log(chai === masalaChai);//false
console.log(chai === Teacher);//false,ye instance hai chai ka
console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true,as Teacher or User dono instance hai User ke

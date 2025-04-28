//Singleton Object:-
// const tinderUser=new Object()
// console.log(tinderUser);//{} empty object

/**********or************* */
//Non-singleton Object:-
// const tinderUser={}
// console.log(tinderUser);//{} empty object
//************************** */
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
/*********************** */
//objects inside object:-
const regulatUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regulatUser.fullname.userfullname);
//{ firstname: 'hitesh', lastname: 'choudhary' }
console.log(regulatUser.fullname.userfullname.firstname);
// hitesh
console.log(regulatUser.fullname.userfullname.lastname);
// choudhary
/***Optional chaining****** */
console.log(regulatUser.fullname?.userfullname.firstname);//? : used in API's agar ye hai toh kardo avoid if else

//***************************** */
//Combine objects

const obj1={
    1:'a',
    2:'b'
}

const obj2={
    3:'a',
    4:'b'
}
const obj4={
    5:'a',
    6:'b'
}

// const obj3={obj1,obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//This is array wali problem

// const obj3=Object.assign({},obj1,obj2,obj4);//{}=optional value=target,obj=source
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
/**********using operator(mostly used)********************* */
const obj3={...obj1,...obj2}
// console.log(obj3)
/********************* */
//Jab database se values aayengi
const users=[
{
    id:1,
    email:"h@gmail.com"
},
{
    id:1,
    email:"h@gmail.com"
},
{
    id:1,
    email:"h@gmail.com"
},
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//objects ke keys do
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
// [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));//less used
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


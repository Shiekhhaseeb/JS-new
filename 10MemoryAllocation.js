//lecture 10

//stack(primitive) ,Heap(Non-Primitive)
//1.In stack changes occur in the copy only not in the original clue
let myYoutubename='Haseebdotcom'
let anothername=myYoutubename
anothername ='sh7'
console.log(myYoutubename)
console.log(anothername);//value same aayega
//sirf copy me change aayega

/*********************** */
//2.Heap 
let userOne={
email:'userone@google.com',
upi:'user@ybl'
}

let userTwo=userOne

userTwo.email='user2@google.com'
console.log(userOne.email);
console.log(userTwo.email);// same value 
//The original vlaue will change here
// const myArray =['Hello','cat','dog','lion']
// function isLength(string){
//     return string.length===3;

// }
// const ans=myArray.find(isLength)
// console.log(ans);// jiske length 3 hai wo aayega

/*********************** */
// const users=[
//     {userId:1,userName:'harshit'},
//     {userId:2,userName:'harsh'},
//     {userId:3,userName:'nitish'},
//     {userId:4,userName:'mohit'},
//     {userId:5,userName:'aaditya'},

// ]
//  const myUser=users.find((user)=>{
//     return user.userName==='mohit' //it will give full object

//  });
//      console.log(myUser)


/*********************************** */
// const users = [
//     { userId: 1, userName: 'harshit' },
//     { userId: 2, userName: 'harsh' },
//     { userId: 3, userName: 'nitish' },
//     { userId: 4, userName: 'mohit' },
//     { userId: 5, userName: 'aaditya' }
// ];

// const myUser = users.find((user) => {
//     return user.userId === 3;
// });

// console.log(myUser);
/**************************************** */
const users=[
    {userId:1,userName:'harshit'},
    {userId:2,userName:'harsh'},
    {userId:3,userName:'nitish'},
    {userId:4,userName:'mohit'},
    {userId:5,userName:'aaditya'},

]
const myUser=users.find((user)=>{
    return user.userId===3;
})
console.log(myUser);
/**************************************** */
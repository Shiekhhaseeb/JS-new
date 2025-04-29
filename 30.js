// const coding=["js","ruby","java","python","cpp"]

// const values =coding.forEach((item) =>{

//     console.log(item);

// })
// console.log(values);
/**js
ruby
java
python
cpp
undefined */

/******************************** */
// const coding=["js","ruby","java","python","cpp"]

// const values =coding.forEach((item) =>{

//     // console.log(item);
//     return item;
// })
// console.log(values);
/**js
ruby
java
python
cpp
undefined */
//Thus .forEach() does'nt return any value,as its undefined

/**************************************************/
//2. filter(), it will return values unlike forEach()
// here we have to give condition & only those values will b returned which satisfy the condition
// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> num > 4)

// console.log(newNums); //output:--> [ 5, 6, 7, 8, 9, 10 ]
/***** ***********/
// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=>{
//      return num > 4// return is necessary in .filter ootherwise it will return []
// } )

// console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]
//scope use karne ke time return keyword use karna padega
/******************************************* */
/***Doing same using .forEach() */
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

/********************* */
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks =books.filter((bk)=>bk.genre==='History')//each book bk
console.log(userBooks);
/** output:--->[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
] */
/************** */
//books published in >=2000 is ke bad
// userBooks=books.filter((bk) => {return bk.publish >= 2000})//{scope{}} is impt. here to print
//or
// userBooks=books.filter((bk) =>  bk.genre >= 2000)

// console.log(userBooks);
//output:--->
/*[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
] */
/********************************************/
// userBooks=books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre==="History"
// })//{scope{}} is impt. here to print
// //or
// // userBooks=books.filter((bk) =>  bk.genre >= 2000)

// console.log(userBooks);
/****************** */
//2005 se zyada wali books
userBooks=books.filter((bk) => {
    return bk.publish >= 2005
})

console.log(userBooks);

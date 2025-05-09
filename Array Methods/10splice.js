//splice:-
//start ,delete, insert
// const myArray=['item1','item2','item3'];
//delete
// myArray.splice(1,1);
// console.log(myArray);//deletes 'item2'

/******************************************** */
// const myArray=['item1','item2','item3'];
// myArray.slice(1,0,'inserted item')// start from 1,delete 0-index and and insert string'inserted item'
// console.log(myArray);

/***************** */
// const myArray1 = ['item1', 'item2', 'item3'];
// myArray1.splice(1, 0, 'inserted item'); // At index 1, delete 0 items, insert new item
// console.log(myArray1);
/********************************************** */
// const myArray2 = ['item1', 'item2', 'item3'];
// const deletedItem=myArray2.splice(1,1);
// console.log('deleted item :-',deletedItem);
// console.log(myArray2);//prints the final spliced array

/********************************************** */
// const myArray2 = ['item1', 'item2', 'item3'];
// const deletedItem =myArray2.splice(1,2)//delete 1 and 2 index

// console.log('deleted item:-',deletedItem);
// console.log(myArray2);//check the final array
/*************************************************/
//if we wanna delete and insert at the same time
const myArray2 = ['item1', 'item2', 'item3'];
const deletedItem=myArray2.splice(1,2,'inserted item1','inserted item2');//delete 1 and 2 index place these items in place of it
console.log('deleted item :-',deletedItem);
console.log(myArray2);

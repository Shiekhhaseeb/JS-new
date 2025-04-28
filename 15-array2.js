const marvel_heros =["thor","ironman","spiderman"]

const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//array ke andar array kega
//arrays can take any type of data in js
// console.log(marvel_heros[3][1]);//select 'flash'

//concating
//concat returns new array 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//spread operator: like Glass which breakes after falling..
const all_new_heros =[...marvel_heros,...dc_heros]//ab wo array nahi raha ab wo individula value raha
// console.log(all_new_heros);

/*Array inside array**** */
const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
//.flat(depth)
console.log(real_another_array);
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */

  /****************************** */
  //Data selection ke time (from a website it comes in another format) at that time  
  console.log(Array.isArray('HASEEB'));//false ,this is not array
  console.log(Array.from('HASEEB'));//converts any vlaue into array,[ 'H', 'A', 'S', 'E', 'E', 'B' ]
  console.log(Array.from({name:'hitesh'}));//interesting for interview,[]//empty array
  //of
let score1=100;
let score2=200;
let score3=300;

  console.log(Array.of(score1,score2,score3));
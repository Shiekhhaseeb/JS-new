const clock = document.getElementById('clock');
//or
// const clock = document.querySelector('#clock');

// let date = new Date()//date object
// console.log(date.toLocaleTimeString());//method,sirf update par aayega time
//I wanna update it continuously
//i dont want cron job :used in advance not for basics

//use setinterval
// setInterval(function(){},1000)
// setInterval(function(){
//     let date = new Date()
//     console.log(date.toLocaleTimeString());
// },1000)
//ab har second pe values aayengi
//I dont this in console, I want this on webpage
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
//this method is updated at each second
},1000)


/*⏰ Now back to new Date():
When you write:

let date = new Date();
You're creating an object called date.

Inside the date object, there are tools (functions) and facts (properties) like:

📅 What day it is — date.getDate()

🕒 What time it is — date.getHours(), date.getMinutes()

🗓️ What month or year it is — date.getMonth(), date.getFullYear()

You can ask the date object:

console.log(date.getHours());   // Tells you the hour (e.g., 10)
console.log(date.getMinutes()); // Tells you the minute (e.g., 45)
console.log(date.getSeconds()); // Tells you the seconds (e.g., 22)
So yes — new Date() is an object that knows everything about the current date and ti */
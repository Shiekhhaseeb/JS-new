//select elements using get element by id
// console.log(document.getElementById("main-heading"));
/*************** */
//dir.:- doc. ke andar bohot sare object
// console.dir(document.getElementById("main-heading"));
//ye 1 object dega
// console.dir( typeof document.getElementById("main-heading"));
/************************ */
//var me store karo isko
// const mainHeading=document.getElementById("main-heading");
// console.log(mainHeading);

/********************************* */
//select elements using query selector
//isse koi bhi element hum select karsakte hai,for id use "#"
// const mainHeading=document.querySelector("#main-heading");
// console.log(mainHeading);
/************************* */
//Header to select karo:-
// const header=document.querySelector("header");
// console.log(header);
/*********************** */
//rule:- id 1 he select  hoti , but multiple  classes can be selected at a time.
// const navItem = document.querySelector(".nav-item")
// console.log(navItem);//pehle navitem milega,aage check nahi karega
/********************* */
//To select all:
// const navItem = document.querySelectorAll(".nav-item")
// console.log(navItem);//it will give us nodeList,its like Array but not pure array.
/****************** */
//Change text:--> text change kar sakte hai
//change Manage your task

// const mainHeading= document.getElementById("main-heading")
// console.log(mainHeading.textContent);//texxt content dega
//To change it 
// mainHeading.textContent =" This is something else"
// console.log(mainHeading.textContent);
/********************* */
// const mainHeading= document.getElementById("main-heading")
// console.log(mainHeading.textContent);//This will chow us hidden text also
/*************************** */
//innerText:-->
// const mainHeading= document.getElementById("main-heading")
// console.log(mainHeading.innerText);//sirf hidden element nahi dekhayaga console me
/************************** */
//change the style of elements:-->
// const mainHeading = document.querySelector("div.headline h2");
// // console.log(mainHeading);
// //check browers has given some style? :-->
// console.log(mainHeading.style);//style = object here
// mainHeading.style.color = "blue";
// // for - wale 
// mainHeading.style.backgroundColor = "pink";
// mainHeading.style.border = "5px solid green";


/********************************** */
//get and set attributes:-->

// const link = document.querySelector("a")
// // console.log(link);
// console.log(link.getAttribute("href")); //href ka attribute aayega i.e :- #home

// const inputElement =document.querySelector(".form-todo input");
// console.log(inputElement);//input
// console.log(inputElement.getAttribute("type"));//text


/******************* */
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://codprog.com")
// console.log(link.getAttribute("href"));
/***************** */
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));//home,# ke bagair 


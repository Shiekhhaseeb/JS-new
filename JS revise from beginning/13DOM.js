//1.👉 Using getElementById
let heading = document.getElementById("title"); //used to select unique id's,Finds one element by its id only.
heading.innerText = "🎉 DOM Changed Me!";
heading.style.color = "blue";
heading.style.backgroundColor = "pink";

//2.👉 Using querySelector (select by class)
//This only chages first element
//🔷 2. Get the heading and change it:
// let firstMsg = document.querySelector(".msg");
// firstMsg.style.fontSize ="34";
// firstMsg.style.color ="purple";
// firstMsg.style.fontWeight ="bold";
// firstMsg.style.backgroundColor="skyblue";

//To change both paragraphs
//use querySelectorAll

/**🧠 Step 1: Understand the Tools
JavaScript Tool	What it does
querySelector(".msg")	🎯 Gets only the FIRST element with class .msg
querySelectorAll(".msg")	📦 Gets a list (NodeList) of ALL elements with .msg */

/**🧠2. querySelector → 1 item only
 * 
🧠 querySelectorAll → many items (use loop!) */

/*| If you want to style...  | Use this                   | Loop needed? |
| ------------------------ | -------------------------- | ------------ |
| Just 1 element           | `querySelector(".msg")`    | ❌ No         |
| All elements with `.msg` | `querySelectorAll(".msg")` | ✅ Yes        |
*/
// let allMsgs = document.querySelectorAll(".msg");

// allMsgs.forEach((msg) => {
//   msg.style.fontSize = "34px";
//   msg.style.color = "purple";
//   msg.style.fontWeight = "bold";
//   msg.style.backgroundColor = "skyblue";
// });
// //🔷 5. Make the button do something when clicked:
// let button = document.getElementById("btn");
// button.onclick=()=>{
//     alert("Button clicked DOM is FUN")
// };

//🔎 1. innerText:-->
/**✅ What it returns: "Hello"
✅ Why?

    It returns only visible text.

    Hidden elements (display: none) are ignored.

    Think of it as: "What you actually SEE on the screen."

🧠 Kid Analogy:
It’s like reading a note stuck on the fridge — you only see what’s not covered. */
let title = document.getElementById("title");

//innerText : it shows only visible text
console.log("innerText :", title.innerText);
// Output: 🌟 Welcome to DOM Demo

//2.textContent :shows all txt, including hidden
console.log("textContent:",title.textContent);
// Output: 🌟 Welcome to DOM Demo (Secret Message)

// innerHTML: Shows the full HTML inside the element
console.log("innerHTML:", title.innerHTML);  
// Output: 🌟 Welcome to DOM Demo <span style="display: none;"> (Secret Message)</span>

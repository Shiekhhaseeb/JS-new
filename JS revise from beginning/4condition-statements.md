🤔 Why Do We Use if, else if, and else in JavaScript?
Because we want the computer to make decisions.

Just like you make decisions in daily life:

“If it's raining, take an umbrella. Else if it's cloudy, wear a jacket. Else, go in a t-shirt.”

In code, we do the same thing using conditional statements.

🧠 What Are Conditional Statements?
Conditional statements let your code choose what to do, based on certain conditions.

They allow your program to say:

"If something is true, do this."

"Else if something else is true, do that."

"Else (if nothing above is true), do this other thing."

🔧 Syntax in JavaScript

if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition1 is false AND condition2 is true
} else {
  // runs if none of the above conditions are true
}
✅ Simple Example:

let age = 18;

if (age < 13) {
  console.log("You are a child.");
} else if (age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
🧾 Output:

You are a teenager.
🧠 Why Use Them?
Situation	Why Conditional Statements Help
Different actions for different data	Decide what to do based on a value
Game logic	Check if a player won, lost, or paused
Form validation	Show messages if the user entered wrong input
Menu or UI behavior	Show/hide elements based on user choice

🧍 Real-Life Analogy:
Imagine a traffic light:

🔴 If it's red → stop

🟡 Else if it's yellow → slow down

🟢 Else → go

That’s exactly how your program behaves with if, else if, and else.
const buttons = document.querySelectorAll(".button");
console.log(buttons); //gives node list

const body = document.querySelector("body"); //this is not class ,selects first element
//There are many events in browser ...
//event can be taken with fxns
//buttons pe jao or kam karo
buttons.forEach(function (button) {
  //Computer, please show me which button you’re working on now.”
  console.log(button);
  //add event listener in buttons
  //When someone clicks on this button, run the following steps!”
  button.addEventListener("click", function (e) {
    //e=object of event
    //📘 This prints the entire event — which is just fancy computer talk for “Hey, something happened! A button got clicked!
    console.log(e);
    /*Now I’m saying:

“Tell me exactly which button was clicked.”

Imagine the computer pointing to the grey button and saying, “That one!” */
    console.log(e.target); //event aa kaha se raha hai

    // “If the button that was clicked has the ID 'grey'...”
    //👉 “...then change the background color of the whole page to grey.”
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      //hardcode value:-->
      // body.style.backgroundColor ="grey"
    }

    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
        body.style.backgroundColor = e.target.id;
      }
  });
});

/************************** */
// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }

//   });
// });

//innerHTML
/****************** */
// e.g: -->
//       <div class="headline">
//         <h2 id="main-heading">
//           Manage your tasks <span style="display: none">Hello</span>
//         </h2>
//         <button class="btn btn-headline">Learn More</button>
//       </div>
// div ke andar jo hai wo iska innerHTML hai
/****************** */
const headline =document.querySelector(".headline");
// console.log(headline);
headline.innerHTML = "<h1>Inner html changed </h1>";
headline.innerHTML += "<button class=\"btn\">Learn More </button>";
//double "" ke andar "" use nahi karsakhtay.
// \" =  ------->"
console.log(headline.innerHTML);//<h1>Inner html changed </h1>


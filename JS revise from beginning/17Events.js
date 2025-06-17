
//method 2:-->🚀Using HTML Element's onclick Property in JS

// const btn = document.getElementById("myBtn");
// btn.onclick =function(){
//     alert("You clicked Button 2nd Method");
// };
// ✅ JavaScript-only
// ❌ Only allows one event handler at a time — later one overwrites earlier one
/**************************************************/
//🚀Method 3. :--> Using addEventListener() ✅ Best Practice!
const btn = document.getElementById("myBtn");
btn.addEventListener("click",function(){
    alert("Clicked using method3(addEventListener)")
});
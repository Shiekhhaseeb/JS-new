// Basic method using innerHTML
function addLanguage(langName) {
  const li = document.createElement("li");// make a <li> element
  li.innerHTML = `${langName}`; // Not optimal,   // insert text inside it
  document.querySelector(".language").appendChild(li);// add it to the list
}
//You write "Python" directly into it like this: <li>Python</li>
addLanguage("Python");
addLanguage("Typescript");

// ✅ Optimized version (DSA-style thinking: no tree re-parsing)
function addLanguageOptimized(langName) {
  const li = document.createElement("li");

  // ✅ Create text node (instead of innerHTML)
  const text = document.createTextNode(langName);

  // ✅ Append text to li
  li.appendChild(text);

  // ✅ Append li to ul
  document.querySelector(".language").appendChild(li);
}

addLanguageOptimized("C++");
addLanguageOptimized("Rust");

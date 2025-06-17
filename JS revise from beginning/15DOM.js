function updateList() {
  const items = document.querySelectorAll(".msg");

  items[0].innerText = "one";
  items[1].innerText = "two";
  items[2].innerText = "three";
}

function createNewPara(){
    //1.create a new <p> 
    newPara = document.createElement("p")

    //2.isme text add karo
    newPara.innerText = " I am new para!"

    //3. isko add karo body me
    document.body.appendChild(newPara)
      document.body.prepend(newPara);
}
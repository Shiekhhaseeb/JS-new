function updateList() {
  const items = document.querySelectorAll(".msg"); //for class,for more than 1 item use querySelectorAll
  items[0].innerText = "one";
  items[1].innerText = "two";
  items[2].innerText = "three";
}

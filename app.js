const input = document.getElementById("todo-input");
const btn = document.getElementById("add-task");
const list = document.getElementById("todo-list");

input.addEventListener("input", onTypeTodo);

//disabled & enabled button
function onTypeTodo() {
  const inputValue = input.value; // Obținem valoarea câmpului de intrare
  console.log(inputValue);
  console.log(btn.disabled); // cand scriem in input afiseaza ca butonul este disabled in consola
  if (inputValue.trim().length === 0) {
    // Verificăm lungimea valorii
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
  // btn.disabled = input.value.length === 0 ? true : false;
}

//add to to
btn.addEventListener("click", onAddtodo);

function onAddtodo() {
  //se creeaza un element li
  const li = document.createElement("li");
  //adaugam valoarea din input la li
  li.innerHTML = input.value;
  //adaugam elementul la lista
  list.appendChild(li);
  //clear selection in input
  input.value = "";
  //disabled again
  btn.disabled = true;
}

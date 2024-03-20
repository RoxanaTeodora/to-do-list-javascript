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
  //se creeaza un element li prin apelarea functiei createListItem
  const li = createListItem(input.value);
  //se adauga elementul din input  la lista
  list.appendChild(li);
  //se utilizeaza apelarea functiei clearInput pentru a golii imputul
  clearInput();
}

function createListItem(nameTask) {
  //se creeaza un element li
  const li = document.createElement("li");
  //adaugam valoarea din input la li
  li.innerHTML = nameTask;
  //adaugam un buton de stergere
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  //atasam o functie cu evenimentul click deleteTodo pe buton
  deleteButton.addEventListener("click", function (e) {
    deleteTodo(li, e);
  });

  li.appendChild(deleteButton);
  return li;
}

// delete button pt li si evenimentul e
function deleteTodo(li, e) {
  console.log(e.target);
  li.remove();
}

function clearInput() {
  //clear selection in input
  input.value = "";
  //disabled again
  btn.disabled = true;
}

// var todoInput = document.getElementById("todo-input");
// var todoList = document.getElementById("todo-list");
// var addItemsButten = document.getElementById("add-task");

//cerinte
// the add must be enabled when user type in input
// create 2 variabile container and input and button elemets
//add an event listener for input element(try using 'input' event-if doesn't work properly tru using keyup event)
//disabled property will be set to true when input value lenght>0 otherwise

//the user should be able to add a new todo to the list clicking on add
// -event listener -addButton
// -create li element containing hte value from input
//-style the li
//-clear selection from input

// todoInput.addEventListener("click", adaugareProdusLaLista);

// function adaugareProdusLaLista(e) {
//   var inputValue = input.value;
//   console.log(inputValue);
//   var productListItem = document.createElement("li");
//   productListItem.innerHTML = inputValue;
//   console.log(productListItem);
//   productListElement.appendChild(productListItem); //appendChild modificam DOM in mod real
// }

const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-task");
const list = document.getElementById("todo-list");

input.addEventListener("input", onTypeTodo);
addButton.addEventListener("click", onAddTodo);

//functiile care actioneaza la evenimente descrie ce face user-ul
function onTypeTodo() {
  //   console.log(input.value);
  //   console.log(addButton.disabled);//output disable is true
  //disable=false activeaza butonul
  //   addButton.disabled=input.value.length===0;
  addButton.disabled = input.value.trim().length === 0;
  //sau cu operator ternal
  //pt a scapa de spatii se adauga trim
  //   addButton.disabled = input.value.trim().length === 0? true: false;
  //doar schimbam starea butonului
}

function onAddTodo() {
  const li = document.createElement(input.value);
  //   li.textContent = input.value;
  list.appendChild(li);
  //   input.value = "";
  //   addButton.disabled = true; //fortat
  clearInput();
}
//se adauga textul intr-un h2
//textContent echiv lui innerHtml

function createListItem(name) {
  const li = document.createElement("li");
  const title = document.createElement("p");
  title.textContent = name;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.classList.add("detele-button");
  deleteButton.addEventListener("click", onDeleteTodo);

  li.appendChild(title);
  li.appendChild(deleteButton);

  return li;
}
// functia createListItem(name) adauga un element pe care il returneaza cu tot cu nume

function clearInput() {
  input.value = "";
  addButton.disabled = true;
}

function onDeleteTodo() {
  e.target.parent;
}

### TODOLIST

#### HTML & CSS Starte code:

div container
h1 - Todo List
input type text
button - disabled by default
The "Add" must be enabled when the user types in the input

#### JavaScript:

- Disabled & enabled button
  The "Add" button must be enabled when the user types in the input
  if the user clears the input, the button should be disabled again
  create 2 variables containing the input and button elements
  add an event listener for the input element(try using 'input' event - if doesn't work properly try using 'keyup' event )
  disabled property will be set to false when input value lenght > 0 otherwise true
  The user should be able to add a new to do to the list

- Add a new todo to the list
  -The user should be able to add a new todo to the list
  Event listener - addButton
  create li element containing a value from the input
  append li element to list(ul)
  clear selection from input
  The user should be able to delete a todo

- Edit the todo
  the creation of li element must include a button with a image
  an event listener must be added when the button is created
  the li that contains the button must be removed when the delete button is clicked

- Checkbox for todos
  add an input checkbox before the todos
  when the check is clicked the li will be added a line-through text using toggle

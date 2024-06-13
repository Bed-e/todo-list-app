//add a todo

//access the button element
todoBtn = document.getElementById("add-todo");

//define handleAddTodo, runs when button is clicked
function handleAddTodo() {
  const ul = document.querySelector("ul");

  //create an li to go into my ul
  const li = document.createElement("li");

  //access the input element
  const input = document.querySelector("input");
  let text = input.value;
  //set the input text to my li text
  li.textContent = text;

  //append li to ul
  if (text !== "") {
    ul.appendChild(li);
  }

  //
  input.value = "";
}

//add event listener for button
todoBtn.addEventListener("click", handleAddTodo);

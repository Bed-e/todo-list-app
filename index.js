//add a todo

//access the button element
todoBtn = document.getElementById("add-todo");

//define handleAddTodo, runs when button is clicked
function handleAddTodo() {
  const ul = document.querySelector("ul");

  //create an li to go into my ul
  newLi = document.createElement("li");

  //access the input element
  const input = document.querySelector("input");
  text = input.value;
  console.log(text);
  //set the input text to my li text

  //append li to ul
}

//add event listener for button
todoBtn.addEventListener("click", handleAddTodo);

//add a todo

//access the button element
const todoBtn = document.getElementById("add-todo");
const resetBtn = document.getElementById("reset-btn");
const inputField = document.querySelector("input");

//define handleToggleComplete
function handleToggleComplete(event) {
  event.target.classList.toggle("completed");
}

//define handleReset
function handleReset() {
  const completedTodos = document.querySelectorAll(".completed");
  for (let i = completedTodos.length - 1; i >= 0; i--) {
    console.log("completedTodos[" + i + "]= " + completedTodos[i]);
    completedTodos[i].remove();
  }
}

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
  if (text.trim() !== "") {
    ul.appendChild(li);

    //add event listener to toggle completed state
    li.addEventListener("click", handleToggleComplete);
  }

  //clear input
  input.value = "";
}

//add event listener for button
todoBtn.addEventListener("click", handleAddTodo);

resetBtn.addEventListener("click", handleReset);

// Add event listener for 'Enter' key press on input field
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleAddTodo();
  }
});

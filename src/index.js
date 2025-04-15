import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/styles.css";
import { loadCurrentToDoPage } from "./sort";
import { createTodo } from "./todo";

const currentToDoButton = document.querySelector("#current-to-do-btn");

addEventListener("DOMContentLoaded", loadCurrentToDoPage);
currentToDoButton.addEventListener("click", loadCurrentToDoPage);

const todo = createTodo(
	"Buy groceries",
	"Milk, eggs, bread",
	"2025-04-14",
	"High"
);
console.log(todo);

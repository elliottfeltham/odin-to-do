// CSS Imports
import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/styles.css";

// DOM Imports
import {
	currentToDoButton,
	todayButton,
	thisWeekButton,
	thisMonthButton,
} from "./dom";

import {
	loadCurrentToDoPage,
	loadTodayPage,
	loadThisWeekPage,
	loadThisMonthPage,
} from "./sort";

import { createTodo } from "./todo";

// Event Listeners
addEventListener("DOMContentLoaded", loadCurrentToDoPage);
currentToDoButton.addEventListener("click", loadCurrentToDoPage);
todayButton.addEventListener("click", loadTodayPage);
thisWeekButton.addEventListener("click", loadThisWeekPage);
thisMonthButton.addEventListener("click", loadThisMonthPage);

const todo = createTodo(
	"Buy groceries",
	"Milk, eggs, bread",
	"2025-04-14",
	"High"
);
const todoto = createTodo(
	"Get a job",
	"Preferably in Tech",
	"2025-04-27",
	"Medium"
);

console.log(todo);
console.log(todoto);

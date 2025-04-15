import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/styles.css";

import {
	currentToDoButton,
	todayButton,
	thisWeekButton,
	thisMonthButton,
} from "./dom";

import { loadTodayPage, loadThisWeekPage, loadThisMonthPage } from "./sort";

import {
	createTodo,
	toggleCompleted,
	addTodoToProject,
	removeTodoFromProject,
	deleteTodo,
} from "./todo";

import { createProject, getProjects, loadCurrentToDoPage } from "./projects";

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

const testToDo = createTodo(
	"Do a test",
	"See if its working",
	"2025-04-15",
	"Low"
);

// TESTING

const testProject = createProject("testProject");
let projects = getProjects();
console.table(projects);
addTodoToProject(todoto, "testProject");

toggleCompleted(testToDo);
console.table(projects);

console.table(testToDo.getId());
console.table(projects[0].getId());

// removeTodoFromProject(testToDo.getId(), projects[0].getId());
console.table(projects);
deleteTodo(0);
deleteTodo(1);
deleteTodo(2);
console.table(projects);

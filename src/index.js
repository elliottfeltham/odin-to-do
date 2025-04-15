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

import { createTodo, toggleCompleted, addTodoToProject } from "./todo";

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

let projects = getProjects();
console.table(projects);

console.table(todo);
console.table(todoto);
toggleCompleted(todoto);
console.table(todoto);
toggleCompleted(todoto);
console.table(todoto);

addTodoToProject(todo, "Current-To-Do-Do's");
projects = getProjects();
console.table(projects);
addTodoToProject(todoto, "Current-To-Do-Do's");
console.table(projects);

const testProject = createProject("testProject");
console.table(testProject);
addTodoToProject(testToDo, "testProject");
toggleCompleted(testToDo);
console.table(testProject);

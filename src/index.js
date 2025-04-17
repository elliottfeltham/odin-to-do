import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/modal.css";
import "./styles/styles.css";

import { navController, buttonController, modalController } from "./dom";

import { loadTodayPage, loadThisWeekPage, loadThisMonthPage } from "./sort";

import {
	createTodo,
	toggleCompleted,
	addTodoToProject,
	removeTodoFromProject,
	deleteTodo,
	editTodo,
} from "./todo";

import {
	createProject,
	deleteProject,
	editProject,
	getProjects,
	loadAllToDosPage,
	loadSelectedProjectPage,
} from "./projects";

// Event Listeners
addEventListener("DOMContentLoaded", loadAllToDosPage);
navController.allToDosButton.addEventListener("click", loadAllToDosPage);
navController.projectButton.addEventListener("click", () => {
	loadSelectedProjectPage(testProject.getId());
});
navController.todayButton.addEventListener("click", loadTodayPage);
navController.thisWeekButton.addEventListener("click", loadThisWeekPage);
navController.thisMonthButton.addEventListener("click", loadThisMonthPage);

buttonController.addToDoButton.addEventListener("click", () => {
	modalController.addToDoModal.showModal();
});

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

// removeTodoFromProject(testToDo.getId(), projects[0].getId());
// console.table(projects);
// deleteTodo(0);
// deleteTodo(1);
// deleteTodo(2);
// console.table(projects);

// editTodo(
// 	testToDo.getId(),
// 	"Do a test edit",
// 	"See if its really working",
// 	"2025-04-17",
// 	"High"
// );

import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/modal.css";
import "./styles/styles.css";

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

import { initializeEventListeners } from "./events";

initializeEventListeners();
addEventListener("DOMContentLoaded", loadAllToDosPage);

// TESTING

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

export const testProject = createProject("testProject");
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

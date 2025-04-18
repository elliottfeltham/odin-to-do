import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/modal.css";
import "./styles/styles.css";

import { todoController, toggleCompleted } from "./todo";

import { initializeEventListeners } from "./events";

import { projects } from "./projects";
import { renderToDos } from "./render";

initializeEventListeners();
const todo = todoController.createTodo(
	"Buy groceries",
	"Milk, eggs, bread",
	"2025-04-14",
	"High"
);
const tododo = todoController.createTodo(
	"Buy eggs",
	"eggs, eggs, eggs",
	"2025-04-15",
	"Medium"
);
renderToDos(projects[0]);

// TESTING

// const todoto = todoController.createTodo(
// 	"Get a job",
// 	"Preferably in Tech",
// 	"2025-04-27",
// 	"Medium"
// );

// const testToDo = todoController.createTodo(
// 	"Do a test",
// 	"See if its working",
// 	"2025-04-15",
// 	"Low"
// );

// export const testProject = createProject("testProject");
// let projects = getProjects();
// console.table(projects);
// todoController.addTodoToProject(todoto, "testProject");

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

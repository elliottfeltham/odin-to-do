import {
	navController,
	buttonController,
	modalController,
	domController,
} from "./dom";
import { loadTodayPage, loadThisWeekPage, loadThisMonthPage } from "./sort";
import {
	createProject,
	getProjects,
	loadAllToDosPage,
	loadSelectedProjectPage,
	projects,
} from "./projects";
import { createTodo, toggleCompleted, addTodoToDefaultProject } from "./todo";
import {
	renderProjects,
	renderToDoDetails,
	renderToDos,
	resetProjectModal,
	resetToDoModal,
	saveProjectModal,
	saveToDoModal,
} from "./render";

let currentProject = projects[0]; // Manage the state of the currently selected product

export function initializeEventListeners() {
	// Handle initial load
	addEventListener("DOMContentLoaded", loadAllToDosPage);

	// Navigation
	navController.allToDosButton.addEventListener("click", loadAllToDosPage);
	domController.projectsList.addEventListener("click", (event) => {
		const projectButton = event.target.closest(".project-btn");
		if (projectButton) {
			loadSelectedProjectPage(currentProject);
		}
	});
	navController.todayButton.addEventListener("click", loadTodayPage);
	navController.thisWeekButton.addEventListener("click", loadThisWeekPage);
	navController.thisMonthButton.addEventListener("click", loadThisMonthPage);

	// Todo Modal
	buttonController.addToDoButton.addEventListener("click", () => {
		modalController.addToDoModal.showModal();
	});

	modalController.confirmToDoModalButton.addEventListener(
		"click",
		(event) => {
			event.preventDefault();
			const newTodo = createTodo();
			saveToDoModal(newTodo);
			addTodoToDefaultProject(newTodo);
			console.log(newTodo);
			// Add todo to project function call
			renderToDos(currentProject); // Change this to current project when the logic is set up
			modalController.addToDoModal.close();
			resetToDoModal();
		}
	);

	modalController.closeToDoModalButton().addEventListener("click", () => {
		modalController.addToDoModal.close();
	});

	// Project Modal
	buttonController.addProjectButton.addEventListener("click", () => {
		modalController.addProjectModal.showModal();
	});

	modalController.confirmProjectModalButton.addEventListener(
		"click",
		(event) => {
			event.preventDefault();
			const newProject = createProject();
			saveProjectModal(newProject);
			renderProjects();
			modalController.addProjectModal.close();
			resetProjectModal();
		}
	);

	modalController.closeProjectModalButton.addEventListener("click", () => {
		modalController.addProjectModal.close();
	});

	// Display To-Do Details
	domController.contentContainer.addEventListener("click", (event) => {
		if (event.target.closest(".mark-complete-button")) {
			return;
		}
		if (event.target.closest(".to-do-item")) {
			modalController.displayToDoModal.showModal();
			const todoItem = event.target.closest(".to-do-item");
			const todoIndex = todoItem.dataset.indexNumber;
			const todo = currentProject.todos[todoIndex];
			renderToDoDetails(todo);
		}
	});

	modalController.deleteToDoButton.addEventListener("click", (event) => {
		modalController.displayToDoModal.close();
	});

	modalController.closeDisplayToDoButton.addEventListener("click", () => {
		modalController.displayToDoModal.close();
	});

	// Edit To-Do

	// Mark complete function
	domController.contentContainer.addEventListener("click", (event) => {
		if (event.target.closest(".mark-complete-button")) {
			const todoItem = event.target.closest(".to-do-item");

			const todoIndex = todoItem.dataset.indexNumber;
			const todo = currentProject.todos[todoIndex]; // Adjust this to target the correct project
			toggleCompleted(todo);
			domController.todoItemList.innerHTML = "";
			renderToDos(currentProject); // Adjust this to target the current project
		}
	});
}

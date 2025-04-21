import {
	navController,
	buttonController,
	modalController,
	domController,
} from "./dom";
import { loadTodayPage, loadThisWeekPage, loadThisMonthPage } from "./sort";
import {
	getProjects,
	loadAllToDosPage,
	loadSelectedProjectPage,
	projects,
} from "./projects";
import { createTodo, toggleCompleted } from "./todo";
import { renderToDos, saveToDoModal } from "./render";

let currentProject = null; // Manage the state of the currently selected product

export function initializeEventListeners() {
	// Handle initial load
	addEventListener("DOMContentLoaded", loadAllToDosPage);

	// Navigation
	navController.allToDosButton.addEventListener("click", loadAllToDosPage);
	navController.projectButton.addEventListener("click", () => {
		loadSelectedProjectPage(testProject.getId()); // Change this to be dynamic
	});
	navController.todayButton.addEventListener("click", loadTodayPage);
	navController.thisWeekButton.addEventListener("click", loadThisWeekPage);
	navController.thisMonthButton.addEventListener("click", loadThisMonthPage);

	// Modal
	buttonController.addToDoButton.addEventListener("click", () => {
		modalController.addToDoModal.showModal();
	});

	modalController.confirmToDoModalButton.addEventListener("click", () => {
		const newTodo = createTodo();
		saveToDoModal(newTodo);
		// Add todo to project function call
		renderToDos(projects[0]);
		modalController.addToDoModal.close(); // Add save todo form function
	});

	modalController.closeToDoModalButton().addEventListener("click", () => {
		modalController.addToDoModal.close();
	});

	// To-Do-List
	domController.contentContainer.addEventListener("click", (event) => {
		if (event.target.closest(".mark-complete-button")) {
			const todoItem = event.target.closest(".to-do-item");

			const todoIndex = todoItem.dataset.indexNumber;

			const projects = getProjects();
			const todo = projects[0].todos[todoIndex]; // Adjust this to target the correct project
			toggleCompleted(todo);

			domController.todoItemList.innerHTML = "";
			renderToDos(projects[0]); // Adjust this to target the current project
		}
	});
}

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
} from "./projects";
import { toggleCompleted } from "./todo";
import { renderToDos } from "./render";

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

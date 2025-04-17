import { navController, buttonController, modalController } from "./dom";
import { loadTodayPage, loadThisWeekPage, loadThisMonthPage } from "./sort";
import { loadAllToDosPage, loadSelectedProjectPage } from "./projects";
import { testProject } from "."; // Temporary

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
}

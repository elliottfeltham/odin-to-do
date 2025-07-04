export const navController = {
	allToDosButton: document.querySelector("#all-to-dos-btn"),
	projectButton: () => document.querySelector(".project-btn"),
	todayButton: document.querySelector("#today-btn"),
	thisWeekButton: document.querySelector("#this-week-btn"),
	thisMonthButton: document.querySelector("#this-month-btn"),
};

export const buttonController = {
	addToDoButton: document.querySelector(".add-to-do-btn"),
	addProjectButton: document.querySelector(".add-project-btn"),
	markCompleteButton: document.querySelector(".mark-complete-button"),
};

export const modalController = {
	// Add To-Do Modal
	addToDoModal: document.querySelector("#add-to-do-modal"),
	confirmToDoModalButton: document.querySelector("#confirm-add-modal-btn"),
	closeToDoModalButton: () => document.querySelector("#close-add-modal-btn"), // Example of a get function for the DOM, makes it so I only need to change it in one place instead of everywhere it's used if I change the name or structure of the html

	// Add Project Modal
	addProjectModal: document.querySelector("#add-project-modal"),
	confirmProjectModalButton: document.querySelector(
		"#confirm-add-project-btn"
	),
	closeProjectModalButton: document.querySelector("#close-add-project-btn"),

	// Display To-Do Modal
	displayToDoModal: document.querySelector("#display-to-do-modal"),
	displayToDoTitle: document.querySelector("#display-to-do-title"),
	displayToDoDescription: document.querySelector(
		"#display-to-do-description"
	),
	displayToDoDate: document.querySelector("#display-to-do-date"),
	displayToDoPriority: document.querySelector("#display-to-do-priority"),
	closeDisplayToDoButton: document.querySelector("#close-display-to-do-btn"),
	editToDoButton: document.querySelector("#edit-to-do-btn"),
	deleteToDoButton: document.querySelector(".delete-to-do-btn"),

	// Edit To-Do Modal
	editToDoModal: document.querySelector("#edit-to-do-modal"),
	confirmEditModalButton: document.querySelector("#confirm-edit-modal-btn"),
	closeEditModalButton: document.querySelector("#close-edit-modal-btn"),
};

export const formController = {
	// Add To-Do Form
	addToDoTitle: document.querySelector("#add-to-do-title"),
	addToDoDescription: document.querySelector("#add-to-do-description"),
	addToDoDate: document.querySelector("#add-to-do-date"),
	addToDoPriority: document.querySelector("#add-to-do-priority"),
	addProjectName: document.querySelector("#add-project-name"),
	// Edit To-Do Form
	editToDoTitle: document.querySelector("#edit-to-do-title"),
	editToDoDescription: document.querySelector("#edit-to-do-description"),
	editToDoDate: document.querySelector("#edit-to-do-date"),
	editToDoPriority: document.querySelector("#edit-to-do-priority"),
};

export const domController = {
	contentContainer: document.querySelector(".content-container"),
	todoItemList: document.querySelector(".to-do-item-list"),
	projectsList: document.querySelector(".projects-list"),
	toDoItem: document.querySelector(".to-do-item"),
};

export const navController = {
	allToDosButton: document.querySelector("#all-to-dos-btn"),
	projectButton: document.querySelector("#project-btn"),
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
	addToDoModal: document.querySelector("#add-to-do-modal"),
	confirmToDoModalButton: document.querySelector("#confirm-add-modal-btn"),
	closeToDoModalButton: () => document.querySelector("#close-add-modal-btn"), // Example of a get function for the DOM, makes it so I only need to change it in one place instead of everywhere it's used if I change the name or structure of the html
	addProjectModal: document.querySelector("#add-project-modal"),
	confirmProjectModalButton: document.querySelector(
		"#confirm-add-project-btn"
	),
	closeProjectModalButton: document.querySelector("#close-add-project-btn"),
};

export const formController = {
	addToDoTitle: document.querySelector("#add-to-do-title"),
	addToDoDescription: document.querySelector("#add-to-do-description"),
	addToDoDate: document.querySelector("#add-to-do-date"),
	addToDoPriority: document.querySelector("#add-to-do-priority"),
	addProjectName: document.querySelector("#add-project-name"),
};

export const domController = {
	contentContainer: document.querySelector(".content-container"),
	todoItemList: document.querySelector(".to-do-item-list"),
};

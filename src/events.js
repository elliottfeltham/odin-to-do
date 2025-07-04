import {
	navController,
	buttonController,
	modalController,
	domController,
	formController,
} from "./dom";
import { loadTodayPage, loadThisWeekPage, loadThisMonthPage } from "./sort";
import {
	createProject,
	getProjects,
	loadAllToDosPage,
	loadSelectedProjectPage,
	projects,
} from "./projects";
import {
	createTodo,
	editTodo,
	toggleCompleted,
	addTodoToDefaultProject,
	todoController,
} from "./todo";
import {
	renderProjects,
	renderToDoDetails,
	renderToDos,
	resetEditToDoModal,
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

			if (
				!formController.addToDoTitle.value.trim() ||
				!formController.addToDoDescription.value.trim() ||
				!formController.addToDoDate.value.trim()
			) {
				alert(
					"All fields must be filled out before adding a To-Do-Do."
				);
				return;
			}

			const newTodo = createTodo();
			saveToDoModal(newTodo);
			addTodoToDefaultProject(newTodo);
			// Add todo to project function call // addTodoToProject(newTodo, curretnProject)
			renderToDos(currentProject);
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
		const todoItem = event.target.closest(".to-do-item");

		if (!todoItem || event.target.closest(".mark-complete-button")) {
			return;
		}

		const todoId = Number(todoItem.dataset.id);
		const todo = currentProject.todos.find((todo) => todo.id === todoId);

		if (!todo) {
			console.error(`To-Do with ID ${todoId} not found.`);
			return;
		}

		modalController.displayToDoModal.dataset.id = todoId;
		renderToDoDetails(todo);
		modalController.displayToDoModal.showModal();
	});

	modalController.deleteToDoButton.addEventListener("click", () => {
		const todoId = Number(modalController.displayToDoModal.dataset.id);
		todoController.deleteTodo({ id: todoId });
		modalController.displayToDoModal.close();
		renderToDos(currentProject);
	});

	modalController.closeDisplayToDoButton.addEventListener("click", () => {
		modalController.displayToDoModal.close();
	});

	// Edit To-Do
	modalController.editToDoButton.addEventListener("click", () => {
		modalController.editToDoModal.showModal();
	});

	modalController.confirmEditModalButton.addEventListener(
		"click",
		(event) => {
			event.preventDefault();

			if (
				!formController.editToDoTitle.value.trim() ||
				!formController.editToDoDescription.value.trim() ||
				!formController.editToDoDate.value.trim()
			) {
				alert(
					"All fields must be filled out before editing a To-Do-Do."
				);
				return;
			}
			const todoId = Number(modalController.displayToDoModal.dataset.id);
			todoController.editTodo(
				{ id: todoId },
				formController.editToDoTitle.value,
				formController.editToDoDescription.value,
				formController.editToDoDate.value,
				formController.editToDoPriority.value
			);
			modalController.editToDoModal.close();
			modalController.displayToDoModal.close();
			resetEditToDoModal();
			renderToDos(currentProject);
		}
	);

	modalController.closeEditModalButton.addEventListener("click", () => {
		modalController.editToDoModal.close();
	});

	// Mark complete function
	domController.contentContainer.addEventListener("click", (event) => {
		if (event.target.closest(".mark-complete-button")) {
			const todoItem = event.target.closest(".to-do-item");

			const todoIndex = todoItem.dataset.indexNumber;
			const todo = currentProject.todos[todoIndex];
			toggleCompleted(todo);
			domController.todoItemList.innerHTML = "";
			renderToDos(currentProject);
		}
	});
}

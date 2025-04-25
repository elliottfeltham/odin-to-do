import { getProjects } from "./projects";
import { domController, formController, modalController } from "./dom";
import uncheckedIcon from "./assets/check-circle-outline.svg";
import checkedIcon from "./assets/check-circle.svg";

const UNCHECKEDICON = uncheckedIcon;
const CHECKEDICON = checkedIcon;

export function renderToDos({ id: projectId }) {
	const todoItemList = domController.todoItemList;
	todoItemList.innerHTML = "";
	const projects = getProjects();

	const project = projects.find((project) => project.id === projectId);

	project.todos.forEach((todo, index) => {
		const todoItem = document.createElement("li");
		todoItem.classList.add("to-do-item");

		todoItem.dataset.indexNumber = index;

		const img = document.createElement("img");
		img.src = todo.completed ? CHECKEDICON : UNCHECKEDICON;

		const todoTitle = document.createElement("h5");
		todoTitle.textContent = `${todo.title}`;

		const todoDate = document.createElement("h6");
		todoDate.textContent = `${todo.date}`;

		const markCompleteButton = document.createElement("button");
		markCompleteButton.classList.add("mark-complete-button");

		markCompleteButton.append(img);
		todoItem.append(markCompleteButton, todoTitle, todoDate);
		todoItemList.append(todoItem);
	});
}

export function renderProjects() {
	const projects = getProjects();
	const projectList = domController.projectsList;
	projectList.innerHTML = "";

	projects.forEach((project, index) => {
		const projectItem = document.createElement("li");
		projectItem.dataset.indexNumber = index;

		const projectButton = document.createElement("button");
		projectButton.classList.add("project-btn");
		projectButton.textContent = `${project.name}`;

		projectItem.append(projectButton);
		projectList.append(projectItem);
	});
}

export function renderToDoDetails(todo) {
	const todoTitle = todo.title;
	const todoDescription = todo.description;
	const todoDate = todo.date;
	const todoPriority = todo.priority;

	const displayToDoTitle = modalController.displayToDoTitle;
	const displayToDoDescription = modalController.displayToDoDescription;
	const displayToDoDate = modalController.displayToDoDate;
	const displayToDoPriority = modalController.displayToDoPriority;

	displayToDoTitle.textContent = "";
	displayToDoDescription.textContent = "";
	displayToDoDate.textContent = "";
	displayToDoPriority.textContent = "";

	displayToDoTitle.append(todoTitle);
	displayToDoDescription.append(todoDescription);
	displayToDoDate.append(todoDate);
	displayToDoPriority.append(todoPriority);
}

export function saveToDoModal(todo) {
	todo.title = formController.addToDoTitle.value;
	todo.description = formController.addToDoDescription.value;
	todo.date = formController.addToDoDate.value;
	todo.priority = formController.addToDoPriority.value;
}

export function saveProjectModal(project) {
	project.name = formController.addProjectName.value;
}

export function resetToDoModal() {
	formController.addToDoTitle.value = "";
	formController.addToDoDescription.value = "";
	formController.addToDoDate.value = "";
	formController.addToDoPriority.value = "";
}

export function resetProjectModal() {
	formController.addProjectName.value = "";
}

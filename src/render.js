import { getProjects } from "./projects";
import { domController } from "./dom";
import uncheckedIcon from "./assets/check-circle-outline.svg";
import checkedIcon from "./assets/check-circle.svg";

const UNCHECKEDICON = uncheckedIcon;
const CHECKEDICON = checkedIcon;

export function renderToDos({ id: projectId }) {
	const projects = getProjects();

	const project = projects.find((project) => project.id === projectId);

	project.todos.forEach((todo, index) => {
		const todoItem = document.createElement("div");
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
		domController.todoItemList.append(todoItem);
	});
}

// saveToDoModal()

//

import { getProjects } from "./projects";
import { getId, getUniqueId } from "./utils";

export function createTodo(title, description, dueDate, priority) {
	const todo = {
		id: getUniqueId(),
		title,
		description,
		dueDate,
		priority,
		completed: false,
		getId,
	};
	addTodoToDefaultProject(todo);
	return todo;
}

export function toggleCompleted(todo) {
	todo.completed = !todo.completed;
}

export function addTodoToProject(todo, projectName) {
	const project = getProjects().find(
		(project) => project.name === projectName
	);
	if (project) {
		project.todos.push(todo);
	} else {
		console.log("Project not found");
	}
}

export function addTodoToDefaultProject(todo) {
	const defaultProject = getProjects().find(
		(project) => project.name === "Current-To-Do-Do's"
	);
	if (defaultProject) {
		defaultProject.todos.push(todo);
	} else {
		console.log("Project not found");
	}
}

import { getProjects } from "./projects";
import { getId, getUniqueId } from "./utils";

// Factory function
export function createTodo(title, description, dueDate, priority) {
	return {
		id: getUniqueId(),
		title,
		description,
		dueDate,
		priority,
		completed: false,
		getId,
	};
}

// Separate behavior
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

import { getProjects } from "./projects";
import { getId, getUniqueId } from "./utils";

export function createTodo(title, description, date, priority) {
	const todo = {
		id: getUniqueId(),
		title,
		description,
		date,
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
		(project) => project.name === "All To-Do-Do's"
	);
	if (defaultProject) {
		defaultProject.todos.push(todo);
	} else {
		console.log("Project not found");
	}
}

export function deleteTodo(todoId) {
	const projects = getProjects();

	projects.forEach((project) => {
		const todoIndex = project.todos.findIndex((todo) => todo.id === todoId);

		if (todoIndex !== -1) {
			project.todos.splice(todoIndex, 1);
		}
	});
}

export function removeTodoFromProject(todoId, projectId) {
	const projects = getProjects();
	const project = projects.find((project) => project.id === projectId);

	if (!project) {
		console.log("Project not found");
		return false;
	}

	const todoIndex = project.todos.findIndex((todo) => todo.id === todoId);

	if (todoIndex === -1) {
		console.log("No todo at this index");
		return false;
	}
	project.todos.splice(todoIndex, 1);
}

export function editTodo(
	todoId,
	newTitle,
	newDescription,
	newDate,
	newPriority
) {
	const projects = getProjects();

	projects.forEach((project) => {
		const todo = project.todos.find((todo) => todo.id === todoId);

		if (todo) {
			todo.title = newTitle;
			todo.description = newDescription;
			todo.dueDate = newDate;
			todo.priority = newPriority;
		}
	});
}

// Add functions to the controller object
export const todoController = {
	createTodo,
	toggleCompleted,
	addTodoToProject,
	addTodoToDefaultProject,
	deleteTodo,
	removeTodoFromProject,
	editTodo,
};

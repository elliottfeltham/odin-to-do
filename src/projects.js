import { getId, getUniqueProjectId } from "./utils";

const projects = [
	{
		id: getUniqueProjectId(),
		name: "Current-To-Do-Do's",
		todos: [],
		getId,
	},
];

export function createProject(name) {
	const newProject = {
		id: getUniqueProjectId(),
		name,
		todos: [],
		getId,
	};
	projects.push(newProject);
	return newProject;
}

export function getProjects() {
	return projects;
}

// Delete project function

// Loads default project
export function loadCurrentToDoPage() {
	const header = document.querySelector(".content-header");
	header.textContent = "Current-To-Do-Do's";
}

// Load selected project

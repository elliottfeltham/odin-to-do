import { getId, getUniqueProjectId } from "./utils";

export const projects = [
	{
		id: getUniqueProjectId(),
		name: "All To-Do-Do's",
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

export function deleteProject({ id: projectId }) {
	const projects = getProjects();

	const defaultProject = projects.find(
		(project) => project.name === "All To-Do-Do's"
	);

	if (!defaultProject) {
		console.error("Default project not found.");
		return;
	}

	if (projectId === defaultProject.id) {
		console.log("Cannot delete default project");
		return;
	}
	const projectIndex = projects.findIndex(
		(project) => project.id === projectId
	);

	if (projectIndex !== -1) {
		projects.splice(projectIndex, 1);
		console.log(`Project at ${projectIndex} deleted`);
	} else {
		console.log("Couldn't find project index");
	}
}

// Edit project name function

export function editProject({ id: projectId }, newName) {
	const projects = getProjects();
	const project = projects.find((project) => project.id === projectId);
	project.name = newName;
}

// Loads default project
export function loadAllToDosPage() {
	const header = document.querySelector(".content-header");
	header.textContent = "All To-Do-Do's";
}

// Load selected project

export function loadSelectedProjectPage({ id: projectId }) {
	const projects = getProjects();
	const selectedProject = projects.find(
		(project) => project.id === projectId
	);
	const header = document.querySelector(".content-header");
	header.textContent = selectedProject.name;
	// renderToDo function
}

export const projectController = {
	createProject,
	getProjects,
	deleteProject,
	editProject,
	loadAllToDosPage,
	loadSelectedProjectPage,
};

let id = 0;
let projectId = 0;

export function addUniqueId() {
	return id++ + "";
}

export function addUniqueProjectId() {
	return projectId++ + "";
}

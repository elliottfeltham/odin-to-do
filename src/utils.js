let id = 0;
let projectId = 0;

export function getUniqueId() {
	return id++ + "";
}

export function getUniqueProjectId() {
	return projectId++ + "";
}

export function getId() {
	return this.id;
}

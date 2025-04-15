export function loadCurrentToDoPage() {
	const header = document.querySelector(".content-header");
	header.textContent = "Current-To-Do-Do's";
}

export function loadTodayPage() {
	const header = document.querySelector(".content-header");
	header.textContent = "Today";
}

export function loadThisWeekPage() {
	const header = document.querySelector(".content-header");
	header.textContent = "This Week";
}

export function loadThisMonthPage() {
	const header = document.querySelector(".content-header");
	header.textContent = "This Month";
}

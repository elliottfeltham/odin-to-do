import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/styles.css";

const button = document.querySelector("#current-to-do-btn");

button.addEventListener("click", loadCurrentToDoPage);

function loadCurrentToDoPage() {
	const header = document.querySelector(".content-header");
	header.textContent = "Current-To-Do-Do's";
}

// todo factory function
function createTodo(title, description, dueDate, priority) {
	return {
		title,
		description,
		dueDate,
		priority,
	};
}

const todo = createTodo(
	"Buy groceries",
	"Milk, eggs, bread",
	"2025-04-14",
	"High"
);
console.log(todo);

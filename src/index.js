import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/modal.css";
import "./styles/styles.css";

import { initializeEventListeners } from "./events";
import { projects } from "./projects";
import { renderToDos } from "./render";

initializeEventListeners();

renderToDos(projects[0]);

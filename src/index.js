import "./reset.css";
import "./styles.css";

const container = document.querySelector("body");
const text = document.createElement("p");
text.classList.add("centered");
text.innerText = "Hello World!";

container.append(text);

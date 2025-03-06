const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  span.textContent = event.target.value;
  if (event.target.value.trim() === "") {
    span.textContent = "Anonymous";
  }
}

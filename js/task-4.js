const form = document.querySelector(".login-form");
const input = document.querySelector(".login-input");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value.trim() === "" ||
    event.target.elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
  }
  console.log({
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  });

  form.reset();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(".container-input");
const btnCreate = document.querySelector(".button-create");
const btnDestroy = document.querySelector(".button-destroy");
const container = document.querySelector("#boxes");

btnCreate.addEventListener("click", handleClickCreate);
btnDestroy.addEventListener("click", destroyBoxes);

function handleClickCreate() {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    alert("Введіть число від 1 до 100!");
    return;
  }
  createBoxes(amount);
  input.value = "";
}

function createBoxes(amount) {
  container.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const containerBox = document.createElement("div");
    containerBox.classList.add("container-box");
    const size = 30 + (i - 1) * 10;
    containerBox.style.width = `${size}px`;
    containerBox.style.height = `${size}px`;
    containerBox.style.backgroundColor = getRandomHexColor();
    container.append(containerBox);
  }
}

function destroyBoxes() {
  container.innerHTML = "";
  input.value = "";
}

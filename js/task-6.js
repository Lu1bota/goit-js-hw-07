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

// function handleClickCreate(event) {
//   const containerBox = document.createElement("div");
//   containerBox.classList.add("container-box");
//   containerBox.style.backgroundColor = getRandomHexColor();
//   containerBox.style.minWidth = "30px";
//   containerBox.style.minHeight = "30px";
//   // container.append(containerBox);

//   function createBoxes(amount) {
//     amount = input.value;
//   }
//   if (input.value >= 1 && input.value <= 100) {
//     for (let i = 1; i <= input.value; i++) {
//       containerBox.style.minWidth = `${30 + (i - 1) * 10}px`;
//       containerBox.style.minHeight = `${30 + (i - 1) * 10}px`;
//       // container.insertAdjacentHTML("beforeend", containerBox);
//       container.append(containerBox);
//     }
//     // container.append(containerBox);
//     // container.insertAdjacentHTML("beforeend", containerBox);
//   }
// }

function handleClickCreate(event) {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    alert("Введіть число від 1 до 100!");
    return;
  }
  createBoxes(amount);
  input.reset();
}

function createBoxes(amount) {
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

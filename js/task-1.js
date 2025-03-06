const list = document.querySelectorAll("#categories");
const item = document.querySelectorAll(".item");
const titles = document.querySelectorAll("h2");
const categoriesList = document.querySelectorAll("li>ul");
const categoriesListItem = document.querySelectorAll("#categories li");

titles.forEach((title) => {
  title.classList.add("item-title");
});

categoriesList.forEach((list) => {
  list.classList.add("categories-list");
});

categoriesListItem.forEach((item) => {
  if (!item.classList.length) {
    item.classList.add("categories-list-item");
  }
});

console.log(`Number of categories: ${item.length}`);

item.forEach((event) => {
  console.log(`Categories: ${event.querySelector("h2").textContent}`);
  console.log(`Elements: ${event.querySelectorAll("li").length}`);
});

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";

  for (const categorie of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button class="btn btn-soft btn-success w-[220px] text-black hover:text-white justify-start">${categorie.category_name}</button>
    `;

    categoriesContainer.append(btnDiv);
  }
};
loadCategories();

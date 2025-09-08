const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};

const activeRemove = () => {
  const otherTreeBtn = document.querySelectorAll(".other-tree-btn");
  otherTreeBtn.forEach(btn => btn.classList.remove("active"))
};

const loadIdWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      activeRemove();
      const clickBtn = document.getElementById(`tree-btn-${id}`);
      clickBtn.classList.add("active");
      displayIdWord(json.plants);
    });
};

const displayIdWord = (words) => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  for (const word of words) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <div class="w-90 bg-white shadow-lg p-4 rounded-xl">
          <div class="w-full h-60">
            <img
              src="${word.image}"
              alt="Mango"
              class="w-full h-full object-cover object-center rounded-lg"
            />
          </div>

          <h2 class="font-bold text-lg mt-3 mb-2">${word.name}</h2>
          <p class="text-[#1f2937] text-justify">
            ${word.description}
          </p>
          <div class="flex justify-between items-center mt-2">
            <span
              class="btn text-[#15803d] bg-[#facc15] rounded-3xl px-5 font-semibold border-none hover:bg-[#fcd435] hover:scale-105 transition transform duration-300"
              >${word.category}</span
            >
            <p class="font-bold">৳<span>${word.price}</span></p>
          </div>
          <button class="btn mt-4 w-full text-white bg-[#15803d] hover:bg-[#27af59] border-none rounded-3xl">Success</button>
        </div>
    `;

    cartContainer.append(btnDiv);
  }
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";

  for (const categorie of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button id="tree-btn-${categorie.id}" onclick="loadIdWord(${categorie.id})" class="btn btn-soft btn-success w-[220px] text-black hover:text-white justify-start other-tree-btn">${categorie.category_name}</button>
    `;

    categoriesContainer.append(btnDiv);
  }
};

loadCategories();

const loadCart = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayCart(json.plants));
};

const displayCart = (carts) => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  for (const cart of carts) {
    const cartDiv = document.createElement("div");
    cartDiv.innerHTML = `
    <div class="w-90 bg-white shadow-lg p-4 rounded-xl">
          <div class="w-full h-60">
            <img
              src="${cart.image}"
              alt="Mango"
              class="w-full h-full object-cover object-center rounded-lg"
            />
          </div>

          <h2 class="font-bold text-lg mt-3 mb-2">${cart.name}</h2>
          <p class="text-[#1f2937] text-justify">
            ${cart.description}
          </p>
          <div class="flex justify-between items-center mt-2">
            <span
              class="btn text-[#15803d] bg-[#facc15] rounded-3xl px-5 font-semibold border-none hover:bg-[#fcd435] hover:scale-105 transition transform duration-300"
              >${cart.category}</span
            >
            <p class="font-bold">৳<span>${cart.price}</span></p>
          </div>
          <button class="btn mt-4 w-full text-white bg-[#15803d] hover:bg-[#27af59] border-none rounded-3xl">Success</button>
        </div>
    `;

    cartContainer.append(cartDiv);
  }
};

loadCart();

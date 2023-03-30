function filterNewsCards() {
  const searchInput = document.querySelector("#blogs-search");
  const newsCards = document.querySelectorAll(".blogs-modify .news-card");
  const paginationContainer = document.querySelector(".blog-pagination");

  searchInput.addEventListener("input", (event) => {
      const searchText = event.target.value.toLowerCase();
      const filteredCards = [];

      newsCards.forEach((card) => {
          const cardTitle = card.querySelector("h3").textContent.toLowerCase();
          const cardContent = card.querySelector("p").textContent.toLowerCase();

          if (cardTitle.includes(searchText) || cardContent.includes(searchText)) {
              card.style.display = "grid";
              filteredCards.push(card);
          } else {
              card.style.display = "none";
          }
      });

      paginateNewsCards(filteredCards, paginationContainer);
  });

  paginateNewsCards(newsCards, paginationContainer);
}

function paginateNewsCards(cards, paginationContainer) {
  const cardsPerPage = 7;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  function showPage(pageNumber) {
      const startIndex = (pageNumber - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;

      for (let i = 0; i < cards.length; i++) {
          if (i >= startIndex && i < endIndex) {
              cards[i].style.display = "grid";
          } else {
              cards[i].style.display = "none";
          }
      }

      // Add "active" class to the active page button
      const buttons = paginationContainer.querySelectorAll("button");
      buttons.forEach((button) => {
          if (Number(button.textContent) === pageNumber) {
              button.classList.add("active");
          } else {
              button.classList.remove("active");
          }
      });
  }

  function createPaginationButtons() {
      for (let i = 1; i <= totalPages; i++) {
          const button = document.createElement("button");
          button.textContent = i;
          button.addEventListener("click", () => showPage(i));
          paginationContainer.appendChild(button);
      }
  }

  function addFirstAndLastPageButtons() {
      const firstPageButton = document.createElement("button");
      firstPageButton.textContent = "<<";
      firstPageButton.addEventListener("click", () => showPage(1));
      paginationContainer.insertBefore(firstPageButton, paginationContainer.firstChild);

      const lastPageButton = document.createElement("button");
      lastPageButton.textContent = ">>";
      lastPageButton.addEventListener("click", () => showPage(totalPages));
      paginationContainer.appendChild(lastPageButton);
  }

  showPage(1);
  paginationContainer.innerHTML = ""; // clear existing buttons
  createPaginationButtons();
  addFirstAndLastPageButtons();

  // Make the first page button active by default
  const buttons = paginationContainer.querySelectorAll("button");
  buttons[1].classList.add("active");
}

filterNewsCards();

const blogsForm = document.querySelector(".blogs-form-container form");
blogsForm.addEventListener("submit", (event) =>{
  event.preventDefault()
})
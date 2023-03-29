function paginateNewsCards(filteredNewsCards) {
    const cardsPerPage = 7;
    const paginationContainer = document.querySelector(".blog-pagination");
    const totalPages = Math.ceil(filteredNewsCards.length / cardsPerPage);

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        for (let i = 0; i < filteredNewsCards.length; i++) {
            if (i >= startIndex && i < endIndex) {
                filteredNewsCards[i].style.display = "grid";
            } else {
                filteredNewsCards[i].style.display = "none";
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
    createPaginationButtons();
    addFirstAndLastPageButtons();

    // Make the first page button active by default
    const buttons = paginationContainer.querySelectorAll("button");
    buttons[1].classList.add("active");
}


function filterNewsCards() {
    const searchInput = document.querySelector("#blogs-search");
    const newsCards = document.querySelectorAll(".blogs-modify .news-card");
    const paginationContainer = document.querySelector(".blog-pagination");

    searchInput.addEventListener("input", (event) => {
        const searchText = event.target.value.toLowerCase();

        const filteredNewsCards = Array.from(newsCards).filter((card) => {
            const cardTitle = card.querySelector("h3").textContent.toLowerCase();
            const cardContent = card.querySelector("p").textContent.toLowerCase();

            return cardTitle.includes(searchText) || cardContent.includes(searchText);
        });

        // Clear existing pagination buttons
        paginationContainer.innerHTML = "";

        // Only create pagination buttons based on filtered news cards
        paginateNewsCards(filteredNewsCards);
    });
}

filterNewsCards();


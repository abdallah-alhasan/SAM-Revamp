const tenantsContainer = document.querySelector(".tenants-container");
const selectListing = document.querySelector(".select-listing");
const paginationContainer = document.querySelector(".pagination-container");

let tenants = Array.from(document.querySelectorAll(".single-tenant"));

function filterTenants() {
    const selectedListing = selectListing.value;
    const filteredTenants = tenants.filter(
        (tenant) =>
            selectedListing === "all" || tenant.dataset.listing === selectedListing
    );

    return filteredTenants;
}

function displayTenants(pageNumber) {
    const tenantsPerPage = 10;
    const tenantsToDisplay = filterTenants().slice(
        (pageNumber - 1) * tenantsPerPage,
        pageNumber * tenantsPerPage
    );

    tenantsContainer.innerHTML = "";
    tenantsToDisplay.forEach((tenant) => {
        tenantsContainer.appendChild(tenant);
    });

    displayPagination(filterTenants().length, pageNumber);
}

function displayPagination(totalTenants, currentPage) {
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(totalTenants / 10);

    const firstPage = Math.max(1, currentPage - 2);
    const lastPage = Math.min(totalPages, currentPage + 2);

    if (currentPage > 3) {
        addPaginationButton(1, "<<");
    }

    if (currentPage > 1) {
        addPaginationButton(currentPage - 1, "<");
    }

    for (let i = firstPage; i <= lastPage; i++) {
        const page = document.createElement("button");
        page.innerHTML = i;

        if (i === currentPage) {
            page.classList.add("active");
        }

        page.addEventListener("click", function () {
            displayTenants(i);
        });

        paginationContainer.appendChild(page);
    }

    if (lastPage < totalPages - 1) {
        const dots = document.createElement("button");
        dots.innerHTML = "...";
        dots.disabled = true;
        paginationContainer.appendChild(dots);
    }

    if (currentPage < totalPages) {
        addPaginationButton(currentPage + 1, ">");
    }

    if (currentPage < totalPages - 2) {
        addPaginationButton(totalPages, ">>");
    }
}

function addPaginationButton(pageNumber, buttonText) {
    const button = document.createElement("button");
    button.innerHTML = buttonText;
    button.addEventListener("click", function () {
        displayTenants(pageNumber);
    });
    paginationContainer.appendChild(button);
}

selectListing.addEventListener("change", function () {
    displayTenants(1);
});

displayTenants(1);

const cardContainer = document.querySelector(".card-container");
const cards = Array.from(document.getElementsByClassName("card"));
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageNumbers = document.getElementById("page-numbers");

const cardsPerPage = 4;
let currentPage = 1;
let totalPage = Math.ceil(cards.length / cardsPerPage);

for (let i = 0; i < totalPage; i++) {
  const createElement = document.createElement("a");
  createElement.setAttribute("href", "javascript:void(0);");
  createElement.classList.add("page-link");
  if (i == 0) {
    createElement.classList.add("active");
  }
  createElement.textContent = i + 1;
  document.getElementById("page-counters").appendChild(createElement);
}

let pageLinks = document.querySelectorAll(".page-link");
let cardContainerWidth = cardContainer.getBoundingClientRect().width;

function changePage() {
  displayPage = currentPage - 1;
  cardContainer.style.transform =
    "translateX(calc(-" + cardContainerWidth + "px * " + displayPage + "))";
}
changePage();

window.addEventListener(
  "resize",
  function (e) {
    e.preventDefault();
    cardContainerWidth = cardContainer.getBoundingClientRect().width;
    changePage();
  },
  true
);

function updatePagination() {
  pageNumbers.textContent = `page ${currentPage} of ${totalPage}`;
  currentPage == 1
    ? prevButton.setAttribute("disabled", "")
    : prevButton.removeAttribute("disabled");
  currentPage == totalPage
    ? nextButton.setAttribute("disabled", "")
    : nextButton.removeAttribute("disabled");
  pageLinks.forEach((pageLink) => {
    const page = parseInt(pageLink.textContent);
    if (page == currentPage) pageLink.classList.add("active");
    else pageLink.classList.remove("active");
  });
}
updatePagination();

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    changePage();
    updatePagination();
    btnDisabled();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPage) {
    currentPage++;
    changePage();
    updatePagination();
    btnDisabled();
  }
});

pageLinks.forEach((pageLink) => {
  pageLink.addEventListener("click", () => {
    currentPage = pageLink.textContent;
    changePage();
    updatePagination();
    btnDisabled();
  });
});

function btnDisabled() {
  if (currentPage == totalPage) {
    nextButton.style.pointerEvents = "none";
    nextButton.style.opacity = "50%";
  } else {
    nextButton.style.pointerEvents = "";
    nextButton.style.opacity = "";
  }
  if (currentPage == 1) {
    prevButton.style.pointerEvents = "none";
    prevButton.style.opacity = "50%";
  } else {
    prevButton.style.pointerEvents = "";
    prevButton.style.opacity = "";
  }
}
btnDisabled();

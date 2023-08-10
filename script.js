const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.getElementById("menu");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

// const leftButton = document.getElementById("left-button");
// const rightButton = document.getElementById("right-button");
// const cards = document.querySelectorAll(".card");

// // Initial display
// showCards(0, 2); // Show cards 1, 2, 3 initially

// // Button event listeners
// leftButton.addEventListener("click", showPreviousCards);
// rightButton.addEventListener("click", showNextCards);

// function showCards(startIndex, endIndex) {
//   for (let i = 0; i < cards.length; i++) {
//     if (i >= startIndex && i <= endIndex) {
//       cards[i].classList.add("visible");
//     } else {
//       cards[i].classList.remove("visible");
//     }
//   }
// }

// function showNextCards() {
//   const visibleCard = document.querySelector(".card.visible");
//   const nextIndex = parseInt(visibleCard.classList[1].split("-")[1]) + 1;

//   if (nextIndex < cards.length) {
//     const startIndex = nextIndex - 1;
//     const endIndex = nextIndex + 1;
//     showCards(startIndex, endIndex);
//   }
// }

// function showPreviousCards() {
//   const visibleCard = document.querySelector(".card.visible");
//   const prevIndex = parseInt(visibleCard.classList[1].split("-")[1]) - 1;

//   if (prevIndex >= 0) {
//     const startIndex = prevIndex - 1;
//     const endIndex = prevIndex + 1;
//     showCards(startIndex, endIndex);
//   }
// }

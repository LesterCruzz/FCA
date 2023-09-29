const accordions = document.querySelectorAll(".accordion");

// accordions.addEventListener("click", () => {
//     accordions.classList.toggle("open");
//     content.classList.toggle("open");
// });

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.nextElementSibling.classList.toggle("open");
    accordion.querySelector("i").classList.toggle("open");
  });
});

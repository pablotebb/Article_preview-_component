// VARIABLES
const shareImg = document.querySelector(".section_presentation__img");
const socialNetworks = document.querySelector(
  ".section_presentation-social-networks"
);
const button = document.querySelector(".section_presentation__img");

socialNetworks.classList.toggle("hidden");

// EVENT CLICK
shareImg.addEventListener("click", () => {
  socialNetworks.classList.toggle("show");
  socialNetworks.classList.toggle("hidden");
  button.classList.toggle("show_2");
});

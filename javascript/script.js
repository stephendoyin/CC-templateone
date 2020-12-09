ScrollReveal().reveal(".scale-up", {
  delay: 375,
  duration: 500,
  scale: 0.55,
  origin: "top",
});
ScrollReveal().reveal(".slide-in-left", {
  delay: 375,
  duration: 1000,
  distance: "40px",
  origin: "left",
});
ScrollReveal().reveal(".slide-in-up", {
  delay: 375,
  duration: 1000,
  distance: "40px",
  origin: "bottom",
});
ScrollReveal().reveal(".slide-in-up--later", {
  delay: 375,
  duration: 1300,
  distance: "40px",
  origin: "bottom",
});
ScrollReveal().reveal(".slide-in-up--latest", {
  delay: 375,
  duration: 1600,
  distance: "40px",
  origin: "bottom",
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

const slides = document.querySelectorAll(".slide");
let numberOfSlides = slides.length;
let displayType = slides[0] ? slides[0].style.display : "block";

const next = document.querySelector(".btn-next");
const previous = document.querySelector(".btn-previous");

display();

const btnSelect = document.querySelectorAll(".btn-select");
btnSelect.forEach((select) => {
  select.addEventListener("click", () => {
    const active = document.querySelector(".active");
    const selectedSlideNumber = Number(select.id.slice(-1));
    const selectedSlide = document.getElementById(
      "slide-" + selectedSlideNumber
    );
    selectedSlide.classList.toggle("active");
    active.classList.toggle("active");
    display();
  });
});

next.addEventListener("click", () => {
  const active = document.querySelector(".active");
  const activeSlideNumber = Number(active.id.slice(-1));
  const nextSlideNumber =
    activeSlideNumber + 1 > numberOfSlides ? 1 : activeSlideNumber + 1;
  const nextSlide = document.getElementById("slide-" + nextSlideNumber);
  //   console.log(nextSlide);
  nextSlide.classList.toggle("active");
  active.classList.toggle("active");
  display();
});

previous.addEventListener("click", () => {
  const active = document.querySelector(".active");
  const activeSlideNumber = Number(active.id.slice(-1));
  const previousSlideNumber =
    activeSlideNumber - 1 === 0 ? numberOfSlides : activeSlideNumber - 1;
  const previousSlide = document.getElementById("slide-" + previousSlideNumber);
  previousSlide.classList.toggle("active");
  active.classList.toggle("active");
  display();
});

function display() {
  slides.forEach((slide) => {
    if (!slide.classList.contains("active")) {
      slide.style.display = "none";
    } else {
      slide.style.display = displayType;
    }
  });
}

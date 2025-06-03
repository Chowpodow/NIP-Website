document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;
  let interval;

  function showSlide(i) {
    slides.forEach((slide, j) => {
      slide.classList.remove("visible");
    });
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("visible");
    dots[i].classList.add("active");
    index = i;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 8000); // 8 seconds
  }

  prevBtn.addEventListener("click", () => {
    clearInterval(interval);
    prevSlide();
    startAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    clearInterval(interval);
    nextSlide();
    startAutoSlide();
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      showSlide(parseInt(dot.dataset.index));
      startAutoSlide();
    });
  });

  showSlide(index);
  startAutoSlide();
});

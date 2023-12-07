const sliderImagesWrp = document.querySelectorAll(".slider__image-wrapper"),
  sliderLine = document.querySelector(".slider__line"), // slier было
  sliderDots = document.querySelectorAll(".slider__dot"),
  sliderBtnNext = document.querySelector(".slider__btn-next"),
  description = document.querySelectorAll('.description');
  sliderBtnPrev = document.querySelector(".slider__btn-prev");
  

let sliderCount = 0,
  sliderWidth;

// Адаптивность
window.addEventListener("resize", showSlide);

sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);

setInterval(() => {
  nextSlide();
}, 3000);

//Функция задает нужную ширину картинки
function showSlide() {
  sliderWidth = document.querySelector(".slider").offsetWidth;
  //   sliderLine.computedStyleMap.width = sliderWidth * sliderImages.length + "px"; исправил
  sliderLine.style.width = sliderWidth * sliderImagesWrp.length + "px";
  //   sliderImages.forEach(
  //     (item) => (item.computedStyleMap.width = sliderWidth + "px") исправил
  //   );
  sliderImagesWrp.forEach((item) => (item.style.width = sliderWidth + "px"));
  description.forEach((item) => (item.style.width = sliderWidth + "px"));
  rollSlider();
}
showSlide();

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImagesWrp.length) sliderCount = 0;
  rollSlider();
  thisSlide(sliderCount);
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImagesWrps.length - 1;

  rollSlider();
  thisSlide(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active-dot"));
  sliderDots[index].classList.add("active-dot");
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});

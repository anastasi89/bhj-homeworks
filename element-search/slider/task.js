const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderItem = Array.from(document.querySelectorAll('.slider__item'));

let activeSlide = sliderItem.findIndex((item) => item.classList.contains('slider__item_active'));


function slide(newActiveSlide) {
	sliderItem[activeSlide].classList.remove('slider__item_active');
	sliderItem[newActiveSlide].classList.add('slider__item_active');
	activeSlide = newActiveSlide;
}

sliderArrowPrev.addEventListener('click', () => {
	let newSlide = activeSlide - 1;
	newSlide = newSlide < 0 ? sliderItem.length - 1 : newSlide;
	slide(newSlide);
});

sliderArrowNext.addEventListener('click', () => {
	let newSlide = activeSlide + 1;
	newSlide = newSlide >= sliderItem.length ? 0 : newSlide;
	slide(newSlide);
});
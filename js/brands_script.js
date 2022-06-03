const slider = document.querySelector('.swiper');
const widthW = window.innerWidth;
console.log(widthW)
let MobileSlider = function () {
	if (widthW <= 767 && !slider.classList.contains('swiper-initializited')) {
		return mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			slideClass: 'swiper-slide',
			spaceBetween: 10,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			width: 240,
			spaceBetween: 16,
		})
	}
}

MobileSlider();

let checkbox = document.querySelector('.checkbox');
let checkboxImage = document.querySelector('.checkbox__image');
let checkboxText = document.querySelector('.checkbox__read');
let wrapperWidth = document.querySelector('.swiper-wrapper');
checkbox.addEventListener('change', function (evt) {
	evt.preventDefault();
	if (checkboxImage.classList.contains('checkbox__transform')) {
		checkboxImage.classList.remove('checkbox__transform');
		checkboxText.innerHTML = 'Показать все';
		wrapperWidth.style = 'height: 160px'
	} else {
		checkboxImage.classList.add('checkbox__transform');
		checkboxText.innerHTML = 'Скрыть'
		
		wrapperWidth.style = 'height: 250px'
	}
})

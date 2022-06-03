const slider = document.querySelector('.swiper');
const widthW = window.innerWidth;
let MobileSlider = function () {
	console.log(widthW );
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

let tehnicServicesCheckbox = document.querySelector('.checkbox');
let tehnicServicesCheckboxImage = document.querySelector('tehnic-services--checkbox-image');

let tehnicServicesWrapper = document.querySelector('.tehnic-services__wrapper')
let tehnicServicesCheckboxText = document.querySelector('.tehnic-services--checkbox-read');
checkbox.addEventListener('change', function (evt) {
	evt.preventDefault();
	if (tehnicServicesCheckboxImage.classList.contains('checkbox__transform')) {
		tehnicServicesCheckboxImage.classList.remove('checkbox__transform');
		tehnicServicesCheckboxText.innerHTML = 'Показать все';
		tehnicServicesWrapper.style = 'height: 160px'
	} else {
		tehnicServicesCheckboxImage.classList.add('checkbox__transform');
		tehnicServicesCheckboxText.innerHTML = 'Скрыть'
		
		tehnicServicesWrapper.style = 'height: 100%'
	}
})
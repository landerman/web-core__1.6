

const slider = document.querySelector('.swiper');
const widthW = window.innerWidth;
console.log(widthW)
let MobileSlider = function () {
	if (widthW <= 768 && !slider.classList.contains('swiper-initializited')) {
		return mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			slideClass: 'swiper-slide',
			spaceBetween: 10,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			width: 260,
			spaceBetween: 16,
		})
	}
}

MobileSlider()
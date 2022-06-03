const slider = document.querySelector('.swiper');
const widthW = window.innerWidth;
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
			width: 240,
			spaceBetween: 16,
		})
	}
}

MobileSlider();

let checkbox = document.querySelector('.checkbox');
let checkboxImage = document.querySelector('.main-page__checkbox--image');
let checkboxText = document.querySelector('.main-page__checkbox--read');
let wrapperWidth = document.querySelector('.main-page__content--wrapper');
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

const modal = document.querySelector('.modal');
const closeBtn1 = document.querySelector('.modal__close-btn1');
const closeBtn2= document.querySelector('.modal__close-btn2');
const call= document.querySelector('.call');
const feedback= document.querySelector('.chat');





	feedback.addEventListener('click', function (evt) {

    if(modal.classList.contains('modal--remove')){
        modal.classList.remove('modal--remove')
    }
    if(modal.classList.contains('modal--feedback-remove')){
        modal.classList.remove('modal--feedback-remove')
    }
    evt.preventDefault();
    modal.classList.remove('modal--remove');
    modal.classList.add('modal--call-remove')
    })

	call.addEventListener('click', function (evt) {
    if(modal.classList.contains('modal--remove')){
        modal.classList.remove('modal--remove')
    }
    if(modal.classList.contains('modal--call-remove')){
        modal.classList.remove('modal--call-remove')
    }
    evt.preventDefault();
    modal.classList.remove('modal--remove');
    modal.classList.add('modal--feedback-remove')
    })

closeBtn1.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.add('modal--remove');
})


closeBtn2.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.add('modal--remove');
})

document.addEventListener('click', (e) => {
    const click1 = e.composedPath().includes(modal);
    const click2 = e.composedPath().includes(call);
    const click3 = e.composedPath().includes(feedback);
    if(!click1 && !click2 && !click3){
        modal.classList.add('modal--remove');
    }else{
        modal.classList.remove('modal--remove')
    }
})
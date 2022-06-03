const checkbox = document.querySelector('.checkbox');
const checkboxImage = document.querySelector('.checkbox__image');
const checkboxText = document.querySelector('.checkbox__read');
const contentText = document.querySelector('.content__text');
checkbox.addEventListener('change', function (evt) {
	evt.preventDefault();
	if (checkboxImage.classList.contains('checkbox__transform')) {
		checkboxImage.classList.remove('checkbox__transform');
		checkboxText.innerHTML = 'Показать все';
        contentText.classList.remove('content__text--overflow');
        contentText.style.height ="97px"

	} else {
		checkboxImage.classList.add('checkbox__transform');
		checkboxText.innerHTML = 'Скрыть'
        contentText.classList.add('content__text--overflow');
        contentText.style.height ="auto";
	}
})

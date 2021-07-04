/* abstractizarea lui getElementById */
/*function getId(numeID) {
	return document.getElementById(numeID);
}*/

/* instanțierea trigger-ului de meniu */
let $menuTriggerButton = document.getElementById('menuTrigger');
let $mainMenuNav = document.getElementById('mainMenu');

$menuTriggerButton.addEventListener('click', () => {
	$mainMenuNav.classList.toggle('Active');
	$menuTriggerButton.classList.toggle('Active');
}, true);

/* instanțierea slider-ului */
let $previousSlideLink = document.getElementById('previousSlide');
let $nextSlideLink = document.getElementById('nextSlide');
let $sliderPickerList = document.getElementById('sliderPicker');
let currentSlide = 1;
let $sliderList = document.getElementById('sliderList');
let allSlides = $sliderList.childElementCount;

function selectSlide(position) {
	$sliderList.children[currentSlide - 1].classList.remove('Active');
	$sliderPickerList.children[currentSlide - 1].classList.remove('Active');
	currentSlide = position;
	$sliderList.children[currentSlide - 1].classList.add('Active');
	$sliderPickerList.children[currentSlide - 1].classList.add('Active');
}

$previousSlideLink.addEventListener('click', () => {
	let position = (currentSlide === 1) ? allSlides : (currentSlide - 1);
	selectSlide(position);
}, true);
$nextSlideLink.addEventListener('click', () => {
	let position = (currentSlide === allSlides) ? 1 : (currentSlide + 1);
	selectSlide(position);
}, true);
$sliderPickerList.querySelectorAll('.SliderPickerLink').forEach((el, index) => {
	el.addEventListener('click', () => {
		let position = index + 1;
		selectSlide(position);
	}, true);
});

/* instanțierea service worker-ului */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}
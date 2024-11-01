'use strict';

// hamburger menu
const hamburger = document.querySelector('.hamburger');
const header_menu_wrapper = document.querySelector('.header_menu-wrapper');
const header_menu = document.querySelector('.header_menu');
const header_menu_links = document.querySelectorAll('.header_menu li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	header_menu_wrapper.classList.toggle('active');
});

header_menu_links.forEach(link => {
	link.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		header_menu_wrapper.classList.toggle('active');
	});
});

// header blur effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
	this.scrollY >= 50
		? header.classList.add('blur-effect')
		: header.classList.remove('blur-effect');
});

// scroll up
const scrollUp = document.querySelector('.scrollup');
scrollUp.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

window.addEventListener('scroll', () => {
	const scrollY = this.scrollY;

	this.scrollY >= 200
		? scrollUp.classList.add('active')
		: scrollUp.classList.remove('active');
});

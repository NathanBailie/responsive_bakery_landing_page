'use strict';

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

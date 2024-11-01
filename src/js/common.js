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

// activate menu link by scrolling sections
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
	const scrollY = this.scrollY;

	sections.forEach(section => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;
		const sectionId = section.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.header_menu a[href*=' + sectionId + ']')
				.classList.add('active');
		} else {
			document
				.querySelector('.header_menu a[href*=' + sectionId + ']')
				.classList.remove('active');
		}
	});

	// scroll up
	this.scrollY >= 200
		? scrollUp.classList.add('active')
		: scrollUp.classList.remove('active');
});

// animations
const sr = ScrollReveal({
	distance: '50px',
	duration: 2500,
	delay: 300,
});

// titles
sr.reveal(`.news_title`, { delay: 600, origin: 'bottom' });
sr.reveal(
	`.about_title, .favorites_title, .visit_title, .location_logo, .location_title`,
	{
		delay: 600,
		origin: 'top',
	}
);

// descriptions, buttons
sr.reveal(`.home_data`, { delay: 700, origin: 'left' });
sr.reveal(`.visit_text, .location_descr`, { delay: 700, origin: 'bottom' });
sr.reveal(`.favorites_item, .location_list-elem`, {
	delay: 700,
	origin: 'bottom',
	interval: 150,
});
sr.reveal(`.home_contacts, .news_button-wrapper, .visit_button-wrapper`, {
	delay: 900,
	origin: 'bottom',
});

sr.reveal(`.about_button-wrapper`, {
	delay: 900,
});

sr.reveal(`.about_descr`, {
	delay: 700,
	origin: 'bottom',
});

// images, lists
sr.reveal(`.home_img-main`, {
	delay: 900,
	rotate: { z: -15 },
	scale: 1.1,
});
sr.reveal(`.home_img-small, .location_img1, .location_img2`, {
	delay: 900,
	rotate: { z: 15 },
});
sr.reveal(`.home_link, .news_item, .location_link`, {
	delay: 900,
	origin: 'bottom',
	interval: 150,
});
sr.reveal(`.about_image`, {
	delay: 900,
	origin: 'left',
	scale: 1.1,
});

sr.reveal(`.about_bread2-img`, {
	delay: 900,
});

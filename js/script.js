/*--- Mobile Menu ---*/
const menuBtn = document.querySelector('.mobile-btn');
const menuIcon = document.querySelector('.mobile-btn__icon');
const menuList = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function () {
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
	document.querySelector('body').classList.toggle('no-scroll');
})

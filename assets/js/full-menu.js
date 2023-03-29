// View All Buttons
const viewAllBtns = document.querySelectorAll('.StyleViewAll button.vc_general.vc_btn3');
viewAllBtns.forEach(btn => {
btn.addEventListener('click', () => {
window.location.href = 'https://soukalmarfa.ae/all-retailers/';
});
});

// Header Navigation
const headerNavWrapper = document.querySelector('.header-navigation-wrapper');
const menuItemsCustom = headerNavWrapper.querySelectorAll('.menu-item-type-custom');
menuItemsCustom.forEach(item => {
item.addEventListener('click', () => {
document.body.classList.add('MenuOpen');
});
});

// Menu Item Has Children
const menuItemsHasChildren = document.querySelectorAll('.menu-item-has-children');
menuItemsHasChildren.forEach(item => {
item.addEventListener('click', () => {
item.classList.toggle('SubOpened');
});
});

// Close Icon
const closeIcons = document.querySelectorAll('.closeIcon');
closeIcons.forEach(icon => {
icon.addEventListener('click', () => {
document.body.classList.remove('MenuOpen');
});
});

// Scroll to Top
const scrollToTopBtns = document.querySelectorAll('.scrolltotop');
scrollToTopBtns.forEach(btn => {
btn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
});

// Fixed Header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
const scrollY = window.pageYOffset;
if (scrollY >= 800) {
scrollToTopBtns.forEach(btn => btn.style.display = 'block');
} else {
scrollToTopBtns.forEach(btn => btn.style.display = 'none');
}
if (scrollY >= 110) {
header.classList.add('FixedHeader');
} else {
header.classList.remove('FixedHeader');
}
});
const header = document.getElementById('header');
const nav = document.getElementById('nav');

// Minimize header on scroll
window.addEventListener('scroll', () => {
if(window.scrollY > 50){
header.classList.add('minimized');
} else {
header.classList.remove('minimized');
}
});

// Smooth scroll only on nav click
nav.querySelectorAll('a').forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const target = document.querySelector(link.getAttribute('href'));
const offset = header.offsetHeight;
const bodyRect = document.body.getBoundingClientRect().top;
const targetRect = target.getBoundingClientRect().top;
const scrollPos = targetRect - bodyRect - offset + 5;
window.scrollTo({top: scrollPos, behavior: 'smooth'});
});
});

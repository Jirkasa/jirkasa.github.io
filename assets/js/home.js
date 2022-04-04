import makeStickyHeader from './modules/stickyHeader.js';
import ElementsObserver from './modules/elementsObserver.js';

// STICKY HEADER
makeStickyHeader(document.querySelector('.intro-section__header'), document.querySelector('.header'), 'header--fixed');

// PROGRESS BARS
const animatedProgressBars = document.querySelectorAll('.progress-bar--hidden');

const observer = new ElementsObserver(0.9, () => {
    // if Intersection Observer is not supported, remove CSS class now
    for (let progressBar of animatedProgressBars) progressBar.classList.remove('progress-bar--hidden');
});

for (let progressBar of animatedProgressBars) {
    observer.observe(progressBar, 'progress-bar--hidden', 'removeOnEnter');
}
import {
    isInViewport
} from './isInViewport.js';
const skillsDiv = document.querySelectorAll('.app-skills--div');
window.addEventListener('scroll', () => {
    if (isInViewport(skillsDiv)) {
        skillsDiv.forEach((e) => {
            e.style.backgroundColor = "red";
        })
    }
});
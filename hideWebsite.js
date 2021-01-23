
if (document.documentElement.style.backgroundColor == '') {
    document.documentElement.style.backgroundColor = '#fff';
}
document.documentElement.style.opacity = 0;
document.documentElement.style.transition = '.2s ease opacity';

window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.opacity = 1;
}, false);
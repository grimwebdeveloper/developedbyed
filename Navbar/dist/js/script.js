// Get the menu bars and hidden menu elements from the DOM
const bars = document.querySelector('#menu i');
const hiddenMenu = document.querySelector('#hidden-menu');

// Add an event listener to the menu bars that toggles the hidden menu's class
bars.addEventListener('click', () => {
    hiddenMenu.classList.toggle('hidden-menu-effect');
});

// Add an event listener to the menu bars that toggles the 'fa-fade' class when the mouse enters
bars.addEventListener('mouseenter', () => {
    bars.classList.toggle('fa-fade');
});

// Add an event listener to the menu bars that toggles the 'fa-fade' class when the mouse leaves
bars.addEventListener('mouseleave', () => {
    bars.classList.toggle('fa-fade');
});

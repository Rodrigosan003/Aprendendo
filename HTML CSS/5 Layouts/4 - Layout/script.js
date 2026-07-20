openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.opacity = '1';
})

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.removeAttribute('style');
})
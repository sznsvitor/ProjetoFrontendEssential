document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.getElementById('menu-option');
    menu.classList.toggle('show');

    this.classList.toggle('menu-aberto')
})
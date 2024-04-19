'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const li = document.querySelectorAll('.li');
    const block = document.querySelectorAll('.block');

    li.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Remover clases 'active' de todos los elementos
            li.forEach((liItem) => liItem.classList.remove('active'));
            block.forEach((blockItem) => blockItem.classList.remove('active'));

            // Añadir la clase 'active' al elemento clicado
            item.classList.add('active');
            block[index].classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const myImage = document.getElementById('iptv');
    
    myImage.addEventListener('click', function() {
         window.open('https://leon-iptv.netlify.app/', '_blank');
    });
});

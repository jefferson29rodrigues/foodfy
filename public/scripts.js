/*
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function() {
        const imageId = card.getAttribute('id');
        modalOverlay.classList.add('active');

       / * modalOverlay.querySelector('iframe').src = `assets/${imageId}`;
        modalOverlay.querySelector("#p-description").innerHTML = ${description};* /
        
        const tituloReceitas = card.querySelector('#h3-do-card_content').innerText;
        const autorReceitas = card.querySelector('#p-do-card_info').innerText;
        const imagemReceita = card.querySelector('img').getAttribute('src');

        modalOverlay.querySelector('img').src = `${imagemReceita}`;

        / * modalOverlay.querySelector(".modal-img").innerHTML = `${imageId}`;* /

        modalOverlay.querySelector('h3').innerText = `${tituloReceitas}`;
        modalOverlay.querySelector('p').innerText = `${autorReceitas}`;


    });
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('img').src = "";

    modalOverlay.querySelector("h3").innerText = ""
    modalOverlay.querySelector("p").innerText = "" 
});

*/

// req.params

const cards = document.querySelectorAll('.card');

for (let card of cards) {
     card.addEventListener("click", function() {
        const idCard = card.getAttribute('id');

        window.location.href = `description/${idCard}`;
    });
}
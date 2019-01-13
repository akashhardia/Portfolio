const arr = [
        {
            title: "Concentration",
            href: "https://htmlpreview.github.io/?https://github.com/akashhardia/memory-game-Concentration/blob/master/index.html",
            img: "background-image: url(img/concentration.png)",
            color: "background-color: rgba(125,151,173,.8)"
        },
        {
            title: "Pixel Art Maker",
            href: "https://htmlpreview.github.io/?https://github.com/akashhardia/pixel-art-maker/blob/master/index.html",
            img: "background-image: url(img/pixel_nexus.jpeg)",
            color: "background-color: rgba(255,162,52,.8)"
        },
        {
            title: "Portfolio",
            href: "#",
            img: "background-image: url(img/portfolio_nexus.jpeg)",
            color: "background-color: rgba(169,81,237,.8)"
        },
        {
            title: "Notes Taker",
            href: "https://htmlpreview.github.io/?https://github.com/akashhardia/notes_taker/blob/master/index.html",
            img: "background-image: url(img/notes_nexus.jpeg)",
            color: "background-color: rgba(2,179,228,.8)"
        },
        {
            title: "Animal Trading Card",
            href: "http://htmlpreview.github.io/?https://github.com/akashhardia/udacity/blob/master/animal%20trading%20card/card.html",
            img: "background-image: url(img/animal_nexus.jpeg)",
            color: "background-color: rgba(2,204,186,.8)"
        },
        {
            title: "Classic Arcade Game",
            href: "https://htmlpreview.github.io/?https://github.com/akashhardia/Classic-Arcade-Game-Clone/blob/master/index.html",
            img: "background-image: url(img/Classic_arcade.png)",
            color: "background-color: rgba(255,84,131,.8)"
        }
    ];


// puts all of the work cards on screen
function initDocument(){
    let cardsContainer = document.querySelector('.featured-work');

    arr.forEach(function(item){
        let card = document.createElement('div');
        card.setAttribute('class','card');
        let imageDivElement = document.createElement('div');
        imageDivElement.setAttribute('class',"image");
        imageDivElement.setAttribute('style',item.img);
        let imageOverlayElement = document.createElement('div');
        imageOverlayElement.setAttribute('class',"overlay");
        imageOverlayElement.setAttribute('style',item.color);

        imageDivElement.appendChild(imageOverlayElement);
        card.appendChild(imageDivElement);

        let cardDetails = document.createElement('div');
        cardDetails.setAttribute('class',"card-details");
        let anchorElement = document.createElement('a');
        anchorElement.setAttribute('href',item.href);
        anchorElement.innerHTML = `<div class="preview"><i class="far fa-eye"></i></div>`;
        let paraElement = document.createElement('p');
        paraElement.innerHTML = item.title;

        cardDetails.appendChild(anchorElement);
        cardDetails.appendChild(paraElement);

        card.appendChild(cardDetails);

        cardsContainer.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', initDocument);
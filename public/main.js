import { APILINK, IMG_PATH, SEARCHAPI } from '../server/config.js';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                const divCard = document.createElement("div");
                divCard.classList.add('column');

                const card = document.createElement("div");
                card.classList.add('card');

                const image = document.createElement("img");
                image.setAttribute('src', `${IMG_PATH}${element.poster_path}`);
                image.setAttribute('alt', element.title);

                const title = document.createElement("h3");
                title.textContent = element.title;

                card.appendChild(image);
                card.appendChild(title);
                divCard.appendChild(card);
                main.appendChild(divCard);
            })
        })
        .catch(error => console.error('Error fetching data:', error));
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    main.innerHTML = "";
    const query = search.value;

    if (query) {
        returnMovies(SEARCHAPI + query);
        search.value = "";
    }
});

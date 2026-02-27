const SWAPI_BASEURL = "https://www.swapi.tech/api";

async function getRandomCharacter() {
    try {
        const randomId = Math.floor(Math.random() * 83) + 1;
        const data = await fetch(`${SWAPI_BASEURL}/people/${randomId}/`)
        const res = await data.json();
        console.log("res in getRandomCharacter ===> ", res);
        const character = res.result.properties;
        console.log("character ===> ", character);
        console.log("character name ===> ", character.name);
        console.log("character height ===> ", character.height);
        const card = document.getElementById("card");
        card.innerHTML = `
            <h3 id="character-name">${character.name}</h3>
            <p id="character-height">Height: ${character.height} cm</p>
        `;
    } catch (error) {
        console.error("Error fetching random character:", error);
    }
}

async function getRandomMovie() {
    try {
        const randomId = Math.floor(Math.random() * 5) + 1;
        const data = await fetch(`${SWAPI_BASEURL}/films/${randomId}/`)
        const res = await data.json();
        console.log("res in getRandomMovie ===> ", res);
        const movie = res.result.properties;
        console.log("movie ===> ", movie);
        console.log("movie title ===> ", movie.title);
        console.log("movie director ===> ", movie.director);
        const card = document.getElementById("card");
        card.innerHTML = `
            <h3 id="movie-title">${movie.title}</h3>
            <p id="movie-director">Director: ${movie.director}</p>
        `;
    } catch (error) {
        console.error("Error fetching random character:", error);
    }
}

const randomCharacterBtn = document.getElementById('random-character-btn');
const randomMovieBtn = document.getElementById('random-movie-btn');

randomCharacterBtn.addEventListener('click', getRandomCharacter);
randomMovieBtn.addEventListener('click', getRandomMovie);
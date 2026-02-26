const movie_number = 1;
// ========= Fetch request to Star Wars ========/
fetch(`https://www.swapi.tech/api/films/${movie_number}`)
    .then(response => response.json()) // convert response to JSON
    .then(data => {
        console.log("swapi data ===> ", data);
        const movieTitle = document.getElementById('favorite_movie_title');
        const movieDescription = document.getElementById('favorite_movie_description');
        movieTitle.innerText = data.result.properties.title;
        movieDescription.innerText = `Directed by ${data.result.properties.director}`;
    })
    .catch(error => console.error("Error fetching swapi data:", error));

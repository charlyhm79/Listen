import css from './scss/style.scss';

document.addEventListener("DOMContentLoaded", () =>{

document.querySelector(".songs-list").innerHTML = '<div class="loading">Cargando...</div>';

fetch('http://localhost:3001/songs/').then((response) => {
    
    console.log("HTTP RESPONSE", response);
    response.json().then(data => {
        console.log("SONGS", data);
        let html = "";
        for (let song of data) {
            html += `<article class="song">
                <div class="cover">
                    <img src="${song.cover}" alt="${song.artist} - ${song.title}">
                </div>
                <div class="info">
                    <div class="title">${song.title}</div>
                    <div class="artist">${song.artist}</div>
                </div>
            </article>`;
        }
        document.querySelector(".songs-list").innerHTML = html;
    });
}, (error) => {
    console.error("ERROR RETRIEVING SONGS", error);
})
});

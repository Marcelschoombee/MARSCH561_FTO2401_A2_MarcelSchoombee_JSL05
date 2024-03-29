// Array of song objects. Add at least 5 songs with title, artist, and genre properties.




const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "What a Wonderful World", artist: "Louis Armstong", genre: "Jazz" },
    { title: "Symphony of Destruction", artist: "Megadeth", genre: "Heavy Metal" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = [
    {name: "Star-Lord", genre: "Rock"},
    {name: "Gamora", genre: "Pop"},
    {name: "Drax", genre: "R&B"},
    {name: "Rocket", genre: "Jazz"},
    {name: "Groot", genre: "Heavy Metal"}
    // Add preferences for Drax, Rocket, and Groot
];

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = guardians.map(guardian => {
        const playlist = songs.filter(song => song.genre === guardian.genre);
        return { guardian: guardian.name, playlist: playlist };
    });

    return playlists;
};

// Call generatePlaylist and display the playlists for each Guardian


const displayPlaylists = () => {
    const playlistsElement = document.getElementById("playlist", "song", "song-title"); 
    playlistsElement.innerHTML = ""; 

    
    guardians.forEach(guardian => {
        const playlist = songs.filter(song => song.genre === guardian.genre);
        const playlistHTML = `<div id="playlist"><h2>${guardian.name}'s Playlist:</h2>${playlist.map(song => `<div class="song">${song.title} by ${song.artist}</div>`).join('')}</div>`;

        playlistsElement.insertAdjacentHTML('beforeend', playlistHTML);
    });
};

window.onload = displayPlaylists;
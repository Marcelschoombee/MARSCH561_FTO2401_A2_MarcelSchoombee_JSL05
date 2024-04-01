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

// The array defining objects, each with a 'name' and 'genre' property
const guardians = [
    {name: "Star-Lord", genre: "Rock"}, 
    {name: "Gamora", genre: "Pop"},
    {name: "Drax", genre: "R&B"},
    {name: "Rocket", genre: "Jazz"},
    {name: "Groot", genre: "Heavy Metal"}
    
];

// The generatePlaylist function takes two parameters 'guardians' and 'songs'
function generatePlaylist(guardians, songs) {
  // It uses the map() function to iterate over eac guardian in the 'gaurdians' array  
    const playlists = guardians.map(guardian => {
  // For each guardian it filters the 'songs' array the select only the 'genre' for the specigic guardian      
        const playlist = songs.filter(song => song.genre === guardian.genre);
        return { guardian: guardian.name, playlist: playlist };
    });

    return playlists; // It returns an array of objects containing the name and the list of songs
};

// Call generatePlaylist and display the playlists for each Guardian

// The 'displayPlaylist' function is defined as an arrow function
const displayPlaylists = () => {
// It selects an element from the DOM with the Id 'playlist', 'song', 'song-title'    
    const playlistsElement = document.getElementById("playlist", "song", "song-title"); 
    playlistsElement.innerHTML = ""; // Clear the HTML content

    // It iterates over each guardian using '.forEach'
    guardians.forEach(guardian => {
        // 'forEach' it filters only the songs matching the genre of each guardian
        const playlist = songs.filter(song => song.genre === guardian.genre);
        // It generates HTML for each guardian with a name and the list of the songs
        const playlistHTML = `<div id="playlist"><h2>${guardian.name}'s Playlist:</h2>${playlist.map(song => `<div class="song">${song.title} by ${song.artist}</div>`).join('')}</div>`;
        // It appends the the selected HTML to the element
        playlistsElement.insertAdjacentHTML('beforeend', playlistHTML);
    });
};
// It triggers the 'displayPlayList' function when the window loads
window.onload = displayPlaylists;
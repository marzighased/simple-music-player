const tracks = [
    {
        name: "Relaxing Music",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        name: "Cill Vibes",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        name: "Ambient Tune",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];

let currentTrack = 0;
const audio = document.getElementById("audio");
const trackName = document.getElementById("trackName");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn= document.getElementById("nextBtn");

function loadTrack(index) {
    audio.src = tracks[index].url;
    trackName.textContent = tracks[index].name;
}

loadTrack(currentTrack);

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "Pause";
    } else {
        audio.pause();
        playBtn.textContent = "Play";
    }
});

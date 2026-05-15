let playButtonIcon = document.getElementById("play-button-icon");
let sound = document.getElementById("mp3-sound");


// Play/Stop Music and Switch Img Icon on Click
playButtonIcon.onclick = () => {
    if (sound.paused) {
        sound.play();
        playButtonIcon.src = "https://media.geeksforgeeks.org/wp-content/uploads/20210402235545/Pause.png";
    } else {
        sound.pause();
        playButtonIcon.src = "https://media.geeksforgeeks.org/wp-content/uploads/20210402235520/play.png";
    }
};

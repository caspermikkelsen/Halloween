
function playAudio() {
    let audio = document.getElementById('pumpkinSound');

    if (audio.paused) {
        audio.play();
    }
    else {
        audio.paused();
        audio.currentTime = 0;
    }
}
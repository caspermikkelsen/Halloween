//Play the PUMPKIN! sound when clicking on the pumpkins
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

//Form javaScript validation
const fullName = document.getElementById('fName');
const telNumber = document.getElementById('telNumber');
const email = document.getElementById('email');

const form = document.getElementById('sign-up-form');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (name.value === "" || name.value === null) {
        messages.push("Navn skal udfyldes");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorMessage.innerText = messages.join(", ");
    }
})
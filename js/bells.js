function playAudio(id) {
    if ((navigator.userAgent.toLowerCase().indexOf('chrome') <= -1)) {
        sounds[id].play();
    } else {
        document.getElementById(id).play();
    }
}

var sounds = new Array(3);
function initAudio() {
    sounds[0] = new WebAudioAPISound("sounds/Big-Temple-Bell");
    sounds[1] = new WebAudioAPISound("sounds/Japanese-Temple-Bell-Small");
    sounds[2] = new WebAudioAPISound("sounds/Temple-Bell");
    sounds[3] = new WebAudioAPISound("sounds/Zen-Temple-Bell");
}

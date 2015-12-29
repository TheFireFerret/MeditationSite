function playAudio(name) {
    document.getElementById(name).currentTime = 0;
    document.getElementById(name).play();
}

function pauseAudio(name){
    document.getElementById(name).pause();
}

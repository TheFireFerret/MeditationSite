function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    //var daysSpan = clock.querySelector('.days');
    //var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        //daysSpan.innerHTML = t.days;
        //hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
            playAudio();
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

function start(){
    var timeInMinutes = parseInt(document.getElementById('min').value);

    var timeInSeconds = parseInt(document.getElementById('sec').value);

    if (isNaN(timeInMinutes) && isNaN(timeInSeconds)) {
        return;
    }

    if (isNaN(timeInMinutes)){
        timeInMinutes = 0;
    }
    if (isNaN(timeInSeconds)){
        timeInSeconds = 0;
    }

    var mseconds = (timeInMinutes*60 + timeInSeconds)*1000;

    var deadline = new Date(Date.parse(new Date()) + mseconds);

    initializeClock('clockdiv', deadline);
}

function reset() {
    location.reload();
}

function focus() {
    document.getElementById("min").focus();
}

var ding;
function initAudio() {
    ding = new WebAudioAPISound("sounds/timer-ding");
}

function playAudio() {
    if ((navigator.userAgent.toLowerCase().indexOf('chrome') <= -1)) {
        ding.play();
    } else {
        //document.getElementById('ding').play();
        ding.play();
    }
}

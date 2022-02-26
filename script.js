const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const gradDay = '30 April 2025';

function countdown() {
    const gradDate = new Date(gradDay);
    const currentDate = new Date();

    const totalSecs = (gradDate - currentDate) / 1000;
    const totalMins = totalSecs / 60;
    const totalHours = totalMins / 60;
    const totalDays = totalHours/ 24;
    const days = Math.floor(totalDays);
    const hours = Math.floor(totalHours - days * 24);
    const mins = Math.floor(totalMins - days * 24 * 60 - hours * 60);
    const secs = Math.floor(totalSecs - days * 24 * 3600 - hours * 3600 - mins * 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000);

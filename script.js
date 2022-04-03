const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears= "1 jan 2023"

var countdown = setInterval(function(){
    
    const NewYearsDate = new Date(newYears);
    const currentDate =  new Date();
    
    const totalSeconds = (NewYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    
   if (totalSeconds < 0){
    clearInterval(countdown);
    daysEl.innerHTML = "0";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML ="00";
    secondsEl.innerHTML ="00";

    document.querySelector(".nYear").innerHTML="happy new year!! 🥳"
   }

}, 1000)

function formatTime(time){
    return time < 10 ? "0" + time : time;
}

  
// countdown();
// let timer = setInterval(countdown, 1000)




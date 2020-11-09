const newYars = '1 Jan 2021';
const dayEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutsEl = document.querySelector('.minuts');
const secondsEl = document.querySelector('.seconds');


const coundown = () => {
    const newYearsDate = new Date(newYars);
    const currentDate = new Date();

    const allSeconds = (newYearsDate - currentDate) / 1000;
    const days    = Math.floor(allSeconds / 3600 / 24);
    const hours   = Math.floor(allSeconds / 3600) % 24;
    const minuts  = Math.floor(allSeconds / 60) % 60;
    const seconds =  Math.floor(allSeconds) % 60;


    dayEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutsEl.innerHTML = formatTime(minuts);
    secondsEl.innerHTML = formatTime(seconds);


    console.log(days,hours);
}

const formatTime = (time)=> {
    return (time < 10 ? `0${time}` : time);
}


setInterval(coundown,1000);

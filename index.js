const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const mintsE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');



const bdaydate=prompt('Enter you birth-day in 1 Jan 2021 format');


function count_Timer(){
    const birthday_date = new Date(bdaydate);
    const current_date = new Date();

    const Total_seconds = (birthday_date-current_date) / 1000;

    const days = Math.floor(Total_seconds / 3600 / 24);
    const hours = Math.floor(Total_seconds / 3600) % 24;
    const mints = Math.floor(Total_seconds / 60) % 60;
    const seconds = Math.floor(Total_seconds) % 60;

    console.log(days, hours, mints, seconds);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    mintsE1.innerHTML = mints;
    secondsE1.innerHTML = seconds;

}


count_Timer();

setInterval(count_Timer, 1000);
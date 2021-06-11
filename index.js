const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const mintsE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');
const name=document.getElementById('name');

const addname=prompt('Enter the name..!');
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
    hoursE1.innerHTML = formatTime(hours);
    mintsE1.innerHTML = formatTime(mints);
    secondsE1.innerHTML = formatTime(seconds);
    



if(days==0 & hours==0 & mints==0 & seconds==20)
{
    name.innerHTML="Happy Birthday..."+addname;
}
else if(days==-1){
    name.innerHTML="It is  your birthday ..."+addname+" today";
}
else if(days<-1 ){
    name.innerHTML="Your birthday had been finished ..."+addname+ ". To find your bday this year... please add revelant date and present year";
}
else{
    name.innerHTML="Advance Happy Birthday..."+addname;
}

}
function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}


count_Timer();

setInterval(count_Timer, 1000);
const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day-today')

const weekDay = document.getElementById('day')

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


setInterval(function time(){
    let dateToday = new Date()
    
    let year_today = dateToday.getFullYear();
    let month_today = dateToday.getDay();
    let today_day = dateToday.getDate();
    
    let week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    let day_week = dateToday.getDay();
    day_week = week[dateToday.getDay()];
    
    
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    
    if(hr < 10){  hr = '0' + hr };
    if(min < 10){  min = '0' + min };
    if(s < 10){ s = '0' + s };


    hours.textContent = hr; 
    minutes.textContent = min; 
    seconds.textContent = s; 

    
    year.textContent = year_today;
    month.textContent =`- ${month_today} -`;
    day.textContent = today_day;

    weekDay.textContent = day_week;
});



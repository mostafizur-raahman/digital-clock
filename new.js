const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const clock = setInterval(function time()  {
    let nowdate = new Date();
    let hr = nowdate.getHours();
    let min = nowdate.getMinutes();
    let sec = nowdate.getSeconds();
    if ( hr < 10 ){
        hr = '0' + hr;
    }
    if ( min < 10 ){
        min = '0' + min;
    }
    if ( sec < 10 ) {
        sec = '0' + sec;
    }

    hour.textContent = hr;
    second.textContent = sec;
    minute.textContent = min;
    
}, 1000);


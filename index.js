const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

// console.log(hourEl);

function updateClock(){
    const currentDate  = new Date();
    
    // setTimeout(updateClock, 1000); //calls the specified function in every "specified interval (micro seconds)"
    
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    // console.log(hour, minute, second);

    const hourDeg = ( hour/12 ) * 360;
    const minuteDeg = (minute/60) * 360;
    const secondDeg = (second/60) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`; //dynamic in nature hence use back  tick, $ for using dynamic variable    
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`; //dynamic in nature hence use back  tick, $ for using dynamic variable    
    secondEl.style.transform = `rotate(${secondDeg}deg)`; //dynamic in nature hence use back  tick, $ for using dynamic variable    

}

// updateClock();
setInterval(updateClock, 1000); // this repeatedly calls the function in every specified time interval.

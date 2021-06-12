// Hour hand
let hourHand = document.querySelector('.hour');
// Minute Hand
let minuteHand = document.querySelector('minute');
// Second Hand 
let secondHand = document.querySelector('.second');

function rotate()
{
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const Seconds = currentDate.getSeconds();

    const secondFraction = seconds / 60;
    const minutesFraction = ( secondFraction + minutes ) / 60;
    const hourFraction = ( minutesFraction + hours ) / 12;
    
    const secondsRotate = secondsFraction * 360;
    const minutesRotate = minutesFraction * 360;
    const hoursRotate = hourFraction * 360;

    secondHand.style.transform = `rotate(${secondsRotate}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
    hourHand.style.transform = `rotate(${hoursRotate}deg)`;
    
}
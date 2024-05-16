"use strict";

function Timer() {
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    const currentTime = new Date();
    const currentMonth = currentTime.getMonth();
    const nextMonthDate = new Date();

    // Set the target date to the 20th of the next month at 00:00:00
    nextMonthDate.setMonth(currentMonth + 1);
    nextMonthDate.setDate(20);
    nextMonthDate.setHours(0, 0, 0, 0);

    if (nextMonthDate.getTime() < currentTime.getTime()) {
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    };

    const diff = nextMonthDate - currentTime;

    // Calculate time left
    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((diff / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((diff / 1000) % 60);

    // Update the display
    days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

    // Check if time left is 0 or less
    if (diff <= 0) {
        // Clear the interval to stop the timer
        clearInterval(timerInterval);
        // Optionally, do something when the timer stops
        console.log('Timer finished!');
        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        seconds.innerText = "00";
    }
};

// Set the interval to call the Timer function every second (1000 milliseconds)
const timerInterval = setInterval(Timer, 1000);

// Call the Timer function immediately to update the display right away
Timer();
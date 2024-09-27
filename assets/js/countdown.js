// Modify this date to set the countdown target
const targetDate = new Date("Nov 16, 2024 12:34:00").getTime();

// Update countdown every second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display result in the corresponding elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Stop countdown when time is up
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Event Started!";
    }
}, 1000);

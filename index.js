var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);

timer = setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
        clearInterval(timer);
    } else {
        
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes%= 60;
        seconds%= 60;

        document.getElementById("Days").innerHTML = days;
        document.getElementById("Hours").innerHTML = hours;
        document.getElementById("Minutes").innerHTML = minutes;
        document.getElementById("Seconds").innerHTML = seconds;


    }

}
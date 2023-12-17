function time() {
    // Creating object of the Date class
    let date = new Date();

    // Get current hour
    let hour = date.getHours();
    // Get current minute
    let minute = date.getMinutes();
    // Get current second
    let second = date.getSeconds();

    // variable to store AM / PM
    let period = "";

    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // Converting the hour in 12-hour format
    if (hour === 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    // Get the name of the weekday
    let name_weekday = weekday[date.getDay()].slice(0,3).toUpperCase();

    // Updating hour, minute, and second
    let day = ("0" + date.getDate()).slice(-2);
    let month = date.toLocaleString('default', {month: 'short'}).toUpperCase();
    let year = date.getFullYear();
    let timezone = date.toTimeString().substring(18,date.toTimeString().length);



    hour = update(hour);
    minute = update(minute);
    second = update(second);


    // Adding time elements to the div
    document.getElementById("text").innerHTML =\
		
        `${name_weekday} ${day} ${month} ${year}<br/>${hour}:${minute}:${second} ${period} timezone ${timezone}`;
    // timeDiv.innerHTML = hour + " : " + minute + " : " + second + " " + period;

    // Set Timer to 1 sec (1000 ms)
    setTimeout(time, 1000);
}

// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
function time() {
    // 1. Define your target timezones
    const timezones = [
        { name: "Sydney", tz: "Australia/Sydney" },
        { name: "Brisbane", tz: "Australia/Brisbane" }
    ];

    // 2. Get the current moment
    let date = new Date();

    // 3. Build the display for all timezones
    let displayHTML = "";

    timezones.forEach((tzData, index) => {
        // 4. Configure the formatter for the target timezone
        let formatter = new Intl.DateTimeFormat('en-AU', {
            timeZone: tzData.tz,
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            weekday: 'long',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            timeZoneName: 'short'
        });

        // 5. Breakdown the formatted time into usable parts
        const parts = formatter.formatToParts(date);
        const dateValues = {};
        parts.forEach(({type, value}) => {
            dateValues[type] = value;
        });

        // 6. Extract values
        let hour = parseInt(dateValues.hour);
        let minute = dateValues.minute;
        let second = dateValues.second;
        let day = dateValues.day;
        let month = dateValues.month.toUpperCase();
        let year = dateValues.year;
        let name_weekday = dateValues.weekday.slice(0, 3).toUpperCase();
        let timezoneAbbreviation = dateValues.timeZoneName;

        // 7. Standardize formatting (leading zeros)
        // No padding - use values as-is

        // 8. Build the timezone display
        displayHTML += `<strong>${tzData.name}:</strong> ${name_weekday} ${day} ${month} ${year}<br/>${hour}:${minute}:${second} timezone ${timezoneAbbreviation}`;
        
        // Add line break between timezones
        if (index < timezones.length - 1) {
            displayHTML += "<br/><br/>";
        }
    });

    // 10. Update the DOM element
    const clockElement = document.getElementById("text");
    if (clockElement) {
        clockElement.innerHTML = displayHTML;
    }

    // 11. Schedule next update
    setTimeout(time, 1000);
}

/**
 * Prepends a leading zero to numbers less than 10
 */
function update(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}

document.addEventListener('DOMContentLoaded', time);

document.getElementById("check-speed-btn").addEventListener("click", function() {
    let speed = parseInt(document.getElementById("speed-input").value);
    if (isNaN(speed)) {
        console.log("Please enter a valid speed.");
    } else if (speed < 70) {
        console.log("Ok");
    } else {
        let demerit_points = Math.floor((speed - 70) / 5);
        if (demerit_points > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", demerit_points);
        }
    }
});

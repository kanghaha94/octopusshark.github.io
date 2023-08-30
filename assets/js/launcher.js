// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Set the duration (in milliseconds) for how long you want the launch screen to display
    var launchScreenDuration = 1500; // 5 seconds (adjust as needed)

    // Hide the launch screen after the specified duration
    setTimeout(function () {
        var launchScreen = document.querySelector(".launch-screen");
        if (launchScreen) {
            launchScreen.style.display = "none";
        }
    }, launchScreenDuration);
});
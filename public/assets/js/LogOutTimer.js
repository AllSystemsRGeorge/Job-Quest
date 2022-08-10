// Set timeout variables.
var timeoutWarning = 840000; // Display warning in 14 Mins.
var timeoutNow = 60000; // Warning has been shown, give the user 1 minute to interact
var logoutUrl = 'logout.php'; // URL to logout page.

var warningTimer;
var timeoutTimer;

// Start warning timer.
function StartWarningTimer() {
    warningTimer = setTimeout("IdleWarning()", timeoutWarning);
}

// Reset timers.
function ResetTimeOutTimer() {
    clearTimeout(timeoutTimer);
    StartWarningTimer();
    $("#timeout").dialog('close');
}

// Show idle timeout warning dialog.
function IdleWarning() {
    clearTimeout(warningTimer);
    timeoutTimer = setTimeout("IdleTimeout()", timeoutNow);
    $("#timeout").dialog({
        modal: true
    });
    // Add code in the #timeout element to call ResetTimeOutTimer() if
    // the "Stay Logged In" button is clicked
}

// Logout the user.
function IdleTimeout() {
    window.location = logoutUrl;
}
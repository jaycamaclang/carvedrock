showMessage = (message) => {
    document.getElementById('message').textContent = message;
}

changePercentOff = (percentage) => {
    document.getElementById('percent-off').textContent = percentage + "% OFF";
}
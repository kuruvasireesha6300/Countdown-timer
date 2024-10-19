let countdown;
const countdownElement = document.getElementById('countdown');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startCountdown);

function startCountdown() {
    let timeLeft = 600; // 10 minutes in seconds
    clearInterval(countdown);

    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            countdownElement.textContent = "Time's up!";
            return;
        }

        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

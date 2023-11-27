const timerDisplay = document.querySelector('#timer');

let intervalId;
function timer (second) {
    const curTime = Date.now();
    const endTime = curTime + second * 1000;
    displayTimer(second);
    intervalId = setInterval(() => {
        const secondsEnd = Math.round((endTime - Date.now()) / 1000);

        if (secondsEnd == '0') {
            alert('Вы выйграли в конкурсе');
            timerDisplay.textContent = '';
            clearInterval(intervalId);
            return;
        };
        displayTimer(secondsEnd)
    }, 1000);
}

function displayTimer(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds / 60) % 60);
    let remainderSeconds = seconds % 60;
   
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (remainderSeconds < 10) remainderSeconds = '0' + remainderSeconds;

    timerDisplay.textContent = hours + ':' + minutes + ':' + remainderSeconds;
}

timer(600)
const hole = document.querySelectorAll('.hole');
const winner = document.querySelector('#dead');
const miss = document.querySelector('#lost');

hole.forEach((item) => {
    item.addEventListener('click', () => {
       
        if (item.classList.contains('hole_has-mole')) {
            winner.textContent++;
        } else {
            miss.textContent++;
        }
        gameWin(winner, miss);
        gameOver(winner, miss);
    })
})

function gameWin (win, lost) {
    if (win.textContent === '10') {
      alert('Вы выйграли');
      win.textContent = '0';
      lost.textContent = '0';
    }
}

function gameOver (win, lost) {
    if (miss.textContent === '5') {
      alert('Вы проиграли');
      win.textContent = '0';
      lost.textContent = '0';
    }
}
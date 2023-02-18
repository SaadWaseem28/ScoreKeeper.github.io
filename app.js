let scoreP1 = document.querySelector('#p1Score');
let scoreP2 = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Btn');
const p2Button = document.querySelector('#p2btn');
const resetButton = document.querySelector('#reset');
const setScore = document.querySelector('#scoreSet');
let p1Counter = 0;
let p2Counter = 0;


p1Button.addEventListener('click', () => {
    p1Counter++;
    scoreP1.innerText = p1Counter;
    if (p1Counter == setScore.value) {
        scoreP1.style.color = 'green';
        scoreP2.style.color = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})
p2Button.addEventListener('click', () => {
    p2Counter++;
    scoreP2.innerText = p2Counter;
    if (p2Counter == setScore.value) {
        scoreP2.style.color = 'green';
        scoreP1.style.color = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})
resetButton.addEventListener('click', () => {
    scoreP1.innerText = p1Counter = 0;
    scoreP2.innerText = p2Counter = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
})




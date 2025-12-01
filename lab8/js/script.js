const pattern = /^[A-ZА-ЯІЇЄ][A-Za-zА-ЯІіЇїЄєа-я]+$/;

const input = document.getElementById('input');
const generateBtn = document.getElementById('generate');
const newGameBtn = document.getElementById('newGame');

let userScore = 0;
let computerScore = 0;
let gameOver = false;

function addHistory(text) {
    const div = document.getElementById("history");
    const line = document.createElement("div");
    line.textContent = text;
    div.prepend(line);
}
function showButtons() {
    generateBtn.style.display = "block";
    newGameBtn.style.display = "block";
}
input.addEventListener('input', function () {
    if (pattern.test(this.value)) {
        showButtons();
    } else {
        generateBtn.style.display = "none";
        newGameBtn.style.display = "none";
    }
});
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && pattern.test(this.value)) {
        document.getElementById('User').innerText = this.value;
        showButtons();
    }
});
function func() {
    if (gameOver) return;
    if (document.getElementById('User').innerText !== "User") {
        let userNum = Math.floor(Math.random() * 101);
        let compNum = Math.floor(Math.random() * 101);
        document.getElementById('userNumber').innerText = userNum;
        document.getElementById('computerNumber').innerText = compNum;
        if (compNum > userNum) {
            computerScore++;
            addHistory(`Комп’ютер отримав ${compNum}, ${document.getElementById('User').innerText} отримав ${userNum} — переміг Комп’ютер`);
        } else if (compNum < userNum) {
            userScore++;
            addHistory(`${document.getElementById('User').innerText} отримав ${userNum}, комп’ютер ${compNum} — переміг користувач`);
        } else {
            userScore++;
            computerScore++;
            addHistory(`Нічия: ${userNum} = ${compNum}`);
        }
        document.getElementById('userPoint').innerText = userScore;
        document.getElementById('computerPoint').innerText = computerScore;
    }
    if (userScore === 3 || computerScore === 3) {
        gameOver = true;
        addHistory(`Гра завершена! Переможець: ${userScore === 3 ? document.getElementById('User').innerText : "Комп’ютер"}`);
    }
}
generateBtn.addEventListener('click', func);
newGameBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    gameOver = false;
    document.getElementById('userPoint').innerText = 0;
    document.getElementById('computerPoint').innerText = 0;
    document.getElementById('userNumber').innerText = 0;
    document.getElementById('computerNumber').innerText = 0;
    document.getElementById("history").innerHTML = "";
});

const word = document.getElementById('word');
const incorrectLetters = document.getElementById('incorrect-letters');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const playBtn = document.getElementById('play-btn');
const notification = document.getElementById('notification-container');
const figureParts = document.querySelectorAll('.figure-part');

const words = ["camera", "arrangement", "stairs", "image", "hospital", "support", "tales", "tight", "exchange", "whatever", "brought", "office", "sound", "over", "chest", "temperature", "while", "wore", "dig", "setting", "speak", "leaving", "pattern", "eat", "language", "belong", "cold", "village", "sides", "word", "fireplace", "essential", "double", "religious", "potatoes", "having", "available", "order", "difficult", "sail", "course", "bear"]

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLettersArray = [];
const incorrectLettersArray = [];

function displayWord() {
    word.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                ${correctLettersArray.includes(letter) ? letter : ''}
                </span>
                `
            )
            .join('')
        }
    `;

    const innerWord = word.innerText.replace(/\n/g, '');
    console.log(innerWord);
    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulation! You Won!'
        popup.style.display = 'flex';
    };

};

function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
};

function updateIncorrectLetter(){
    incorrectLetters.innerHTML = `
        ${incorrectLettersArray.length > 0 ? '<p>Incorrect Letters</p>' : ''}
        ${incorrectLettersArray.map(letter => `<span>${letter}</span>`)}
    `;

    figureParts.forEach((part, index) => {
        const error = incorrectLettersArray.length;

        if (index < error){
            part.style.display = 'block';
        } else {
            part.style.display = "none";
        }
    });

    if(incorrectLettersArray.length === figureParts.length){
        finalMessage.innerText = 'You Lost!'
        popup.style.display = 'flex';
    }
};

function playAgain(){
    correctLettersArray.splice(0);
    incorrectLettersArray.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    updateIncorrectLetter()

    popup.style.display = 'none';

    displayWord();
};

window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {

            if (!correctLettersArray.includes(letter)) {
                correctLettersArray.push(letter);

                displayWord();
            } else {
                showNotification();
            }

        } else {

            if(!incorrectLettersArray.includes(letter)){
                incorrectLettersArray.push(letter);

                updateIncorrectLetter();
            } else {
                showNotification();
            }
        }
    }
});

playBtn.addEventListener('click', playAgain);

displayWord();

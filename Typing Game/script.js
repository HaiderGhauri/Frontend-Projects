const word = document.getElementById('word');
const userWord = document.getElementById('user-word')
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const settingsBtn = document.getElementById('settings-btn');
const settingsContainer = document.getElementById('settings');
const settingsForm = document.getElementById('form');
const difficultyDropdown = document.getElementById('difficulty');
const gameoverContainer = document.getElementById('gameover');

let score = 0;

let time = 10;

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

difficultyDropdown.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

let displayWord;

userWord.focus();

function fetchWords(){
    fetch('https://random-word-api.herokuapp.com/word?number=200&length=8')
    .then (res => res.json())
    .then (data => {
        const apiWords = data;
        let wordIndex = Math.floor(Math.random() * apiWords.length);
        displayWord = apiWords[wordIndex];
        word.innerText = `${displayWord}`
    })
};

function incrementSCore(){
    score++;
    scoreElement.innerHTML = score;
};

const timeInterval = setInterval(decrementTime, 1000);

function decrementTime(){
    time--;

    timeElement.innerHTML = time;

    if( time === 0 ){
        clearInterval(timeInterval)

        gameover();
    };
   
};

function gameover(){
    gameoverContainer.style.display = 'flex';

    gameoverContainer.innerHTML = `
        <h1>Time up!</h1>
        <p>Good game! Your score is ${score}</p>
        <button onclick="location.reload()" class="btn">Play Agian</button>
    `
}

userWord.addEventListener('input', e =>{
    const userInput = e.target.value;

    if( userInput === displayWord) {
        fetchWords();

        incrementSCore();
        userWord.value = '';

        if(difficulty === 'easy'){
            time += 5;
        } else if (difficulty === 'medium'){
            time += 4;
        } else{
            time += 3;
        }

        timeElement.innerHTML = time;
    }
});
userWord.addEventListener('focus', () => settingsContainer.classList.add('hide'));

settingsBtn.addEventListener('click', () => settingsContainer.classList.toggle('hide'));

difficultyDropdown.addEventListener('change', e => {
    difficulty = e.target.value;

    localStorage.setItem('difficulty', difficulty);
})

fetchWords();

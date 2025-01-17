const addCardBtn = document.getElementById('add-card');
const clearCardsBtn = document.getElementById('clear-card');
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev-btn');
const currentCardNav = document.getElementById('current-card');
const nextBtn = document.getElementById('next-btn');
const cancelBtn = document.getElementById('cancel-btn');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const addCardSubmitBtn = document.getElementById('add-card-btn');
const addCardContainer = document.getElementById('add-card-container');

let currentCardID = 0;

const cards = [];

const cardData = getCardData();
// const cardData = [
//     {
//         question: 'What is React?',
//         answer: 'React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more seamless. It is maintained by Meta and a community of individual developers and companies'
//     },
//     {
//         question: 'What is HTML?',
//         answer: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript, a programming language.'
//     },
//     {
//         question: 'What is MongoDB',
//         answer: 'MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. Released in February 2009 by 10gen, it supports features like sharding, replication, and ACID transactions.'
//     }
// ];

function saveCardData(cardData){
    localStorage.setItem('cards', JSON.stringify(cardData));
    window.location.reload();
};

function getCardData(){
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}

function updateCurrentCardNav(){
    currentCardNav.innerText = `${currentCardID + 1} / ${cards.length}`;
};

function generateCards(){
    cardData.forEach( (data, index) => generateCard(data, index));
};

function generateCard(data, index){
    const card = document.createElement('div');
    card.classList.add('card');
    if (index === 0){
        card.classList.add('active');
    }

    card.innerHTML = `
        <div class="inside-card">
            <div class="card-front">
                <p>${data.question}</p>
            </div>

            <div class="card-back">
                <p>${data.answer}</p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'));
    cards.push(card);
    cardsContainer.appendChild(card);

    updateCurrentCardNav();
};

nextBtn.addEventListener('click', () => {
    cards[currentCardID].className = 'card left';

    currentCardID++;
    if ( currentCardID > cards.length - 1 ){
        currentCardID = 0
    }

    cards[currentCardID].className = 'card active';

    updateCurrentCardNav();
});

prevBtn.addEventListener('click', () => {
    cards[currentCardID].className = 'card right';

    currentCardID--;
    if ( currentCardID < 0 ){
        currentCardID = cards.length - 1
    }

    cards[currentCardID].className = 'card active';

    updateCurrentCardNav();
});

addCardBtn.addEventListener('click', () => {
    addCardContainer.classList.add('active');
    addCardContainer.style.zIndex = '100';
});

cancelBtn.addEventListener('click', () => {
    addCardContainer.classList.remove('active');
    addCardContainer.style.zIndex = '-1';
});

addCardSubmitBtn.addEventListener('click', () => {
    const question = questionInput.value;
    const answer = answerInput.value;

    if( question.trim() && answer.trim()){
        const nextCard = {question, answer};

        generateCard(nextCard);

        questionInput.value = '';
        answerInput.value = '';

        addCardContainer.classList.remove('active');

        cardData.push(nextCard);

        saveCardData(cardData);
    }

});

clearCardsBtn.addEventListener('click', () => {
    localStorage.clear();

    cardsContainer.innerHTML = '';

    window.location.reload();
})

generateCards();






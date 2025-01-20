const main = document.getElementById('main');
const selectVoices = document.getElementById('voices');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const customText = document.getElementById('text');
const readBtn = document.getElementById('read');
const customTextDiv = document.getElementById('custom-text');


const data = [
    {
        image: './image/angry.jpg',
        text: "I am angry"
    },
    {
        image: './image/drink.jpg',
        text: "I am thirsty"
    },
    {
        image: './image/food.jpg',
        text: "I am hungry"
    },
    {
        image: './image/grandma.jpg',
        text: "I want to go to Grandma's"
    },
    {
        image: './image/happy.jpg',
        text: "I am happy"
    },
    {
        image: './image/home.jpg',
        text: "I want to go home"
    },
    {
        image: './image/hurt.jpg',
        text: "I am hurt"
    },
    {
        image: './image/outside.jpg',
        text: "I want to go outside"
    },
    {
        image: './image/sad.jpg',
        text: "I am sad"
    },
    {
        image: './image/scared.jpg',
        text: "I am scared"
    },
    {
        image: './image/school.jpg',
        text: "I want to go to school"
    },
    {
        image: './image/tired.jpg',
        text: "I am tired"
    }
];

let voicesBackup = [];

data.forEach(createBox);

function createBox(imageObj) {
    const box = document.createElement('div');

    const { image, text } = imageObj;

    box.classList.add('box');

    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="imageInfo">${text}</p>
    `;

    box.addEventListener('click', () => {
        setMessage(text);
        speakText();
    })

    main.appendChild(box);
};

const message = new SpeechSynthesisUtterance();

function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
        return;
    }

    let voices = speechSynthesis.getVoices();
    voicesBackup = voices;

    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
            option.textContent += " — DEFAULT";
        }

        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        selectVoices.appendChild(option);
    }
};

populateVoiceList();
if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
};

function setMessage(text){
    message.text = text;
};

function speakText(){
    speechSynthesis.speak(message);
};

function setVoice(e){
    message.voice = voicesBackup.find(voice => voice.name === e.target.value);
};

toggleBtn.addEventListener('click', () => {
    customTextDiv.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
    customTextDiv.classList.remove('show');
});

speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

selectVoices.addEventListener('change', setVoice);


readBtn.addEventListener('click', () => {
    setMessage(customText.value);
    speakText();
})

/*function mostrarAlerta(nodo){
    alert("hiciste click en: " + nodo);
}

let verbs = document.querySelector("#p-1");
let contador = document.querySelector("#p-2");

verbs.addEventListener("click", () => {
    mostrarAlerta("verbos");
});

contador.addEventListener("click", () => {
    mostrarAlerta("contador");
});

const verbsarray = [
    "Dead",
    "Close"
];

let verbsContainer = document.getElementById("verbsContainer");
verbsarray.push("love");
verbsContainer.innerHTML = "<pre>" + verbsarray + "</pre>"*/

const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('secondt-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRigthCounter = document.getElementById('all-right-counter');
const verbsContainer = document.getElementById('verbs-container');

const positionOfVerbs = verbs.lenght;

let answerRoullete = [0,1,1,1];
let numberOfVerbs = [];
let rightAnswerCounter;
let allRightAnswers;

next.addEventListener('click', () => {
    //ponerVerbo();
    next.style.display = 'none';
});

function ponerVerbo(){
    //verbsContainer.innerHTML = "<h1>Deposita 200 bitcoins para jugar</h1>";
}

makeRandomList();

let lastPosition = positionOfVerbs = length - 1;

function makeRandomList(){
    for (let i = 0; i < numberOfVerbs.length; i++) {
        positionOfVerbs.push(i);
    }
    positionOfVerbs = positionOfVerbs.sort(()=>Math.random()-0.5);
}

function buttonEffect(itsRight, button){
    if (itsRight) {
        button.classList().add('right-answer');
        setTimeout(function(){
            button.classList.remove('right-answer');
        }, 1000);
        rightAnswerCounter = rightAnswerCounter + 1;
    } else {
        button.classList().add('wrong-answer');
        setTimeout(function(){
            button.classList.remove('wrong-answer');
        }, 1000);
    }

    setTimeout(()=>{
        ponerVerbo();
    }, 1000);
}

first.addEventListener("click", () => {
    buttonEffect(isItRight_(first.innerHTML), this);
});

second.addEventListener("click", () => {
    buttonEffect(isItRight_(first.innerHTML), this);
});

third.addEventListener("click", () => {
    buttonEffect(isItRight_(first.innerHTML), this);
});

fourth.addEventListener("click", () => {
    buttonEffect(isItRight_(first.innerHTML), this);
});

function suffleAnswers(array){
    let numberOfAnswersButtons = array.lenght;
    let randomIndex;

    while(numberOfAnswersButtons != 0){
        randomIndex = Math.floor(Math.random()*numberOfAnswersButtons);
        [array[numberOfAnswersButtons],array[randomIndex]] = [array[randomIndex], array[numberOfAnswersButtons]];
    }
}

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

//const numberOfVerbs = verbs.lenght;

let answerRoullete = [0,1,1,1];
let everyNumberOfVerb = [];
let rightAnswer;
let allRightAnswers;

next.addEventListener('click', () => {
    ponerVerbo();
    next.style.display = 'none';
});

function ponerVerbo(){
    verbsContainer.innerHTML = "<h1>Deposita 200 bitcoins para jugar</h1>";
}







const showVerb = document.querySelector('#showVerb');
const showImage = document.querySelector('#showImage');
const showAudio = document.querySelector('#showAudio');

const first = document.querySelector('#first-verb');
const second = document.querySelector('#second-verb');
const third = document.querySelector('#third-verb');
const fourth = document.querySelector('#fourth-verb');

const next = document.querySelector('#next');
const verbsCounter = document.querySelector('#verbs-counter');
const allRightCounter = document.querySelector('#all-right-counter');
const allWrongCounter = document.querySelector('#all-wrong-counter');
const verbsContainer = document.querySelector('#verbs-container');
const restartGame = document.querySelector("#restart");

const totalNumberOfVerbs = verbs.length;

let answerRoullete = [0,1,1,1];
let numberOfVerbs = [];
let rightAnswerCounter = 0; //no estaba inicializada 
let wrongAnswerCounter = 0; 
let rightAnswer;

next.addEventListener('click', () => {
    ponerVerbo();
    next.style.display = 'none';
    restartGame.style.display = "inline-block";
});

restartGame.addEventListener("click", () => {
    location.reload();
});

makeRandomList();

let lastPosition = numberOfVerbs.length-1; //corregido


function makeRandomList(){
    for (var i = 0; i < totalNumberOfVerbs; i++) { //corregido
        numberOfVerbs.push(i); //corregido
    }
   numberOfVerbs = numberOfVerbs.sort(() => Math.random() - 0.5);//corregido
}

function buttonEffect(itsRight, button){
    if (itsRight) {
        button.classList.add('right-answer');
        setTimeout(function(){
            button.classList.remove('right-answer');
        }, 1000);
        rightAnswerCounter = rightAnswerCounter + 1;
    } else {
        button.classList.add('wrong-answer');
        setTimeout(function(){
            button.classList.remove('wrong-answer');
        }, 1000);
        wrongAnswerCounter = wrongAnswerCounter + 1;
    }

    setTimeout(()=>{
        ponerVerbo();
    }, 1000);
}

first.addEventListener("click", function(){
    buttonEffect(isItRight_(first.innerHTML), this);
});

second.addEventListener("click", function(){
    buttonEffect(isItRight_(second.innerHTML), this);
});

third.addEventListener("click", function(){
    buttonEffect(isItRight_(third.innerHTML), this);
});

fourth.addEventListener("click", function(){
    buttonEffect(isItRight_(fourth.innerHTML), this);
}); 

function suffleAnswers(array){
    let numberOfAnswersButtons = array.length;
    let randomIndex;

    while(numberOfAnswersButtons != 0){
        randomIndex = Math.floor(Math.random()*numberOfAnswersButtons);
        numberOfAnswersButtons--;
        [array[numberOfAnswersButtons],array[randomIndex]] = [array[randomIndex], array[numberOfAnswersButtons]];
    }

    return array; //se agregó
}

function isItRight_(answer){
    return answer == rightAnswer?true:false;
}

function randomVerb(notThisOne){
    theOne = Math.floor(Math.random()*verbos.length);
    return theOne == notThisOne?randomVerb(notThisOne):theOne;
}

function ponerVerbo(){
    answerRoullete = suffleAnswers(answerRoullete);
    let randomPosition = numberOfVerbs[lastPosition];
    let imgText =  `<img src='img/${verbs[randomPosition]}.jpg' height='140px' width='100px'>`;

    first.classList.add("btn", "btn-outline-primary", "btn-md");
    second.classList.add("btn", "btn-outline-primary", "btn-md");
    third.classList.add("btn", "btn-outline-primary", "btn-md");
    fourth.classList.add("btn", "btn-outline-primary", "btn-md");

    if (lastPosition >= 0) {
        var just_position = lastPosition + 1;
        verbsCounter.innerHTML = ` ${just_position} / ${totalNumberOfVerbs}`; //corregido
        allRightCounter.innerHTML = "Right Answers: " + rightAnswerCounter;
        allWrongCounter.innerHTML = "Wrong Answers: " + wrongAnswerCounter;
        showVerb.innerHTML = verbs[randomPosition];
        showImage.innerHTML = imgText;
        showAudio.src = `audio/${verbs[randomPosition]}.mp3`;
        showAudio.play();

        first.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerb(randomPosition)];
        second.innerHTML = !answerRoullete[1]?verbos[randomPosition]:verbos[randomVerb(randomPosition)];
        third.innerHTML = !answerRoullete[2]?verbos[randomPosition]:verbos[randomVerb(randomPosition)];
        fourth.innerHTML = !answerRoullete[3]?verbos[randomPosition]:verbos[randomVerb(randomPosition)];

        rightAnswer = verbos[randomPosition];
        lastPosition = lastPosition-1;
    } else {
        verbsCounter.innerHTML = `0 / ${totalNumberOfVerbs}`; //corregido
        allRightCounter.innerHTML = `Right Answers: ${rightAnswerCounter}`;
        allWrongCounter.innerHTML = `Wrong Answers: ${wrongAnswerCounter}`;
        showVerb.innerHTML = "Thank you!";
        verbsContainer.innerHTML = "";
    }
}
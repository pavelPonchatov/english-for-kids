/* eslint-disable import/no-cycle */
import mainPageRender from './mainPageRender';

const audio = document.querySelector('.card__audio--play');
const audioError = document.querySelector('.error__audio');
const audioSuccess = document.querySelector('.success__audio');
const audioFinishWin = document.querySelector('.finish-win__audio');
const audioFinishLose = document.querySelector('.finish-lose__audio');
const main = document.querySelector('.main');
const score = document.querySelector('.score');
const soundArr = [];
const scoreArr = [];
let currentError = 0;


audioError.setAttribute('src', './src/assets/audio/error.mp3');
audioSuccess.setAttribute('src', './src/assets/audio/correct.mp3');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function launchHandler() {
  const startBtn = document.querySelector('.start-game');
  startBtn.classList.add('restart');
  localStorage.setItem('isStart', true);

  const currentIndex = getRandomInt(soundArr.length);
  localStorage.setItem('currentIndex', currentIndex);
  audio.setAttribute('src', `${soundArr[currentIndex].audioSrc}`);
  audio.play();
}

function repeatHandler() {
  const currentIndex = localStorage.getItem('currentIndex');
  audio.setAttribute('src', `${soundArr[currentIndex].audioSrc}`);
  audio.play();
}

function generateSound() {
  const currentIndex = getRandomInt(soundArr.length);
  const wrapperFinish = document.createElement('div');
  const smile = document.createElement('img');
  const smileText = document.createElement('h2');
  wrapperFinish.classList.add('wrapper__finish');
  wrapperFinish.append(smileText);
  wrapperFinish.append(smile);
  localStorage.setItem('currentIndex', currentIndex);
  if (soundArr.length === 0) {
    main.innerHTML = '';
    score.innerHTML = '';
    if (currentError === 0) {
      smile.setAttribute('src', './src/assets/img/success.jpg');
      smileText.textContent = 'Win';
      document.querySelector('.switch').style.display = 'none';
      audioFinishWin.setAttribute('src', './src/assets/audio/success.mp3');
      main.append(wrapperFinish);
      audioFinishWin.play();

      setTimeout(mainPageRender, 2000);
      scoreArr.length = 0;
    } else if (currentError !== 0) {
      smile.setAttribute('src', './src/assets/img/failure.jpg');
      smileText.textContent = `Error ${currentError}`;
      document.querySelector('.switch').style.display = 'none';
      audioFinishLose.setAttribute('src', './src/assets/audio/failure.mp3');
      main.append(wrapperFinish);
      audioFinishLose.play();

      setTimeout(mainPageRender, 2000);
      scoreArr.length = 0;
    }
  } else {
    audio.setAttribute('src', `${soundArr[currentIndex].audioSrc}`);
    audio.play();
  }
}


localStorage.setItem('isStart', false);
function gameStart() {
  const startBtn = document.querySelector('.start-game');


  const starWin = document.createElement('img');
  starWin.setAttribute('src', './src/assets/img/star-win.svg');

  const starLose = document.createElement('img');
  starLose.setAttribute('src', './src/assets/img/star.svg');

  startBtn.addEventListener('click', launchHandler);


  document.addEventListener('click', (e) => {
    soundArr.forEach((el) => {
      if (e.target.parentElement === null) {
        console.log(e.target);
      }
      if (e.target.parentElement.getAttribute('data-play') === el.id && audio.getAttribute('src') === el.audioSrc) {
        document.querySelector('.start-game').removeEventListener('click', launchHandler);
        document.querySelector('.start-game').addEventListener('click', repeatHandler);
        scoreArr.push(starWin.cloneNode(true));
        scoreArr.forEach((star) => {
          score.append(star);
        });
        e.target.parentElement.classList.add('disablead');

        audioSuccess.play();
        soundArr.splice(localStorage.getItem('currentIndex'), 1);
        generateSound();
      } else if (e.target.parentElement.getAttribute('data-play') === el.id && localStorage.getItem('isStart') === 'true') {
        document.querySelector('.start-game').removeEventListener('click', launchHandler);
        document.querySelector('.start-game').addEventListener('click', repeatHandler);
        scoreArr.push(starLose.cloneNode(true));
        currentError += 1;
        audioError.play();
        scoreArr.forEach((star) => {
          score.append(star);
        });
      }
    });
  });
}

function generatePlayCard(array) {
  const playCardElement = document.querySelector('#train-card--template').content.querySelector('.play__card').cloneNode(true);
  const startGame = document.querySelector('#train-card--template').content.querySelector('.start-game').cloneNode(true);
  const arrayCards = array;
  soundArr.length = 0;
  scoreArr.length = 0;
  main.innerHTML = '';

  const playCardArr = [];
  for (let i = 0; i < arrayCards.length; i += 1) {
    playCardArr.push(playCardElement.cloneNode(true));

    if (soundArr.length < arrayCards.length) {
      soundArr.push(({ id: arrayCards[i].word, audioSrc: arrayCards[i].audioSrc }));
    }
    playCardArr[i].querySelector('.play__img').setAttribute('src', `${arrayCards[i].image}`);
    playCardArr[i].setAttribute('data-play', `${arrayCards[i].word}`);

    main.append(playCardArr[i]);
  }


  main.append(startGame);

  gameStart();
}

export default generatePlayCard;

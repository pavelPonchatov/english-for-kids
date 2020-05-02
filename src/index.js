/* eslint-disable default-case */
import cards from './js/card';
import headerAction from './js/header';
import generatePlayCard from './js/generatePlay';
import { generateTrainCard, trainCardReverse } from './js/generateTrain';
import switchChangeArray from './js/switchChange';
import mainPageRender from './js/mainPageRender';


localStorage.setItem('isPlay', false);


headerAction();


document.addEventListener('click', (e) => {
  switch (e.target.getAttribute('id') || e.target.parentElement.getAttribute('id')) {
    case 'mainPage':
      mainPageRender();
      break;
    case 'actionA':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', switchChangeArray[0]);
      if (localStorage.getItem('isPlay') === 'false') {
        generateTrainCard(cards[1]);
        trainCardReverse();
      } else {
        generatePlayCard(cards[1]);
      }
      break;
    case 'actionB':
      document.querySelector('.switch').addEventListener('change', switchChangeArray[1]);
      document.querySelector('.score').innerHTML = '';
      if (localStorage.getItem('isPlay') === 'false') {
        generateTrainCard(cards[2]);
        trainCardReverse();
      } else {
        generatePlayCard(cards[2]);
      }
      break;
    case 'actionC':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', switchChangeArray[6]);
      document.querySelector('.score').innerHTML = '';
      if (localStorage.getItem('isPlay') === 'false') {
        generateTrainCard(cards[7]);
        trainCardReverse();
      } else {
        generatePlayCard(cards[7]);
      }
      break;
    case 'adjective':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', switchChangeArray[7]);
      document.querySelector('.score').innerHTML = '';
      if (localStorage.getItem('isPlay') === 'false') {
        generateTrainCard(cards[8]);
        trainCardReverse();
      } else {
        generatePlayCard(cards[8]);
      }
      break;
    case 'animalA':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', switchChangeArray[2]);
      document.querySelector('.score').innerHTML = '';
      if (localStorage.getItem('isPlay') === 'false') {
        generateTrainCard(cards[3]);
        trainCardReverse();
      } else {
        generatePlayCard(cards[3]);
      }
      break;
    case 'animalB':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', switchChangeArray[3]);
      document.querySelector('.score').innerHTML = '';
      if (localStorage.getItem('isPlay') === 'false') {
        generateTrainCard(cards[4]);
        trainCardReverse();
      } else {
        generatePlayCard(cards[4]);
      }
      break;
    case 'clothes':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', switchChangeArray[4]);
      document.querySelector('.score').innerHTML = '';
      if (localStorage.getItem('isPlay') === 'false') {
        generateTrainCard(cards[5]);
        trainCardReverse();
      } else {
        generatePlayCard(cards[5]);
      }
      break;
    case 'emotion':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', switchChangeArray[5]);
      document.querySelector('.score').innerHTML = '';
      if (localStorage.getItem('isPlay') === 'false') {
        generateTrainCard(cards[6]);
        trainCardReverse();
      } else {
        generatePlayCard(cards[6]);
      }
      break;
  }
});

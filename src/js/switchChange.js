import cards from './card';
import generatePlayCard from './generatePlay';
import { generateTrainCard, trainCardReverse } from './generateTrain';

function switchChange1() {
  if (localStorage.getItem('isPlay') === 'true') {
    generatePlayCard(cards[1]);
  } else {
    generateTrainCard(cards[1]);
    trainCardReverse();
  }
}
function switchChange2() {
  if (localStorage.getItem('isPlay') === 'true') {
    generatePlayCard(cards[2]);
  } else {
    generateTrainCard(cards[2]);
    trainCardReverse();
  }
}
function switchChange3() {
  if (localStorage.getItem('isPlay') === 'true') {
    generatePlayCard(cards[3]);
  } else {
    generateTrainCard(cards[3]);
    trainCardReverse();
  }
}
function switchChange4() {
  if (localStorage.getItem('isPlay') === 'true') {
    generatePlayCard(cards[4]);
  } else {
    generateTrainCard(cards[4]);
    trainCardReverse();
  }
}
function switchChange5() {
  if (localStorage.getItem('isPlay') === 'true') {
    generatePlayCard(cards[5]);
  } else {
    generateTrainCard(cards[5]);
    trainCardReverse();
  }
}
function switchChange6() {
  if (localStorage.getItem('isPlay') === 'true') {
    generatePlayCard(cards[6]);
  } else {
    generateTrainCard(cards[6]);
    trainCardReverse();
  }
}
function switchChange7() {
  if (localStorage.getItem('isPlay') === 'true') {
    generatePlayCard(cards[6]);
  } else {
    generateTrainCard(cards[6]);
    trainCardReverse();
  }
}
function switchChange8() {
  if (localStorage.getItem('isPlay') === 'true') {
    generatePlayCard(cards[7]);
  } else {
    generateTrainCard(cards[8]);
    trainCardReverse();
  }
}

const switchChangeArray = [switchChange1, switchChange2, switchChange3, switchChange4,
  switchChange5, switchChange6, switchChange7, switchChange8,
];
export default switchChangeArray;

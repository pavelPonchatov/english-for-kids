/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/card */ "./src/js/card.js");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var _js_generatePlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/generatePlay */ "./src/js/generatePlay.js");
/* harmony import */ var _js_generateTrain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/generateTrain */ "./src/js/generateTrain.js");
/* harmony import */ var _js_switchChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/switchChange */ "./src/js/switchChange.js");
/* harmony import */ var _js_mainPageRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/mainPageRender */ "./src/js/mainPageRender.js");
/* eslint-disable default-case */






localStorage.setItem('isPlay', false);
Object(_js_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.addEventListener('click', function (e) {
  switch (e.target.getAttribute('id') || e.target.parentElement.getAttribute('id')) {
    case 'mainPage':
      Object(_js_mainPageRender__WEBPACK_IMPORTED_MODULE_5__["default"])();
      break;

    case 'actionA':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', _js_switchChange__WEBPACK_IMPORTED_MODULE_4__["default"][0]);

      if (localStorage.getItem('isPlay') === 'false') {
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["generateTrainCard"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][1]);
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["trainCardReverse"])();
      } else {
        Object(_js_generatePlay__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][1]);
      }

      break;

    case 'actionB':
      document.querySelector('.switch').addEventListener('change', _js_switchChange__WEBPACK_IMPORTED_MODULE_4__["default"][1]);
      document.querySelector('.score').innerHTML = '';

      if (localStorage.getItem('isPlay') === 'false') {
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["generateTrainCard"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][2]);
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["trainCardReverse"])();
      } else {
        Object(_js_generatePlay__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][2]);
      }

      break;

    case 'actionC':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', _js_switchChange__WEBPACK_IMPORTED_MODULE_4__["default"][6]);
      document.querySelector('.score').innerHTML = '';

      if (localStorage.getItem('isPlay') === 'false') {
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["generateTrainCard"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][7]);
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["trainCardReverse"])();
      } else {
        Object(_js_generatePlay__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][7]);
      }

      break;

    case 'adjective':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', _js_switchChange__WEBPACK_IMPORTED_MODULE_4__["default"][7]);
      document.querySelector('.score').innerHTML = '';

      if (localStorage.getItem('isPlay') === 'false') {
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["generateTrainCard"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][8]);
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["trainCardReverse"])();
      } else {
        Object(_js_generatePlay__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][8]);
      }

      break;

    case 'animalA':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', _js_switchChange__WEBPACK_IMPORTED_MODULE_4__["default"][2]);
      document.querySelector('.score').innerHTML = '';

      if (localStorage.getItem('isPlay') === 'false') {
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["generateTrainCard"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][3]);
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["trainCardReverse"])();
      } else {
        Object(_js_generatePlay__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][3]);
      }

      break;

    case 'animalB':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', _js_switchChange__WEBPACK_IMPORTED_MODULE_4__["default"][3]);
      document.querySelector('.score').innerHTML = '';

      if (localStorage.getItem('isPlay') === 'false') {
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["generateTrainCard"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][4]);
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["trainCardReverse"])();
      } else {
        Object(_js_generatePlay__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][4]);
      }

      break;

    case 'clothes':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', _js_switchChange__WEBPACK_IMPORTED_MODULE_4__["default"][4]);
      document.querySelector('.score').innerHTML = '';

      if (localStorage.getItem('isPlay') === 'false') {
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["generateTrainCard"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][5]);
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["trainCardReverse"])();
      } else {
        Object(_js_generatePlay__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][5]);
      }

      break;

    case 'emotion':
      document.querySelector('.score').innerHTML = '';
      document.querySelector('.switch').addEventListener('change', _js_switchChange__WEBPACK_IMPORTED_MODULE_4__["default"][5]);
      document.querySelector('.score').innerHTML = '';

      if (localStorage.getItem('isPlay') === 'false') {
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["generateTrainCard"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][6]);
        Object(_js_generateTrain__WEBPACK_IMPORTED_MODULE_3__["trainCardReverse"])();
      } else {
        Object(_js_generatePlay__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_card__WEBPACK_IMPORTED_MODULE_0__["default"][6]);
      }

      break;
  }
});

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cards = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'], [{
  word: 'cry',
  translation: 'плакать',
  image: './src/assets/img/cry.jpg',
  audioSrc: './src/assets/audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: './src/assets/img/dance.jpg',
  audioSrc: './src/assets/audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: './src/assets/img/dive.jpg',
  audioSrc: './src/assets/audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: './src/assets/img/draw.jpg',
  audioSrc: './src/assets/audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: './src/assets/img/fish.jpg',
  audioSrc: './src/assets/audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: './src/assets/img/fly.jpg',
  audioSrc: './src/assets/audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: './src/assets/img/hug.jpg',
  audioSrc: './src/assets/audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: './src/assets/img/jump.jpg',
  audioSrc: './src/assets/audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: './src/assets/img/open.jpg',
  audioSrc: './src/assets/audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: './src/assets/img/play.jpg',
  audioSrc: './src/assets/audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: './src/assets/img/point.jpg',
  audioSrc: './src/assets/audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: './src/assets/img/ride.jpg',
  audioSrc: './src/assets/audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: './src/assets/img/run.jpg',
  audioSrc: './src/assets/audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: './src/assets/img/sing.jpg',
  audioSrc: './src/assets/audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: './src/assets/img/skip.jpg',
  audioSrc: './src/assets/audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: './src/assets/img/swim.jpg',
  audioSrc: './src/assets/audio/swim.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: './src/assets/img/cat.jpg',
  audioSrc: './src/assets/audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: './src/assets/img/chick.jpg',
  audioSrc: './src/assets/audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: './src/assets/img/chicken.jpg',
  audioSrc: './src/assets/audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: './src/assets/img/dog.jpg',
  audioSrc: './src/assets/audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: './src/assets/img/horse.jpg',
  audioSrc: './src/assets/audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: './src/assets/img/pig.jpg',
  audioSrc: './src/assets/audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: './src/assets/img/rabbit.jpg',
  audioSrc: './src/assets/audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: './src/assets/img/sheep.jpg',
  audioSrc: './src/assets/audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: './src/assets/img/bird.jpg',
  audioSrc: './src/assets/audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: './src/assets/img/fish1.jpg',
  audioSrc: './src/assets/audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: './src/assets/img/frog.jpg',
  audioSrc: './src/assets/audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: './src/assets/img/giraffe.jpg',
  audioSrc: './src/assets/audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: './src/assets/img/lion.jpg',
  audioSrc: './src/assets/audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: './src/assets/img/mouse.jpg',
  audioSrc: './src/assets/audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: './src/assets/img/turtle.jpg',
  audioSrc: './src/assets/audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: './src/assets/img/dolphin.jpg',
  audioSrc: './src/assets/audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: './src/assets/img/skirt.jpg',
  audioSrc: './src/assets/audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: './src/assets/img/pants.jpg',
  audioSrc: './src/assets/audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: './src/assets/img/blouse.jpg',
  audioSrc: './src/assets/audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: './src/assets/img/dress.jpg',
  audioSrc: './src/assets/audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: './src/assets/img/boot.jpg',
  audioSrc: './src/assets/audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: './src/assets/img/shirt.jpg',
  audioSrc: './src/assets/audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: './src/assets/img/coat.jpg',
  audioSrc: './src/assets/audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: './src/assets/img/shoe.jpg',
  audioSrc: './src/assets/audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: './src/assets/img/sad.jpg',
  audioSrc: './src/assets/audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: './src/assets/img/angry.jpg',
  audioSrc: './src/assets/audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: './src/assets/img/happy.jpg',
  audioSrc: './src/assets/audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: './src/assets/img/tired.jpg',
  audioSrc: './src/assets/audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: './src/assets/img/surprised.jpg',
  audioSrc: './src/assets/audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: './src/assets/img/scared.jpg',
  audioSrc: './src/assets/audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: './src/assets/img/smile.jpg',
  audioSrc: './src/assets/audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: './src/assets/img/laugh.jpg',
  audioSrc: './src/assets/audio/laugh.mp3'
}], [{
  word: 'argue',
  translation: 'спорить',
  image: './src/assets/img/argue.jpg',
  audioSrc: './src/assets/audio/argue.mp3'
}, {
  word: 'build',
  translation: 'строить',
  image: './src/assets/img/build.jpg',
  audioSrc: './src/assets/audio/build.mp3'
}, {
  word: 'carrry',
  translation: 'нести',
  image: './src/assets/img/carry.jpg',
  audioSrc: './src/assets/audio/carry.mp3'
}, {
  word: 'catch',
  translation: 'ловить',
  image: './src/assets/img/catch.jpg',
  audioSrc: './src/assets/audio/catch.mp3'
}, {
  word: 'drive',
  translation: 'водить машину',
  image: './src/assets/img/drive.jpg',
  audioSrc: './src/assets/audio/drive.mp3'
}, {
  word: 'drop',
  translation: 'падать',
  image: './src/assets/img/drop.jpg',
  audioSrc: './src/assets/audio/drop.mp3'
}, {
  word: 'pull',
  translation: 'тянуть',
  image: './src/assets/img/pull.jpg',
  audioSrc: './src/assets/audio/pull.mp3'
}, {
  word: 'push',
  translation: 'толкать',
  image: './src/assets/img/push.jpg',
  audioSrc: './src/assets/audio/push.mp3'
}], [{
  word: 'big',
  translation: 'большой',
  image: './src/assets/img/big.jpg',
  audioSrc: './src/assets/audio/big.mp3'
}, {
  word: 'small',
  translation: 'маленький',
  image: './src/assets/img/small.jpg',
  audioSrc: './src/assets/audio/small.mp3'
}, {
  word: 'fast',
  translation: 'быстрый',
  image: './src/assets/img/fast.jpg',
  audioSrc: './src/assets/audio/fast.mp3'
}, {
  word: 'slow',
  translation: 'медленный',
  image: './src/assets/img/slow.jpg',
  audioSrc: './src/assets/audio/slow.mp3'
}, {
  word: 'friendly',
  translation: 'дружелюбный',
  image: './src/assets/img/friendly.jpg',
  audioSrc: './src/assets/audio/friendly.mp3'
}, {
  word: 'unfriendly',
  translation: 'недружелюбный',
  image: './src/assets/img/unfriendly.jpg',
  audioSrc: './src/assets/audio/unfriendly.mp3'
}, {
  word: 'young',
  translation: 'молодой',
  image: './src/assets/img/young.jpg',
  audioSrc: './src/assets/audio/young.mp3'
}, {
  word: 'old',
  translation: 'старый',
  image: './src/assets/img/old.jpg',
  audioSrc: './src/assets/audio/old.mp3'
}]];
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/generatePlay.js":
/*!********************************!*\
  !*** ./src/js/generatePlay.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainPageRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPageRender */ "./src/js/mainPageRender.js");
/* eslint-disable import/no-cycle */

var audio = document.querySelector('.card__audio--play');
var audioError = document.querySelector('.error__audio');
var audioSuccess = document.querySelector('.success__audio');
var audioFinishWin = document.querySelector('.finish-win__audio');
var audioFinishLose = document.querySelector('.finish-lose__audio');
var main = document.querySelector('.main');
var score = document.querySelector('.score');
var soundArr = [];
var scoreArr = [];
var currentError = 0;
audioError.setAttribute('src', './src/assets/audio/error.mp3');
audioSuccess.setAttribute('src', './src/assets/audio/correct.mp3');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function launchHandler() {
  var startBtn = document.querySelector('.start-game');
  startBtn.classList.add('restart');
  localStorage.setItem('isStart', true);
  var currentIndex = getRandomInt(soundArr.length);
  localStorage.setItem('currentIndex', currentIndex);
  audio.setAttribute('src', "".concat(soundArr[currentIndex].audioSrc));
  audio.play();
}

function repeatHandler() {
  var currentIndex = localStorage.getItem('currentIndex');
  audio.setAttribute('src', "".concat(soundArr[currentIndex].audioSrc));
  audio.play();
}

function generateSound() {
  var currentIndex = getRandomInt(soundArr.length);
  var wrapperFinish = document.createElement('div');
  var smile = document.createElement('img');
  var smileText = document.createElement('h2');
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
      setTimeout(_mainPageRender__WEBPACK_IMPORTED_MODULE_0__["default"], 2000);
      scoreArr.length = 0;
    } else if (currentError !== 0) {
      smile.setAttribute('src', './src/assets/img/failure.jpg');
      smileText.textContent = "Error ".concat(currentError);
      document.querySelector('.switch').style.display = 'none';
      audioFinishLose.setAttribute('src', './src/assets/audio/failure.mp3');
      main.append(wrapperFinish);
      audioFinishLose.play();
      setTimeout(_mainPageRender__WEBPACK_IMPORTED_MODULE_0__["default"], 2000);
      scoreArr.length = 0;
    }
  } else {
    audio.setAttribute('src', "".concat(soundArr[currentIndex].audioSrc));
    audio.play();
  }
}

localStorage.setItem('isStart', false);

function gameStart() {
  var startBtn = document.querySelector('.start-game');
  var starWin = document.createElement('img');
  starWin.setAttribute('src', './src/assets/img/star-win.svg');
  var starLose = document.createElement('img');
  starLose.setAttribute('src', './src/assets/img/star.svg');
  startBtn.addEventListener('click', launchHandler);
  document.addEventListener('click', function (e) {
    soundArr.forEach(function (el) {
      if (e.target.parentElement === null) {
        console.log(e.target);
      }

      if (e.target.parentElement.getAttribute('data-play') === el.id && audio.getAttribute('src') === el.audioSrc) {
        document.querySelector('.start-game').removeEventListener('click', launchHandler);
        document.querySelector('.start-game').addEventListener('click', repeatHandler);
        scoreArr.push(starWin.cloneNode(true));
        scoreArr.forEach(function (star) {
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
        scoreArr.forEach(function (star) {
          score.append(star);
        });
      }
    });
  });
}

function generatePlayCard(array) {
  var playCardElement = document.querySelector('#train-card--template').content.querySelector('.play__card').cloneNode(true);
  var startGame = document.querySelector('#train-card--template').content.querySelector('.start-game').cloneNode(true);
  var arrayCards = array;
  soundArr.length = 0;
  scoreArr.length = 0;
  main.innerHTML = '';
  var playCardArr = [];

  for (var i = 0; i < arrayCards.length; i += 1) {
    playCardArr.push(playCardElement.cloneNode(true));

    if (soundArr.length < arrayCards.length) {
      soundArr.push({
        id: arrayCards[i].word,
        audioSrc: arrayCards[i].audioSrc
      });
    }

    playCardArr[i].querySelector('.play__img').setAttribute('src', "".concat(arrayCards[i].image));
    playCardArr[i].setAttribute('data-play', "".concat(arrayCards[i].word));
    main.append(playCardArr[i]);
  }

  main.append(startGame);
  gameStart();
}

/* harmony default export */ __webpack_exports__["default"] = (generatePlayCard);

/***/ }),

/***/ "./src/js/generateTrain.js":
/*!*********************************!*\
  !*** ./src/js/generateTrain.js ***!
  \*********************************/
/*! exports provided: generateTrainCard, trainCardReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTrainCard", function() { return generateTrainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainCardReverse", function() { return trainCardReverse; });
function generateTrainCard(array) {
  var trainCardElement = document.querySelector('#train-card--template').content.querySelector('.train__card').cloneNode(true);
  var arrayCards = array;
  var audio = document.querySelector('.card__audio--train');
  var main = document.querySelector('.main');
  main.innerHTML = '';
  var trainCardArr = [];

  for (var i = 0; i < arrayCards.length; i += 1) {
    trainCardArr.push(trainCardElement.cloneNode(true));
    trainCardArr[i].querySelector('.train__front > .train__img').setAttribute('src', "".concat(arrayCards[i].image));
    trainCardArr[i].querySelector('.train__front > .train__text').textContent = arrayCards[i].word;
    trainCardArr[i].querySelector('.train__front').setAttribute('id', arrayCards[i].word);
    trainCardArr[i].querySelector('.train__back > .train__img').setAttribute('src', "".concat(arrayCards[i].image));
    trainCardArr[i].querySelector('.train__back > .train__text').textContent = arrayCards[i].translation;
    main.append(trainCardArr[i]);
  }

  document.addEventListener('click', function (e) {
    for (var _i = 0; _i < trainCardArr.length; _i += 1) {
      if (e.target.parentElement === null) {
        console.log(e.target);
      }

      if (e.target.parentElement.getAttribute('id') === "".concat(arrayCards[_i].word)) {
        audio.setAttribute('src', "".concat(arrayCards[_i].audioSrc));
        audio.play();
      }
    }
  });
}

function trainCardReverse() {
  var trainCard = document.querySelectorAll('.train__card');
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('reverse-btn')) {
      e.target.parentElement.classList.add('translate');
      e.target.parentElement.querySelector('.train__front').style.display = 'none';
      e.target.parentElement.querySelector('.train__back').style.display = 'block';
    }
  });
  trainCard.forEach(function (el) {
    el.addEventListener('mouseleave', function () {
      el.classList.remove('translate');
      el.querySelector('.train__front').style.display = 'block';
      el.querySelector('.train__back').style.display = 'none';
      document.querySelector('.reverse-btn').style.display = 'block';
    });
  });
}



/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function headerAction() {
  var burgerMenuBtn = document.querySelector('.burger-menu');
  var menu = document.querySelector('.menu');
  burgerMenuBtn.addEventListener('click', function () {
    burgerMenuBtn.classList.toggle('cross');
    menu.classList.toggle('menu--show');
    document.querySelector('.overlay--hide').classList.toggle('overlay--show');
  });
  document.addEventListener('click', function (e) {
    if (e.target.className === 'menu__item') {
      menu.classList.remove('menu--show');
      burgerMenuBtn.classList.remove('cross');
      document.querySelector('.overlay--hide').classList.remove('overlay--show');
    }

    if (e.target.className === 'overlay--hide overlay--show') {
      menu.classList.remove('menu--show');
      burgerMenuBtn.classList.remove('cross');
      document.querySelector('.overlay--hide').classList.remove('overlay--show');
    }
  });
  document.querySelector('.switch').addEventListener('click', function () {
    var switchInput = document.querySelector('.switch__input');
    var cardArr = document.querySelectorAll('.main__card');

    if (!switchInput.checked) {
      localStorage.setItem('isPlay', true);
      menu.classList.add('menu--orange');
      cardArr.forEach(function (el) {
        el.classList.add('orange');
      });
    } else {
      localStorage.setItem('isPlay', false);
      menu.classList.remove('menu--orange');
      cardArr.forEach(function (el) {
        el.classList.remove('orange');
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (headerAction);

/***/ }),

/***/ "./src/js/mainPageRender.js":
/*!**********************************!*\
  !*** ./src/js/mainPageRender.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switchChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchChange */ "./src/js/switchChange.js");
/* eslint-disable import/no-cycle */


function mainPageRender() {
  var switchInput = document.querySelector('.switch__input');
  var startPage = " <div class=\"main__card\" id=\"actionA\">\n<img src=\"./src/assets/img/dance.jpg\"  alt=\"\" class=\"card__img\">\n<h4 class=\"card__text\">Action (set A)</h4>\n</div>\n\n<div class=\"main__card\" id=\"actionB\">\n<img src=\"./src/assets/img/swim.jpg\"  alt=\"\" class=\"card__img\">\n<h4 class=\"card__text\">Action (set B)</h4>\n</div>\n\n<div class=\"main__card\" id=\"actionC\">\n<img src=\"./src/assets/img/play.jpg\"  alt=\"\" class=\"card__img\">\n<h4 class=\"card__text\">Action (set C)</h4>\n</div>\n\n<div class=\"main__card\" id=\"adjective\">\n<img src=\"./src/assets/img/scared.jpg\"  alt=\"\" class=\"card__img\">\n<h4 class=\"card__text\">Adjective</h4>\n</div>\n\n<div class=\"main__card\" id=\"animalA\">\n<img src=\"./src/assets/img/cat.jpg\"   alt=\"\" class=\"card__img\">\n<h4 class=\"card__text\">Animal (set A)</h4>\n</div>\n\n<div class=\"main__card\" id=\"animalB\">\n<img src=\"./src/assets/img/bird.jpg\"  alt=\"\" class=\"card__img\">\n<h4 class=\"card__text\">Animal (set B)</h4>\n</div>\n\n<div class=\"main__card\" id=\"clothes\">\n<img src=\"./src/assets/img/blouse.jpg\"  alt=\"\" class=\"card__img\">\n<h4 class=\"card__text\">Clothes</h4>\n</div>\n\n<div class=\"main__card\" id=\"emotion\">\n<img src=\"./src/assets/img/smile.jpg\"  alt=\"\" class=\"card__img\">\n<h4 class=\"card__text\">Emotion</h4>\n</div>";
  switchInput.setAttribute('checked', '');
  localStorage.setItem('isStart', 'false');
  document.querySelector('.card__audio--play').setAttribute('src', '');
  document.querySelector('.switch').removeEventListener('change', _switchChange__WEBPACK_IMPORTED_MODULE_0__["default"][0]);
  document.querySelector('.switch').removeEventListener('change', _switchChange__WEBPACK_IMPORTED_MODULE_0__["default"][1]);
  document.querySelector('.switch').removeEventListener('change', _switchChange__WEBPACK_IMPORTED_MODULE_0__["default"][2]);
  document.querySelector('.switch').removeEventListener('change', _switchChange__WEBPACK_IMPORTED_MODULE_0__["default"][3]);
  document.querySelector('.switch').removeEventListener('change', _switchChange__WEBPACK_IMPORTED_MODULE_0__["default"][4]);
  document.querySelector('.switch').removeEventListener('change', _switchChange__WEBPACK_IMPORTED_MODULE_0__["default"][5]);
  document.querySelector('.switch').removeEventListener('change', _switchChange__WEBPACK_IMPORTED_MODULE_0__["default"][6]);
  document.querySelector('.switch').removeEventListener('change', _switchChange__WEBPACK_IMPORTED_MODULE_0__["default"][7]);
  document.querySelector('.main').innerHTML = startPage;
  document.querySelector('.score').innerHTML = '';
  document.querySelector('.switch').style.display = 'block';

  if (localStorage.getItem('isPlay') === 'true') {
    document.querySelectorAll('.main__card').forEach(function (el) {
      el.classList.add('orange');
    });
  } else {
    document.querySelectorAll('.main__card').forEach(function (el) {
      el.classList.remove('orange');
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (mainPageRender);

/***/ }),

/***/ "./src/js/switchChange.js":
/*!********************************!*\
  !*** ./src/js/switchChange.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");
/* harmony import */ var _generatePlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generatePlay */ "./src/js/generatePlay.js");
/* harmony import */ var _generateTrain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateTrain */ "./src/js/generateTrain.js");




function switchChange1() {
  if (localStorage.getItem('isPlay') === 'true') {
    Object(_generatePlay__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][1]);
  } else {
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["generateTrainCard"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][1]);
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["trainCardReverse"])();
  }
}

function switchChange2() {
  if (localStorage.getItem('isPlay') === 'true') {
    Object(_generatePlay__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][2]);
  } else {
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["generateTrainCard"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][2]);
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["trainCardReverse"])();
  }
}

function switchChange3() {
  if (localStorage.getItem('isPlay') === 'true') {
    Object(_generatePlay__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][3]);
  } else {
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["generateTrainCard"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][3]);
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["trainCardReverse"])();
  }
}

function switchChange4() {
  if (localStorage.getItem('isPlay') === 'true') {
    Object(_generatePlay__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][4]);
  } else {
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["generateTrainCard"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][4]);
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["trainCardReverse"])();
  }
}

function switchChange5() {
  if (localStorage.getItem('isPlay') === 'true') {
    Object(_generatePlay__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][5]);
  } else {
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["generateTrainCard"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][5]);
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["trainCardReverse"])();
  }
}

function switchChange6() {
  if (localStorage.getItem('isPlay') === 'true') {
    Object(_generatePlay__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][6]);
  } else {
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["generateTrainCard"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][6]);
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["trainCardReverse"])();
  }
}

function switchChange7() {
  if (localStorage.getItem('isPlay') === 'true') {
    Object(_generatePlay__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][6]);
  } else {
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["generateTrainCard"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][6]);
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["trainCardReverse"])();
  }
}

function switchChange8() {
  if (localStorage.getItem('isPlay') === 'true') {
    Object(_generatePlay__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][7]);
  } else {
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["generateTrainCard"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"][8]);
    Object(_generateTrain__WEBPACK_IMPORTED_MODULE_2__["trainCardReverse"])();
  }
}

var switchChangeArray = [switchChange1, switchChange2, switchChange3, switchChange4, switchChange5, switchChange6, switchChange7, switchChange8];
/* harmony default export */ __webpack_exports__["default"] = (switchChangeArray);

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/index.js ./src/css/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/css/style.scss */"./src/css/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map
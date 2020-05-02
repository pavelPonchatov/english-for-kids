/* eslint-disable import/no-cycle */
import switchChangeArray from './switchChange';

function mainPageRender() {
  const switchInput = document.querySelector('.switch__input');
  const startPage = ` <div class="main__card" id="actionA">
<img src="./src/assets/img/dance.jpg"  alt="" class="card__img">
<h4 class="card__text">Action (set A)</h4>
</div>

<div class="main__card" id="actionB">
<img src="./src/assets/img/swim.jpg"  alt="" class="card__img">
<h4 class="card__text">Action (set B)</h4>
</div>

<div class="main__card" id="actionC">
<img src="./src/assets/img/play.jpg"  alt="" class="card__img">
<h4 class="card__text">Action (set C)</h4>
</div>

<div class="main__card" id="adjective">
<img src="./src/assets/img/scared.jpg"  alt="" class="card__img">
<h4 class="card__text">Adjective</h4>
</div>

<div class="main__card" id="animalA">
<img src="./src/assets/img/cat.jpg"   alt="" class="card__img">
<h4 class="card__text">Animal (set A)</h4>
</div>

<div class="main__card" id="animalB">
<img src="./src/assets/img/bird.jpg"  alt="" class="card__img">
<h4 class="card__text">Animal (set B)</h4>
</div>

<div class="main__card" id="clothes">
<img src="./src/assets/img/blouse.jpg"  alt="" class="card__img">
<h4 class="card__text">Clothes</h4>
</div>

<div class="main__card" id="emotion">
<img src="./src/assets/img/smile.jpg"  alt="" class="card__img">
<h4 class="card__text">Emotion</h4>
</div>`;

  switchInput.setAttribute('checked', '');
  localStorage.setItem('isStart', 'false');
  document.querySelector('.card__audio--play').setAttribute('src', '');
  document.querySelector('.switch').removeEventListener('change', switchChangeArray[0]);
  document.querySelector('.switch').removeEventListener('change', switchChangeArray[1]);
  document.querySelector('.switch').removeEventListener('change', switchChangeArray[2]);
  document.querySelector('.switch').removeEventListener('change', switchChangeArray[3]);
  document.querySelector('.switch').removeEventListener('change', switchChangeArray[4]);
  document.querySelector('.switch').removeEventListener('change', switchChangeArray[5]);
  document.querySelector('.switch').removeEventListener('change', switchChangeArray[6]);
  document.querySelector('.switch').removeEventListener('change', switchChangeArray[7]);
  document.querySelector('.main').innerHTML = startPage;
  document.querySelector('.score').innerHTML = '';
  document.querySelector('.switch').style.display = 'block';
  if (localStorage.getItem('isPlay') === 'true') {
    document.querySelectorAll('.main__card').forEach((el) => {
      el.classList.add('orange');
    });
  } else {
    document.querySelectorAll('.main__card').forEach((el) => {
      el.classList.remove('orange');
    });
  }
}

export default mainPageRender;

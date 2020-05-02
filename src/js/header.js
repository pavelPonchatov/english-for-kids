function headerAction() {
  const burgerMenuBtn = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');

  burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('cross');
    menu.classList.toggle('menu--show');
    document.querySelector('.overlay--hide').classList.toggle('overlay--show');
  });
  document.addEventListener('click', (e) => {
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


  document.querySelector('.switch').addEventListener('click', () => {
    const switchInput = document.querySelector('.switch__input');
    const cardArr = document.querySelectorAll('.main__card');
    if (!switchInput.checked) {
      localStorage.setItem('isPlay', true);
      menu.classList.add('menu--orange');
      cardArr.forEach((el) => {
        el.classList.add('orange');
      });
    } else {
      localStorage.setItem('isPlay', false);
      menu.classList.remove('menu--orange');
      cardArr.forEach((el) => {
        el.classList.remove('orange');
      });
    }
  });
}

export default headerAction;

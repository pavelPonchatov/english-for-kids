function generateTrainCard(array) {
  const trainCardElement = document.querySelector('#train-card--template').content.querySelector('.train__card').cloneNode(true);
  const arrayCards = array;
  const audio = document.querySelector('.card__audio--train');
  const main = document.querySelector('.main');

  main.innerHTML = '';
  const trainCardArr = [];
  for (let i = 0; i < arrayCards.length; i += 1) {
    trainCardArr.push(trainCardElement.cloneNode(true));
    trainCardArr[i].querySelector('.train__front > .train__img').setAttribute('src', `${arrayCards[i].image}`);
    trainCardArr[i].querySelector('.train__front > .train__text').textContent = arrayCards[i].word;
    trainCardArr[i].querySelector('.train__front').setAttribute('id', arrayCards[i].word);

    trainCardArr[i].querySelector('.train__back > .train__img').setAttribute('src', `${arrayCards[i].image}`);
    trainCardArr[i].querySelector('.train__back > .train__text').textContent = arrayCards[i].translation;

    main.append(trainCardArr[i]);
  }
  document.addEventListener('click', (e) => {
    for (let i = 0; i < trainCardArr.length; i += 1) {
      if (e.target.parentElement === null) {
        console.log(e.target);
      }
      if (e.target.parentElement.getAttribute('id') === `${arrayCards[i].word}`) {
        audio.setAttribute('src', `${arrayCards[i].audioSrc}`);
        audio.play();
      }
    }
  });
}

function trainCardReverse() {
  const trainCard = document.querySelectorAll('.train__card');


  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('reverse-btn')) {
      e.target.parentElement.classList.add('translate');
      e.target.parentElement.querySelector('.train__front').style.display = 'none';
      e.target.parentElement.querySelector('.train__back').style.display = 'block';
    }
  });

  trainCard.forEach((el) => {
    el.addEventListener('mouseleave', () => {
      el.classList.remove('translate');
      el.querySelector('.train__front').style.display = 'block';
      el.querySelector('.train__back').style.display = 'none';
      document.querySelector('.reverse-btn').style.display = 'block';
    });
  });
}

export { generateTrainCard, trainCardReverse };

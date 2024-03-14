const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

function getRandomNumber()
{
  return Math.floor(Math.random() * colors.length);
}

function randomColorGenerator() 
{
  const color = document.querySelector('.color');
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

document.querySelector('.js-click-button')
  .addEventListener('click', () => {
    randomColorGenerator();
  })
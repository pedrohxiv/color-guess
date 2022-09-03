function randomColor() {
  const ball = document.querySelectorAll('.ball');
  const randomNum = Math.floor(Math.random() * 6);
  for (let i = 0; i < ball.length; i += 1) {
    ball[i].style.backgroundColor = `
    rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    document.getElementById('rgb-color').innerText = ball[randomNum].style.backgroundColor;
  }
}

function compareColor(event) {
  if (event.target.style.backgroundColor === document.getElementById('rgb-color').innerText) {
    document.getElementById('answer').innerText = 'Acertou!';
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
  }
  randomColor();
}

function resetGame() {
  randomColor();
  document.getElementById('answer').innerText = 'Escolha uma cor';
}

randomColor();
document.getElementById('colors').addEventListener('click', compareColor);
document.getElementById('reset-game').addEventListener('click', resetGame);

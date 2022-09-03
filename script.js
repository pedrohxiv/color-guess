function randomColor() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = `
    rgb(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255})`;
  }
}

randomColor();

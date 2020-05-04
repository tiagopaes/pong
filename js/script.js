const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const pressedKeys = {};

const ball = {
  x: canvas.width / 2 - 15,
  y: canvas.height / 2 - 15,
  height: 30,
  width: 30,
  directionX: -1,
  directionY: 1,
  modifier: 0,
  speed: 1
};

const player1 = {
  x: 10,
  y: canvas.height / 2 - 60,
  height: 120,
  width: 30,
  score: 0,
  speed: 10
};
const player2 = {
  x: 560,
  y: canvas.height / 2 - 60,
  height: 120,
  width: 30,
  score: 0,
  speed: 10
};

document.addEventListener('keydown', event => pressedKeys[event.keyCode] = true);
document.addEventListener('keyup', event => delete pressedKeys[event.keyCode]);

const movePlayer = () => {
  if (87 in pressedKeys && player1.y > 0) {
    player1.y -= player1.speed;
  } else {
    if (83 in pressedKeys && player1.y + player1.height < canvas.height) {
      player1.y += player1.speed;
    }
  }

  if (38 in pressedKeys && player2.y > 0) {
    player2.y -= player2.speed;
  } else {
    if (40 in pressedKeys && player2.y + player2.height < canvas.height) {
      player2.y += player2.speed;
    }
  }
}

const moveBall = () => {
  if (ball.y + ball.height >= player1.y && ball.y <= player1.y + player1.height && ball.x <= player1.x + player1.width) {
    ball.directionX = 1;
    ball.modifier += 0.2;

  } else if (ball.y + ball.height >= player2.y && ball.y <= player2.y + player2.height && ball.x + ball.width >= player2.x) {
    ball.directionX = -1;
    ball.modifier += 0.2;
  }

  if (ball.y <= 0) {
    ball.directionY = 1;
  } else if (ball.y + ball.height >= canvas.height) {
    ball.directionY = -1;
  }

  ball.x += (ball.speed + ball.modifier) * ball.directionX;
  ball.y += (ball.speed + ball.modifier) * ball.directionY;

  if (ball.x < player1.x + player1.width - 15) {
    newgame('player 2');
  } else if (ball.x + ball.width > player2.x + 15) {
    newgame('player 1');
  }
}

const newgame = winner => {
  if (winner == 'player 1') {
    player1.score++;
  } else {
    player2.score++;
  }

  player1.y = canvas.height / 2 - player1.height / 2;
  player2.y = player1.y;
  ball.y = canvas.height / 2 - ball.height / 2;
  ball.x = canvas.width / 2 - ball.width / 2;
  ball.modifier = 0;
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  movePlayer();
  moveBall();

  ctx.fillStyle = 'white';
  ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
  ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
  ctx.font = '20px Arial';
  ctx.fillText('Player 1: ' + player1.score, 50, 20);
  ctx.fillText('Player 2: ' + player2.score, canvas.width - 160, 20);
}

setInterval(draw, 10);

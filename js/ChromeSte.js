const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
localStorage.clear();

const CANVAS_WIDTH = 700;  // Internal width of the canvas
const CANVAS_HEIGHT = 250; // Internal height of the canvas

gameActive = true; // Stop the game loop

// Set the canvas's internal drawing size (rendering resolution)
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Optionally, set the display size via CSS or inline styling for responsiveness
canvas.style.width = '700px'; // Display width
canvas.style.height = '250px'; // Display height

function resizeCanvas() {
  const aspectRatio = CANVAS_WIDTH / CANVAS_HEIGHT;
  let width = window.innerWidth * 0.6; // e.g., 80% of window width
  let height = width / aspectRatio;    // Maintain the aspect ratio

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Call it initially to set size

// Variables
let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};
let targetScore = 1000

// Event Listeners
document.addEventListener('keydown', function (evt) {
  keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
  keys[evt.code] = false;
});

// Load the trophy image
const trophyImage = new Image();
trophyImage.src = '../assets/images/Maria.png'; // Add the path to your trophy image

// Function to draw the trophy on the right-hand side
function drawTrophy(opacity) {
  const trophyWidth = 70;
  const trophyHeight = 220;
  const trophyX = canvas.width - trophyWidth;  // Position at the right-hand side
  const trophyY = canvas.height - trophyHeight; // Position near the bottom
  // Set the transparency based on the opacity value
  ctx.globalAlpha = opacity;
  ctx.drawImage(trophyImage, trophyX, trophyY, trophyWidth, trophyHeight);
  // Reset globalAlpha to 1 for other elements
  ctx.globalAlpha = 1;
}

class Player {
  constructor(initialX, y, w, h) {
    this.initialX = initialX; // Initial starting position
    this.y = y;
    this.w = w;
    this.h = h;

    // Image-related properties
    this.image = new Image();
    this.image.src = "../assets/images/Ste.png"; // The path to your T-rex image

    // Physics properties
    this.dy = 0;
    this.jumpForce = 15;
    this.originalHeight = h;
    this.grounded = true;
    this.jumpTimer = 0;
  }

  // Calculate the player's x position based on score
  get x() {
    // Calculate position as score approaches the target
    const maxDistance = canvas.width - this.w; // Stop before hitting the right edge
    return this.initialX + (maxDistance - this.initialX) * Math.min(score / targetScore, 1);
  }

  Animate () {
    // Jump
    if (keys['Space'] || keys['KeyW']) {
      this.Jump();
    } else {
      this.jumpTimer = 0;
    }

    if (keys['ShiftLeft'] || keys['KeyS']) {
      this.h = this.originalHeight / 2;
    } else {
      this.h = this.originalHeight;
    }

    this.y += this.dy;

    // Gravity
    if (this.y + this.h < canvas.height) {
      this.dy += gravity;
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = canvas.height - this.h;
    }

    this.Draw();
  }

  Jump () {
    if (this.grounded && this.jumpTimer == 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      this.jumpTimer++;
      this.dy = -this.jumpForce - (this.jumpTimer / 50);
    }
  }

  Draw() {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  }
}

class Obstacle {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = RandomIntInRange(1, 7);
    // Image-related properties
    this.image = new Image();
    this.image.src = `../assets/images/obstacle_${this.type}.png`; // The path to your cactus image
    this.image.onload = () => {
      // This ensures the image is drawn only after it's loaded
      this.ready = true;
    };
    this.dx = -gameSpeed;
  }

  Update () {
    this.x += this.dx;
    this.Draw();
    this.dx = -gameSpeed;
  }

  Draw () {
    if (this.ready) {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
  }
}

class Text {
  constructor (t, x, y, a, c, s) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.font = this.s + "px sans-serif";
    ctx.textAlign = this.a;
    ctx.fillText(this.t, this.x, this.y);
    ctx.closePath();
  }
}

// Game Functions
function SpawnObstacle () {
  let size = RandomIntInRange(60, 80);
  let type = RandomIntInRange(0, 1);
  const trophyX = canvas.width - 110; // Position at the right-hand side of the canvas
  let obstacle = new Obstacle(trophyX - size, canvas.height - size, size, size);

  if (type == 1) {
    obstacle.y -= player.originalHeight - 10;
  }
  if (player.x < canvas.width * 0.7) { 
    // Spawn obstacles until the score is close to the target
    obstacles.push(obstacle);
  }
}

function RandomIntInRange (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function Start () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font = "20px sans-serif";

  gameSpeed = 3;
  gravity = 1;

  score = 0;
  highscore = 0;

  if (localStorage.getItem('highscore')) {
    highscore = localStorage.getItem('highscore');
  }

  player = new Player(25, 0, 70, 220);
  scoreText = new Text("Score: " + score, 25, 50, "left", "#212121", "40");
  highscoreText = new Text("Highscore: " + highscore, canvas.width - 25,  50, "right", "#212121", "40");

  requestAnimationFrame(Update);
}

let initialSpawnTimer = 150;
let spawnTimer = initialSpawnTimer;

function Update () {
  if (!gameActive) return; // Stop updating if the game is inactive

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  spawnTimer--;

  if (spawnTimer <= 0) {
    SpawnObstacle();
    console.log(obstacles);
    spawnTimer = initialSpawnTimer - gameSpeed * 4;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  // Spawn Enemies
  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];

    if (o.x + o.w < 0) {
      obstacles.splice(i, 1);
    }

    if (
      player.x < o.x + o.w &&
      player.x + player.w > o.x &&
      player.y < o.y + o.h &&
      player.y + player.h > o.y
    ) {
      obstacles = [];
      score = 0;
      spawnTimer = initialSpawnTimer;
      gameSpeed = 3;
      window.localStorage.setItem('highscore', highscore);
    }

    o.Update();
  }

  player.Animate();

  score++;
  scoreText.t = "Score: " + score;
  scoreText.Draw();

  if (score > highscore) {
    highscore = score;
    highscoreText.t = "Highscore: " + highscore;
  }
  
  highscoreText.Draw();

  const trophyX = canvas.width - 2*110; // Trophy's position on the canvas
  // Check if the score is high enough to display the trophy
  if (player.x >= trophyX) {
    drawTrophy(1); // Full opacity at target score or higher
    endGame("You Win!");
  } else {
    // Calculate trophy transparency based on the score
    const opacity = score / targetScore;
    drawTrophy(opacity);
  }

  gameSpeed += 0.006;
  if (gameActive) requestAnimationFrame(Update);
}

// Function to end the game
function endGame(message) {
  gameActive = false; // Stop the game loop
  ctx.font = '30px Arial';
  ctx.fillStyle = 'green';
  ctx.fillText(message, canvas.width / 2, canvas.height / 2); // Display message in the center
}

Start();
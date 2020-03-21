import Game from "./game";

let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#f00";

const GAME_WITH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WITH, GAME_HEIGHT);

let lastTime = 0;

//imgs

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WITH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

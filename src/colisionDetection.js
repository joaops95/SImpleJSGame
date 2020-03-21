export function detectCollision(ball, gameObject) {
  let BottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfGameObject = gameObject.position.y;
  let leftSizeOfGameObject = gameObject.position.x;
  let rightSizeOfGameObject = gameObject.position.x + gameObject.width;
  let bottomOfGameObject = gameObject.position.y + gameObject.height;

  if (
    BottomOfBall >= topOfGameObject &&
    topOfBall <= bottomOfGameObject &&
    ball.position.x >= leftSizeOfGameObject &&
    ball.position.x + ball.size <= rightSizeOfGameObject
  ) {
    return true;
  } else {
    return false;
  }
}

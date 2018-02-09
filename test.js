var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
document.documentElement.style.overflow = 'hidden';

function Hero (values) {
  var hero = {};

  hero.x1 = values.x;
  hero.x2 = hero.x1 + values.width;
  hero.y1 = values.y;
  hero.y2 = hero.y1 + values.height;
  hero.width = values.width;
  hero.height = values.height;
  hero.style = values.style;
  hero.colCords = values.colCords;
  hero.inCollision = null;

  hero.updatePos = function () {
    hero.y2 = hero.y1 + hero.height;
    hero.x2 = hero.x1 + hero.width;
  };

  hero.draw = function () {
    ctx.fillStyle = hero.style;
    ctx.fillRect(hero.x1, hero.y1, hero.width, hero.height);
  };

  hero.checkCollision = function () {
    for ( var i = 0; i < hero.colCords.length; i++) {
      if ( hero.x2 >= hero.colCords[i].x1 &&
           hero.y2 >= hero.colCords[i].y1 &&
           hero.y1 <= hero.colCords[i].y2 ) {
             console.log("collision right");
           }
    }
  }

  

  hero.handleMovement = function() {
    swordman.checkCollision();
    if (moveLeft) {

      hero.x1 -= 10;

    } else if (moveRight) {

      hero.x1 += 10;

    } else if (moveUp) {

      hero.y1 -= 10;

    } else if (moveDown) {

      hero.y1 += 10;

    }
    hero.updatePos();
  };

  return hero;
};

var swordman = new Hero({
  x: 0,
  y: 200,
  width: 50,
  height: 50,
  style: "black",
  colCords: []
});

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp)

var moveRight = undefined,
    moveLeft = undefined,
    moveUp = undefined,
    moveDown = undefined;

function handleKeyDown (e) {
  if ( e.which === 37 ) {
    moveLeft = true;
  } else if ( e.which === 38 ) {
    moveUp = true;
  } else if ( e.which === 39 ) {
    moveRight = true;
  } else if ( e.which === 40 ) {
    moveDown = true;
  }
  swordman.handleMovement();
};

function handleKeyUp (e) {
  if ( e.which === 37 ) {
    moveLeft = false;
  } else if ( e.which === 38 ) {
    moveUp = false;
  } else if ( e.which === 39 ) {
    moveRight = false;
  } else if ( e.which === 40 ) {
    moveDown = false;
  }
  swordman.handleMovement();
};

function Tile (values) {
  var tile = {};
  tile.name = values.name;
  tile.x1 = values.x;
  tile.x2 = tile.x1 + tile.width;
  tile.y1 = values.y;
  tile.y2 = tile.y1 + tile.height;
  tile.height = values.height;
  tile.width = values.width;
  tile.style = values.style;

  swordman.colCords.push({
    name: tile.name,
    x1: tile.x1,
    x2: tile.x1 + tile.width,
    y1: tile.y1,
    y2: tile.y1 + tile.height
  });

  tile.draw = function () {
    ctx.fillStyle = tile.style;
    ctx.fillRect(tile.x1, tile.y1, tile.width, tile.height);
  };



  return tile;
};

var ground = new Tile({
  name: "ground",
  x: 0,
  y: 620,
  width: 100,
  height: 52,
  style: "green"
});

var random = new Tile({
  name: "random",
  x: 200,
  y: 300,
  width: 200,
  height: 50,
  style: "red"
});


function game() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ground.draw();
  random.draw();
  swordman.draw();







  window.requestAnimationFrame(game);
};

game();

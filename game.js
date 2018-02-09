var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.documentElement.style.overflow = 'hidden'

/*
context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
img = image
sx = frame starting x cord on image file
sy = frame starting y cord on image file
sw = the width of frame from image file
sh = the height of frame from image file
dx = x cord on canvas to put the image
dy = y cord on canvas to put the image
dw = width on canvas for the image
dh = height on canvas for the image
*/

var character = {
  x: window.innerWidth/2 - 50,
  y: 585,
  coins: 0,
  hp: 100
};

function sprite (values) {

  var spriteObject = {};
  var frameCount = 0;

  spriteObject.image = values.image;
  spriteObject.sx = 1;
  spriteObject.sy = 0;
  spriteObject.sw = values.sw;
  spriteObject.sh = values.sh;
  spriteObject.dx = values.dx;
  spriteObject.dy = values.dy;
  spriteObject.dw = values.dw;
  spriteObject.dh = values.dh;
  spriteObject.frames = values.frames;

  spriteObject.updatePos = function () {
    spriteObject.dx = character.x;
    spriteObject.dy = character.y;
  };

  var ticksPerFrame = 0;

  spriteObject.update = function () {

    if ( frameCount < spriteObject.frames ) {
      ticksPerFrame += 0.5;
      if ( ticksPerFrame === 1.5 ) {
        frameCount += 1;
        ticksPerFrame = 0;
      }
    } else if ( frameCount >= spriteObject.frames ) {
      frameCount = 0;
    }

  };

  spriteObject.render = function () {

    ctx.drawImage(
      spriteObject.image,
      spriteObject.sx * frameCount * spriteObject.sw,
      spriteObject.sy,
      spriteObject.sw,
      spriteObject.sh,
      spriteObject.dx,
      spriteObject.dy,
      spriteObject.dw,
      spriteObject.dh
    );

  };

  spriteObject.renderLeft = function () {

    ctx.drawImage(
      spriteObject.image,
      (spriteObject.sw * spriteObject.frames) - spriteObject.sw * frameCount,
      spriteObject.sy,
      spriteObject.sw,
      spriteObject.sh,
      spriteObject.dx,
      spriteObject.dy,
      spriteObject.dw,
      spriteObject.dh
    );

  };

  return spriteObject;

};

var coinImage = new Image();
coinImage.src = "coin.png";

var coinSprite = sprite({
  image: coinImage,
  frames: 10,
  sx: 1,
  sy: 0,
  sw: 44,
  sh: 40,
  dx: 500,
  dy: 500,
  dw: 22,
  dh: 20
});

var ninjaRightImage = new Image();
ninjaRightImage.src = "graphics/ninja/ninjaRunRight.png";

var ninjaRight = sprite ({
  image: ninjaRightImage,
  sw: 363,
  sh: 458,
  dw: 363/6,
  dh: 458/6,
  frames: 9
});

var ninjaLeftImage = new Image();
ninjaLeftImage.src = "graphics/ninja/ninjaRunLeft.png";

var ninjaLeft = sprite ({
  image: ninjaLeftImage,
  sw: 362.9,
  sh: 458,
  dw: 362.9/6,
  dh: 458/6,
  frames: 9
});

var ninjaJumpLeftImage = new Image();
ninjaJumpLeftImage.src = "graphics/ninja/ninjaJumpLeft.png";

var ninjaJumpLeft = sprite ({
  image: ninjaJumpLeftImage,
  sw: 362,
  sh: 483,
  dw: 362/6,
  dh: 483/6,
  frames: 9
});

var ninjaJumpRightImage = new Image();
ninjaJumpRightImage.src = "graphics/ninja/ninjaJumpRight.png";

var ninjaJumpRight = sprite ({
  image: ninjaJumpRightImage,
  sw: 362,
  sh: 483,
  dw: 362/6,
  dh: 483/6,
  frames: 9
});

var ninjaAtkLeftImage = new Image();
ninjaAtkLeftImage.src = "graphics/ninja/ninjaAtkLeft.png";

var ninjaAtkLeft = sprite ({
  image: ninjaAtkLeftImage,
  sw: 536,
  sh: 495,
  dw: 536/6,
  dh: 495/6,
  frames: 9
});

var ninjaAtkRightImage = new Image();
ninjaAtkRightImage.src = "graphics/ninja/ninjaAtkRight.png";

var ninjaAtkRight = sprite ({
  image: ninjaAtkRightImage,
  sw: 536,
  sh: 495,
  dw: 536/6,
  dh: 495/6,
  frames: 9
});

var ninjaClimbImage = new Image();
ninjaClimbImage.src = "graphics/ninja/ninjaClimb.png";

var ninjaClimbUp = sprite ({
  image: ninjaClimbImage,
  sw: 282,
  sh: 464,
  dw: 282/6,
  dh: 464/6,
  frames: 9
});

var ninjaClimbDown = sprite ({
  image: ninjaClimbImage,
  sw: 282,
  sh: 464,
  dw: 282/6,
  dh: 464/6,
  frames: 9
});
var ninjaDieLeftImage = new Image();
ninjaDieLeftImage.src = "graphics/ninja/ninjaDieLeft.png";

var ninjaDieLeft = sprite ({
  image: ninjaDieLeftImage,
  sw: 482,
  sh: 498,
  dw: 482/6,
  dh: 498/6,
  frames: 9
});

var ninjaDieRightImage = new Image();
ninjaDieRightImage.src = "graphics/ninja/ninjaDieRight.png";

var ninjaDieRight = sprite ({
  image: ninjaDieRightImage,
  sw: 482,
  sh: 498,
  dw: 482/6,
  dh: 498/6,
  frames: 9
});

var ninjaGlideLeftImage = new Image();
ninjaGlideLeftImage.src = "graphics/ninja/ninjaGlideLeft.png";

var ninjaGlideLeft = sprite ({
  image: ninjaGlideLeftImage,
  sw: 443,
  sh: 453,
  dw: 443/6,
  dh: 453/6,
  frames: 9
});

var ninjaGlideRightImage = new Image();
ninjaGlideRightImage.src = "graphics/ninja/ninjaGlideRight.png";

var ninjaGlideRight = sprite ({
  image: ninjaGlideRightImage,
  sw: 443,
  sh: 453,
  dw: 443/6,
  dh: 453/6,
  frames: 9
});

var ninjaIdleRightImage = new Image();
ninjaIdleRightImage.src = "graphics/ninja/ninjaIdleRight.png";

var ninjaIdleRight = sprite ({
  image: ninjaIdleRightImage,
  sw: 232,
  sh: 439,
  dw: 232/6,
  dh: 439/6,
  frames: 9
});

var ninjaIdleLeftImage = new Image();
ninjaIdleLeftImage.src = "graphics/ninja/ninjaIdleLeft.png";

var ninjaIdleLeft = sprite ({
  image: ninjaIdleLeftImage,
  sw: 232,
  sh: 439,
  dw: 232/6,
  dh: 439/6,
  frames: 9
});

var ninjaJumpAtkLeftImage = new Image();
ninjaJumpAtkLeftImage.src = "graphics/ninja/ninjaJumpAtkLeft.png";

var ninjaJumpAtkLeft = sprite ({
  image: ninjaJumpAtkLeftImage,
  sw: 504,
  sh: 521,
  dw: 504/6,
  dh: 521/6,
  frames: 9
});

var ninjaJumpAtkRightImage = new Image();
ninjaJumpAtkRightImage.src = "graphics/ninja/ninjaJumpAtkRight.png";

var ninjaJumpAtkRight = sprite ({
  image: ninjaJumpAtkRightImage,
  sw: 504,
  sh: 521,
  dw: 504/6,
  dh: 521/6,
  frames: 9
});

var ninjaJumpThrowRightImage = new Image();
ninjaJumpThrowRightImage.src = "graphics/ninja/ninjaJumpThrowRight.png";

var ninjaJumpThrowRight = sprite ({
  image: ninjaJumpThrowRightImage,
  sw: 360,
  sh: 430,
  dw: 360/6,
  dh: 430/6,
  frames: 9
});

var ninjaJumpThrowLeftImage = new Image();
ninjaJumpThrowLeftImage.src = "graphics/ninja/ninjaJumpThrowLeft.png";

var ninjaJumpThrowLeft = sprite ({
  image: ninjaJumpThrowLeftImage,
  sw: 360,
  sh: 430,
  dw: 360/6,
  dh: 430/6,
  frames: 9
});

var ninjaSlideLeftImage = new Image();
ninjaSlideLeftImage.src = "graphics/ninja/ninjaSlideLeft.png";

var ninjaSlideLeft = sprite ({
  image: ninjaSlideLeftImage,
  sw: 373,
  sh: 350,
  dw: 373/6,
  dh: 350/6,
  frames: 9
});

var ninjaSlideRightImage = new Image();
ninjaSlideRightImage.src = "graphics/ninja/ninjaSlideRight.png";

var ninjaSlideRight = sprite ({
  image: ninjaSlideRightImage,
  sw: 373,
  sh: 350,
  dw: 373/6,
  dh: 350/6,
  frames: 9
});

var ninjaThrowRightImage = new Image();
ninjaThrowRightImage.src = "graphics/ninja/ninjaThrowRight.png";

var ninjaThrowRight = sprite ({
  image: ninjaThrowRightImage,
  sw: 377,
  sh: 451,
  dw: 377/6,
  dh: 451/6,
  frames: 9
});

var ninjaThrowLeftImage = new Image();
ninjaThrowLeftImage.src = "graphics/ninja/ninjaThrowLeft.png";

var ninjaThrowLeft = sprite ({
  image: ninjaThrowLeftImage,
  sw: 377,
  sh: 451,
  dw: 377/6,
  dh: 451/6,
  frames: 9
});



window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

var moveLeft = false;
var moveRight = false;
var moveUp = false;
var moveDown = false;
var movementTracker = [1];
var ladder = false;

function jumpUp() {

  var timer;

  if ( jump ) {
    timer = setInterval(land, 500);
    console.log("moving up");
  }

  function land () {
    console.log("moving down");
    clearInterval(timer);
    jump = false;
  }

}

function jumpPositioning () {
  if ( jump ) {
    character.x -= 10;
    character.y -= 10;
  } else if ( !jump && character.y < 585 ) {
    console.log("inside jump pos !jump");
    character.x -= 10;
    character.y += 10;
  }
}


function handleCharMovement () {
  if (moveLeft && moveUp) {
    console.log("jumping left");
    jumpUp();
    jumpPositioning();
    ninjaJumpLeft.updatePos();
    ninjaJumpLeft.update();
    ninjaJumpLeft.renderLeft();
    movementTracker.push(0);
  } else if ( moveRight && moveUp ) {
    console.log("jumping right");
    character.x += 10;
    character.y -= 10;
    ninjaJumpRight.updatePos();
    ninjaJumpRight.update();
    ninjaJumpRight.render();
    movementTracker.push(1);
  } else if ( moveRight && moveDown ) {
    console.log("slide right");
    character.x += 10;
    ninjaSlideRight.updatePos();
    ninjaSlideRight.update();
    ninjaSlideRight.render();
    movementTracker.push(1);
  } else if ( moveLeft && moveDown ) {
    console.log("slide left");
    character.x -= 10;
    ninjaSlideLeft.updatePos();
    ninjaSlideLeft.update();
    ninjaSlideLeft.renderLeft();
    movementTracker.push(0)
  } else if ( moveLeft ) {
    console.log("moving left");
    character.x -= 10;
    ninjaLeft.updatePos();
    ninjaLeft.update();
    ninjaLeft.renderLeft();
    movementTracker.push(0);

  } else if ( moveRight ) {
    console.log("moving right");
    character.x += 10;
    ninjaRight.updatePos();
    ninjaRight.update();
    ninjaRight.render();
    movementTracker.push(1);

  } else if ( moveUp && ladder ) {
    console.log("climbing up");
    character.y -=5;
    ninjaClimbUp.updatePos();
    ninjaClimbUp.update();
    ninjaClimbUp.render();
  } else if ( moveDown && ladder ) {

      console.log("climbing down");
      character.y += 5;
      ninjaClimbDown.updatePos();
      ninjaClimbDown.update();
      ninjaClimbDown.renderLeft();

  } else {
    if ( movementTracker[movementTracker.length-1] === 0 ) {
      ninjaIdleLeft.updatePos();
      ninjaIdleLeft.update();
      ninjaIdleLeft.renderLeft();
    } else if ( movementTracker[movementTracker.length-1] === 1 ) {
      ninjaIdleRight.updatePos();
      ninjaIdleRight.update();
      ninjaIdleRight.render();
    }
  }
};

function handleKeyDown (e) {
  if ( e.which === 37 ) {
    console.log("left arrow down");
    moveLeft = true;
  } else if ( e.which === 39 ) {
    console.log("right arrow down");
    moveRight = true;
  } else if ( e.which === 38 ) {
    console.log("up arrow down");
    moveUp = true;
    jump = true;
  } else if ( e.which === 40 ) {
    console.log("down arrow down");
    moveDown = true;
  }
};

function handleKeyUp (e) {
  if ( e.which === 37 ) {
    console.log("left arrow up");
    moveLeft = false;
  } else if ( e.which === 39 ) {
    console.log("right arrow up");
    moveRight = false;
  } else if ( e.which === 38 ) {
    console.log("up arrow up");
    moveUp = false;
  } else if ( e.which === 40 ) {
    console.log("down arrow up");
    moveDown = false;
  }
};



//Map
//bg
var bgImg_desert = new Image();
bgImg_desert.src = "graphics/map_desert/BG.png";
//tiles
var tile2 = new Image();
tile2.src = "graphics/map_desert/Tile/2.png";


function drawTiles () {
  for ( var i = 0; i < window.innerWidth/128; i++ ) {
    ctx.drawImage(tile2, i*128, window.innerHeight-64);
  }
}

function tileCollision () {
  if ( character.y > window.innerHeight-146 ) {
    character.y -= 10;

  }
}



function gameLoop () {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.drawImage(bgImg_desert, 0, -64, window.innerWidth, window.innerHeight);
  drawTiles();
  tileCollision();
  handleCharMovement();
  window.requestAnimationFrame(gameLoop);
};

gameLoop();

// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';

  //设置敌人初始位置
  this.x = 0;

  //随机取得[0-2]的下标
  this.y = initY[Math.floor(Math.random() * 3)];

  //设置敌人初始速度
  this.speed = Math.floor(Math.random() * (900 - 100 + 1) + 100);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//更新敌人位置，让敌人移动
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  //判断敌人是否移动出界
  if (this.x > 505) {
    //移动出界时，设置新的y轴位置，设置新的移动速度
    this.x = 0;
    this.y = initY[Math.floor(Math.random() * 3)];
    //随机速度100-900
    this.speed = Math.floor(Math.random() * (900 - 100 + 1) + 100);
  }
  //更新横向位置
  return this.x += dt * this.speed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  //取得新位置后重绘敌人
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//初始化敌人的三种出现位置
const initY = [60, 145, 225];
//实例化3个敌人对象
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();

//初始化敌人数组
let allEnemies = [enemy1, enemy2, enemy3];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

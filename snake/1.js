//画布的颜色
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";
//蛇的颜色
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';
//获取记分板
const myScore = document.getElementById('score');

//snake这个全局变量控制着蛇的状态
let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 }
];

let dx = 10;// 横向移动速度
let dy = 0;// 纵向移动速度

let foodX, foodY;//产生食物的点

let score = 0;//分数

let isChangingDirection = false;

var gameCanvas = document.getElementById('gameCanvas');
var ctx = gameCanvas.getContext('2d');

// clearCanvas();

// advanceSnake();

//该函数相当于读取snake数组中的每一项并渲染到canvas画布上，在这个程序里面是关键
// drawSnake();   

// 循环遍历蛇的每一部分，并将其绘制到画布上
function drawSnake() {
    snake.forEach(drawSnakePart);
}
function drawSnakePart(snakePart) {
    ctx.fillStyle = SNAKE_COLOUR;
    ctx.strokeStyle = SNAKE_BORDER_COLOUR;
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

//更新蛇的状态的函数
function advanceSnake() {
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    }
    snake.unshift(head);
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        createFood();
        score += 10;
        drawScore();
    }
    else {
        snake.pop();
    }
}

//清除画布的函数
function clearCanvas() {
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    ctx.strokeStyle = CANVAS_BORDER_COLOUR;

    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function main() {
    setTimeout(function () {
        isChangingDirection = false;
        clearCanvas();//清除画布
        drawFood();//绘制食物
        advanceSnake();//控制蛇的动作
        if (didGameEnd()) {
            window.alert('游戏结束');
            console.log(snake[0]);
            return;
        }
        drawSnake();//绘制蛇

        //再次调用自身
        main();
    }, 150);
}

// window.addEventListener('keydown',function(event){
//     console.log(event.keyCode);
// })

//在按下按键时，改变蛇的运动方向
function changeDirection(event) {
    const LEFT_KEY = 65;
    const RIGHT_KEY = 68;
    const UP_KEY = 87;
    const DOWN_KEY = 83;
    if (isChangingDirection) {
        return;
    }
    isChangingDirection = true;
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;//这里要注意，Y轴的方向是向下的，所以当dy === -10的时候在屏幕上蛇的表现应该是向上走
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
}

//给window添加keydown监听事件
window.addEventListener('keydown', changeDirection);

//随机函数，产生一个随机的在0，300之间的10的倍数的数字
function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

//产生食物的函数
function createFood() {
    // console.log('创造了食物');
    foodX = randomTen(0, gameCanvas.width - 10);
    foodY = randomTen(0, gameCanvas.height - 10);
    snake.forEach(function (part) {
        if (part.x === foodX && part.y === foodY) {
            createFood();
        }
    })
}

//将食物绘制到画布上
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darked';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

//将分数绘制到记分板上
function drawScore() {
    myScore.innerText = '分数:' + score;
}

//判断游戏是否失败
function didGameEnd() {
    let didCollide = false;
    for (let i = 3; i < snake.length; i++) {
        didCollide = snake[0].x === snake[i].x && snake[0].y === snake[i].y;
        if (didCollide) {
            return true;
        }
    }
    //这里要注意，碰撞左右边界的条件是不同的
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > gameCanvas.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > gameCanvas.height - 10;
    return hitLeftWall ||
        hitRightWall ||
        hitToptWall ||
        hitBottomWall;
}

createFood();
main();//开始游戏
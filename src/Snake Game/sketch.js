var snake;
var grid = 15;
var difficulty;
var food;
var squares;

function setup() {
    difficulty = createSlider(0, 20, 15, 1);
    createCanvas(600, 600/*, WEBGL*/);
    snake = new Snake();
    frameRate(difficulty.value());
    foodLocation();
}

function gridd() {
    fill(90);
    squares = createVector(60, 60);
    rect(squares.x, squares.y, grid * 10, grid * 10);
    squares = createVector(405, 60);
    rect(squares.x, squares.y, grid * 10, grid * 10);
    squares = createVector(60, 405);
    rect(squares.x, squares.y, grid * 10, grid * 10);
    squares = createVector(405, 405);
    rect(squares.x, squares.y, grid * 10, grid * 10);
}

function square(pos) {
    var dsq1 = dist(135, 135, pos.x, pos.y); // Center of first square
    var dsq2 = dist(465, 135, pos.x, pos.y); // Center of second square
    var dsq3 = dist(135, 465, pos.x, pos.y); // Center of third square
    var dsq4 = dist(465, 465, pos.x, pos.y); // Center of fourth square
    if (dsq1 < 100 || dsq2 < 100 || dsq3 < 100 || dsq4 < 100) {
        return true;
    } else {
        return false;
    }
}

function foodLocation() {
    var cols = floor(width / grid);
    var rows = floor(height / grid);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(grid);
}

function draw() {

    background('#5c946e');
    gridd();

    if (snake.eat(food) || square(food)) {
        foodLocation();
    }

    snake.dead();
    snake.update();
    snake.show();

    fill('#ed474a');
    rect(food.x, food.y, grid, grid);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    }
}

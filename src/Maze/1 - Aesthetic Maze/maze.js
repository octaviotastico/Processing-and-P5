var sizex = 700;
var sizey = 500;
var stack = [];
var maze = [];
var col, row;
var actual;
var c = 20;
var first;

function setup() {
    createCanvas(sizex, sizey);
    row = floor(height/c);
    col = floor(width/c);
    for(var i = 0; i < row; i++){
        for(var j = 0; j < col; j++){
            var cell = new Cell(j, i);
            maze.push(cell);
        }
    }
    first = floor(random(0, floor(sizex / c)));
    actual = maze[first];
}

function draw() {
    background(186,248,253);

    stroke(0, 102, 153);
    text('IN', first * c + c/6, c - c/4);
    for(var i = 0; i < maze.length; i++){
        maze[i].print();
    }
    actual.visited = true;
    var next = actual.chooseUnvisited();
    if (next){
        next.visited = true;
        stack.push(actual);
        removeWalls(actual, next);
        actual = next;
    } else if (stack.length > 0){
        actual = stack.pop();
    }
}

function Cell(x, y){
    this.x = x;
    this.y = y;
    this.wall = [true, true, true, true];
    this.visited = false;

    this.chooseUnvisited = function(){
        var unvisited = [];
        var left = maze[(x - 1) + y * col];
        var up = maze[x + (y - 1) * col];
        var right = maze[(x + 1) + y * col];
        var down = maze[x + (y + 1) * col];

        if (left && !left.visited) unvisited.push(left);
        if (up && !up.visited) unvisited.push(up);
        if (right && !right.visited) unvisited.push(right);
        if (down && !down.visited) unvisited.push(down);
        if (unvisited.length > 0){
            var r = floor(random(0, unvisited.length));
            return unvisited[r];
        } else {
            return undefined;
        }
    }

    this.print = function(){
        var xc = this.x * c;
        var yc = this.y * c;
        stroke(255,211,211);
        if (this.wall[0]) line(xc, yc, xc, yc + c);
        if (this.wall[1]) line(xc, yc, xc + c, yc);
        if (this.wall[2]) line(xc + c, yc, xc + c, yc + c);
        if (this.wall[3]) line(xc, yc + c, xc + c, yc + c);

        //stroke(50, 50);
        if (this.wall[0]) line(xc+2, yc, xc+2, yc + c);
        if (this.wall[1]) line(xc, yc, xc + c, yc);
        if (this.wall[2]) line(xc + c, yc, xc + c, yc + c);
        if (this.wall[3]) line(xc, yc + c, xc + c, yc + c);

        if (this.visited){
            noStroke();
            fill(218, 174, 234, 100);
            strokeWeight(2.5);
            rect(xc, yc, c, c);
        }

    }
}

function removeWalls(a, b){
    var xd = a.x - b.x;
    if (xd == 1) a.wall[0] = b.wall[2] = false;
    else if (xd == -1) a.wall[2] = b.wall[0] = false;
    var yd = a.y - b.y;
    if (yd == 1) a.wall[1] = b.wall[3] = false;
    else if (yd == -1) a.wall[3] = b.wall[1] = false;
}

/*
function inout(col, row){
    var randin = floor(random(1.1, 4.9));
    if (randin == 1){ //Delete left
        rand = floor(random(0, floor(sizey / c)));
        pos = rand * row;
        if(!maze[pos]){
            inout(col, row);
        }
        maze[pos].wall[0] = false;
        fill(0, 102, 153);
        text('IN/OUT', 0, pos);
    }
    if (randin == 3){ //Delete right
        rand = floor(random(0, floor(sizey / c)));
        pos = col + rand * row;
        if(!maze[pos]){
            inout(col, row);
        }
        maze[pos].wall[0] = false;
    }
    if (randin == 2){ //Delete up
        rand = floor(random(0, floor(sizex / c)));
        pos = rand * col;
        if(!maze[pos]){
            inout(col, row);
        }
        maze[pos].wall[0] = false;
    }
    if (randin == 4){ //Delete down
        rand = floor(random(0, floor(sizex / c)));
        pos = row + rand * col;
        if(!maze[pos]){
            inout(col, row);
        }
        maze[pos].wall[0] = false;
    }
}
*/

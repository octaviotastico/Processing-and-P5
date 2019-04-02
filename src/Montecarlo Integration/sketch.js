var speed = 1000;
var circle = 1;
var square = 1;
var w = 500;
var h = 555;
var r = 500;

function setup() {
    createCanvas(w, h);
    background(186,248,253);
    stroke(100);
    strokeWeight(2);
    fill(255,211,211);
    ellipse(w/2, w/2, r, r);
}

function draw() {
    for(var i = 0; i < speed; i++){
        strokeWeight(3);
        var x = random(0, r);
        var y = random(0, r);
        var d = dist(w/2, w/2, x, y);
        if (d < r/2){
            stroke(161,150,189);
            circle++;
        } else {
            stroke(255,211,211);
            square++;
        }
        point(x, y);
    }
    var pai = 4 * circle/(circle + square);
    stroke(255,128,128);
    rect(2*w/7 - 10, 510, 2*w/7 + 73, 35);
    textSize(20);
    text(pai, 2*w/7, 535);
}

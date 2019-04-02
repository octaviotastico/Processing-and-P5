var circles = [];
var wheel = 0;

function setup() {
    createCanvas(600, 600);
    circle1 = new Bubbles();
}
function mouseWheel(){
    wheel = event.delta;
}
function draw() {
    var d = dist(width/2, height/2, mouseX, mouseY);
    background(50 + d * 0.05);

    textSize(32);
    fill(20, -wheel);
    text('Uziel is gay haha', width/4, 32);

    if (mouseIsPressed){
        var overlapping = true;
        while(overlapping){
            var check = true;
            var n = new Bubbles();
            for(var i = 0; i < circles.length && check; i++){
                var d = dist(n.x, n.y, circles[i].x, circles[i].y);
                if(d > n.size / 2 + circles[i].size / 2) check = check && true;
                else check = false;
            }
            overlapping = !check;
        }
        circles.push(n);
    }
    for(var i = 0; i < circles.length; i++){
        circles[i].show();
        circles[i].movement();
    }
}

class Bubbles {

    constructor() {
        this.size = random(2, 100)
        this.x = random(this.size, width - this.size);
        this.y = random(this.size, height - this.size);
    }

    movement() {
        this.x += random(-0.5, 0.5);
        this.y += random(-0.5, 0.5);

        var d = dist(this.x, this.y, mouseX, mouseY);
        if (d < 200){
            if(this.x > this.size/2 && this.x < width - this.size/2){
                this.x += (mouseX - width/2) * 0.001;
            }
            if(this.y > this.size/2 && this.y < height - this.size/2){
                this.y += (mouseY - height/2) * 0.001;
            }
        }
        /*for(var i = 0; i < circles.length; i++){
            for(var j = 0; j < circles.length; j++){
                var max = circles[j].size/2 + circles[i].size/2;
                var dx = circles[j].x - circles[i].x;
                var dy = circles[j].y - circles[i].y;
                if (dx < max) circles[j].x -= 0.01; circles[i].x += 0.01;
                if (dy < max) circles[j].y -= 0.01; circles[j].y += 0.01;

            }
        }*/
    }

    show() {
        noStroke();
        var d = dist(this.x, this.y, mouseX, mouseY);
        if (d < this.size/2){
            this.color = 255;
        } else {
            this.color = 200;
        }
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

}

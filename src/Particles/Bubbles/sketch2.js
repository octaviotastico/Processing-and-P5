
var circles = [];

function setup() {
    createCanvas(600, 600);
    circle1 = new Bubbles();
}

function draw() {
    background(50);
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

        if(this.x > this.size/2 && this.x < width - this.size/2){
            this.x += (mouseX - width/2) * 0.001;
        }
        if(this.y > this.size/2 && this.y < height - this.size/2){
            this.y += (mouseY - height/2) * 0.001;
        }
    }

    show() {
        noStroke();
        fill(200);
        ellipse(this.x, this.y, this.size);
    }

}

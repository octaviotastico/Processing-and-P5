let particle = [];
var quantity;
var gravity;
var wind;
var angle;

function setup() {
    createCanvas(600, 600);
    quantity = createSlider(0, 20, 10, 0.1);
    gravity = createSlider(-20, 5, -10, 0.1);
    wind = createSlider(-5, 5, -2, 0.1);
    angle = createSlider(0, 10, 1, 0.1);
}

function draw() {
    background(80);

    if (mouseIsPressed && mouseButton === LEFT) {
        for (var i = 0; i < quantity.value(); i++) {
            let p = new Particle();
            particle.push(p);
        }
    }

    for (let i = particle.length - 1; i >= 0; i--) {
        particle[i].update();
        particle[i].show();
        if (particle[i].alpha < 0){
            particle.splice(i, 1);
        }
    }
}

class Particle {

    constructor() {
        this.x = mouseX;
        this.y = mouseY;
        this.vx = random(-1 * angle.value(), 1 * angle.value());
        this.vy = random(-1, -2);
        this.alpha = 255;
        this.time = 0;
    }

    update() {
        this.x += this.vx + wind.value();
        this.y += this.vy + gravity.value() + this.time;
        this.alpha -= 2;
        this.time++;
    }

    show() {
        noStroke();
        fill(200, this.alpha);
        ellipse(this.x, this.y, 16);
    }

}

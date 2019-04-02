let particle = [];
var quantity;
var gravity;
var wind;

function setup() {
    createCanvas(600, 600);
    aceleration = createSlider(-5, 5, 0, 0.1);
    quantity = createSlider(0, 20, 10, 0.1);
    gravity = createSlider(-20, 5, 0, 0.1);
    wind = createSlider(-5, 5, 0, 0.1);
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
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.aceleration = 1;
        this.gravity = 1;
        this.alpha = 255;
    }

    update() {
        this.x += (this.vx + wind.value()) * this.aceleration;
        this.y += (this.vy + gravity.value() + this.gravity) * this.aceleration;
        this.alpha -= 5;
        this.gravity -= 0.07;
        this.aceleration -= 0.5;
    }

    show() {
        noStroke();
        fill(200, this.alpha);
        ellipse(this.x, this.y, 16);
    }

}

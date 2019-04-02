let particle = [];
var quantity;

function setup() {
    createCanvas(600, 600);
    quantity = createSlider(0, 20, 10, 1);
}

function draw() {
    background(80);
    for (var i = 0; i < quantity.value(); i++) {
        let p = new Particle();
        particle.push(p);
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
        this.x = 300;
        this.y = 580;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 2;
    }

    show() {
        noStroke();
        fill(200, this.alpha);
        ellipse(this.x, this.y, 16);
    }

}

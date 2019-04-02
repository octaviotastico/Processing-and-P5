// Variables.
let angle = 0;

// Setup function.
function setup() {
  createCanvas(400, 400);
}

function draw() {
    translate(width / 2, height / 2);
    rectMode(CENTER);
    background('#ffd3d3');

    let offset = 0;
    for (let y = 0; y < width; y += 10){
        let a = angle + offset;
        let h = map(cos(a), -1, 1, 0, 100) + 10;
        let half = width / 2;
        rect(y - half, 0, 11, h);
        fill(255);
        offset += 2;
    }

    angle += 0.1;
}

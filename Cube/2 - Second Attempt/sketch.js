// Variables.
let angle = 0;
let w = 11;

// Setup function.
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
    //translate(width / 2, height / 2);
    rectMode(CENTER);
    background('#ffd3d3');
    translate(-30, 0, 0);
    rotateX(-PI/8);
    rotateY(-PI/8);

    let offset = 0;
    for (let y = 0; y < width; y += w){
        push();
        let a = angle + offset;
        let h = map(2*cos(a), -1, 1, 0, 100) + 10;
        let half = width / 2;
        //rect(y - half + w / 2, 0, w, h);
        fill(255);
        translate(y - half, 0, 10);
        box(w, h, w);
        offset += 0.5;
        pop();
    }

    angle += 0.1;
}

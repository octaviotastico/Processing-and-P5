// Variables.
let angle = 0;
let w = 30;
let maxDistance;

// Setup function.
function setup() {
  createCanvas(400, 400, WEBGL);
  maxDistance = dist(0, 0, 200, 200);
}

function draw() {
    //translate(width / 2, height / 2);
    rectMode(CENTER);
    ambientLight(255, 255, 255, 0, -1, 0);
    background('#ffd3d3');
    translate(40, -20, -150);
    rotateX(-PI/8 - 0.05);
    rotateY(-PI/8 - 0.05);
    //rotateZ(-0.1);

    for (let z = 0; z < height; z += w){
        for (let x = 0; x < width; x += w){
            push();
            let halfw = width / 2;
            let halfh = height / 2;
            let d = dist(x, z, halfw, halfh);
            let offset = map(d, 0, maxDistance, -4, 4);
            let a = angle + offset;
            let h = map(cos(a)/2, -1, 1, 0, 250) + 10;
            translate(x - halfw, 0, z - halfh);
            //normalMaterial();
            specularMaterial('#daaeea', 10, 300, 90);
            box(w - 1, h / 3, w - 1);
            pop();
        }
    }
    angle -= 0.13;
}

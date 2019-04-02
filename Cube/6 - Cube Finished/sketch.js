// Variables.
let angle = 0;
let w = 30;
let rotateangle;
let maxDistance;

// Setup function.
function setup() {
  createCanvas(400, 400, WEBGL);
  rotateangle = atan(1/sqrt(2));
  maxDistance = dist(0, 0, 200, 200);
}

function draw() {
    ortho(-325, 300, -325, 300, 0, 1000);
    rectMode(CENTER);
    ambientLight(255, 255, 255, 0, -1, 0);
    background('#ffd3d3');
    rotateX(-QUARTER_PI + 0.2);
    rotateY(rotateangle);

    for (let z = 0; z < height; z += w){
        for (let x = 0; x < width; x += w){
            push();
            let halfw = width / 2;
            let halfh = height / 2;
            let d = dist(x, z, halfw, halfh);
            let offset = map(d, 100, maxDistance, 0, 4);
            let a = angle + offset;
            let h = map(cos(a)/2, -1, 1, 0, 1000) + 100;
            translate(x - halfw, 0, z - halfh);
            normalMaterial();
            //specularMaterial('#daaeea', 10, 300, 90);
            box(w, h / 3, w);
            pop();
        }
    }
    angle -= 0.06;
}

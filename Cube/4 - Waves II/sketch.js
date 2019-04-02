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
    ambientLight(255, 255, 255, 0, -1, 0);
    background('#ffd3d3');
    translate(-15, -70, 0);
    rotateX(-PI/8);
    rotateY(-PI/8 - 0.05);

    let offset = 0;
    for (let z = 0; z < height; z += w){
        for (let x = 0; x < width; x += w){
            push();
            let a = angle + offset;
            let h = map(cos(a)/2, -1, 1, 0, 100) + 10;
            let halfw = width / 2;
            let halfh = height / 2;
            translate(x - halfw, 0, z - halfh);
            //normalMaterial();
            specularMaterial('#daaeea', 10, 300, 90);
            box(w - 1, h / 3, w - 1);
            offset += 0.5;
            pop();
        }
        offset += 0.5;
    }

    angle += 0.1;
}

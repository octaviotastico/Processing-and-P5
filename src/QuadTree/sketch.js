var capacity = 4;
var points = 50;

function setup() {
    createCanvas(400, 400);

    let boundary = new Rectangle(200, 200, 200, 200);
    qt = new QuadTree(boundary, capacity);
    console.log(qt);

    for (let i = 0; i < points; i++) {
        let p = new Point(random(width), random(height));
        qt.insert(p);
    }

    background(186,248,253);
    qt.show();

}

function draw() {
    if (mouseIsPressed){
        let n = new Point(mouseX, mouseY);
        qt.insert(n);
    }
    qt.show();
}

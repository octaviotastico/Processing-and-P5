var angle = PI / 4;
var slider;
var slider2;
var slider3;

function setup() {
    createCanvas(1299, 610);
    slider = createSlider(0, PI, PI / 4, 0.01);
    slider2 = createSlider(5, 10, 7, 0.01);
    slider3 = createSlider(50, 300, 200, 1);
    slider4 = createSlider(1, 300, 5, 0.1);
}

function draw() {
    background(70);
    angle = slider.value();
    thickness = slider2.value();
    tam = slider3.value();
    mintam = slider4.value();
    stroke(255);
    strokeWeight(10);
    translate(650, height);
    branch(tam, thickness, mintam);
}

function branch(s, w, mt){
    strokeWeight(w);
    line(0, 0, 0, -s);
    translate(0, -s);
    w = w * 0.8;

    if(s > mt){
        push();
        rotate(-angle);
        branch(s * 2/3, w, mt);
        pop();

        push();
        rotate(angle);
        branch(s * 2/3, w, mt);
        pop();
    }
}

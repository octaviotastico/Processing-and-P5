// Vars.
var axiom = "A";
var sentence = axiom;
var rules = [];
var len = 450;

// Javascript Objects.
rules[0] = {
    a: "A",
    b: "LBFRAFARFBL"
}
rules[1] = {
    a: "B",
    b: "RAFLBFBLFAR"
}

// Remplaces A and B for the rules.
function generate(){
    len *= 0.495;
    var nextSentence = "";
    for(var i = 0; i < sentence.length; i++){
        var found = false;
        var current = sentence.charAt(i);
        for(var j = 0; j < rules.length && !found; j++){
            if(current == rules[j].a){
                nextSentence += rules[j].b;
                found = true;
            }
        }
        if(!found) nextSentence += current;
    }
    sentence = nextSentence;
    createP(sentence);
    turtle();
}

// Draw function.
function turtle(){
    background(186,248,253);
    resetMatrix();
    translate(width - width/10, height - height/10);
    for(var i = 0; i < sentence.length; i++){
        var current = sentence.charAt(i);
        if (current == "F"){
            line(0, 0, -len, 0);
            translate(-len, 0);
        } else if(current == "R") {
            rotate(3*PI/2);
        } else if(current == "L") {
            rotate(-3*PI/2);
        }
    }
}

// Setum function.
function setup(){
    createCanvas(500, 500);
    background(186,248,253);
    createP(axiom);
    strokeWeight(2);
    stroke(255,125,255);
    turtle();
    var button = createButton("generate");
    button.mousePressed(generate);
}

// Just a recordatory:

// F = Draw a fordward line
// L = Turn left 90º
// R = Turn right 90º
// A = Replaces by the rule 1
// B = Replaces by the rule 2

// If you were to need to save your position
// You can use [ = save position, *make stuff*
// and then ] = restore position at [ and keep
// making magic stuff.
// In turtle, [ means push(), and ] means pop()

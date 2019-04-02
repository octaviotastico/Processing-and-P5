// Vars
var axiom = "A";
var rules = [];
var sentence = axiom;

// Javascript Objects
rules[0] = {
    a: "A",
    b: "AB"
}
rules[1] = {
    a: "B",
    b: "A"
}

function generate(){
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
}

function setup(){
    noCanvas();
    createP(axiom);
    var button = createButton("generate");
    button.mousePressed(generate);
}

function draw(){



}

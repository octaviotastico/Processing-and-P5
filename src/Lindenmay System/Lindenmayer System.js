// Vars
var axiom = "A";
var sentence = axiom;

// Javascript Objects
var rule1 = {
    a: "A",
    b: "AB"
}
var rule2 = {
    a: "B",
    b: "A"
}

function generate(){
    var nextSentence = "";
    for(var i = 0; i < sentence.length; i++){
        var current = sentence.charAt(i);
        if(current == rule1.a){
            nextSentence += rule1.b;
        } else if (current == rule2.a){
            nextSentence += rule2.b;
        } else {
            nextSentence += current;
        }
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

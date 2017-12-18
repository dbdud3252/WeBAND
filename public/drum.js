var socket;

function setup(){
    createCanvas(windowWidth, windowHeight).parent('sketch');
    socket = io.connect('http://localhost:3000');
}



function draw(){
  draw_drum();
}

function draw_drum(){

}
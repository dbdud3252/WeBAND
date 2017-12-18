var socket;
var closehh, openhh, crash, kick, ride, snare, tom1, tom2, tom3;

function preload() {
  closehh = loadImage("drum_image/closehh.png");
  openhh = loadImage("drum_image/openhh.png");
  crash = loadImage("drum_image/crash.png");
  kick = loadImage("drum_image/kick.png");
  ride = loadImage("drum_image/ride.png");
  snare = loadImage("drum_image/snare.png");
  tom1 = loadImage("drum_image/tom1.png");
  tom2 = loadImage("drum_image/tom2.png");
  tom3 = loadImage("drum_image/tom3.png");
}

function setup(){
    createCanvas(1000, 600).parent('sketch');
    socket = io.connect('http://localhost:3000');
    background(0);

    image(kick, 360, 290, width/4, width/4);
    image(snare, 270, 250, width/7, width/7);
    image(tom1, 360, 140, width/7, width/7);
    image(tom3, 570, 250, width/5, width/5);
    image(tom2, 500, 130, width/6, width/6);
    image(openhh, 170, 350, width/6, width/6);
    image(closehh, 130, 220, width/6, width/6);
    image(crash, 190, 50, width/5, width/5);
    image(ride, 650, 70, width/4, width/4);
    
}



function draw(){
  draw_drum();
}

function draw_drum(){

}

var socket;

function preload() {
  guitar_img = loadImage("guitar/guitar_image.png");
}

function setup(){
    createCanvas(1000, 600).parent('sketch1');
    socket = io.connect('http://localhost:3000');
    background(0);
}



function draw(){
  draw_guitar();
}

function draw_guitar(){
    image(guitar_img,-250,50,width*1.4,height/1.2);
}



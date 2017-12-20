var socket;

function preload(){
    img=loadImage("web.jpg");
}

function setup(){
    createCanvas(1000, 600);
    socket = io.connect('http://localhost:3000');
    background(0);
}

function draw(){
    image(img,50,50,900,500);
}
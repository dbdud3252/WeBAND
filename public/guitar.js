var socket;
var guitar_img;
var c_img, f_img, g_img;
var c_1, c_2, c_3, c_4, c_5, c_6, f_1,f_2,f_3,f_4,f_5,f_6,g_1,g_2,g_3,g_4,g_5,g_6;
var s_closehh, s_openhh, s_crash, s_kick, s_ride, s_snare, s_tom1, s_tom2, s_tom3;
var mode;
var keys_down = [false,false,false,false,false,false,false,false,false];
var key_set=["J","D","F","H","G","A","S","W","I"];

function preload() {
    soundFormats('ogg', 'wav');
    s_closehh = loadSound("drum/closehh.wav");
    s_openhh = loadSound("drum/openhh.wav");
    s_crash = loadSound("drum/crash.wav");
    s_kick = loadSound("drum/kick.wav");
    s_ride = loadSound("drum/ride.wav");
    s_snare = loadSound("drum/snare.wav");
    s_tom1 = loadSound("drum/tom1.wav");
    s_tom2 = loadSound("drum/tom2.wav");
    s_tom3 = loadSound("drum/tom3.wav");
    guitar_img = loadImage("guitar/guitar_image.png");
    c_img = loadImage("guitar/c_img.png")
    f_img = loadImage("guitar/f_img.png")
    g_img = loadImage("guitar/g_img.png")
    c_1 = loadSound("guitar/c/1.mp3");
    c_2 = loadSound("guitar/c/2.mp3");
    c_3 = loadSound("guitar/c/3.mp3");
    c_4 = loadSound("guitar/c/4.mp3");
    c_5 = loadSound("guitar/c/5.mp3");
    c_6 = loadSound("guitar/c/6.mp3");
    f_1 = loadSound("guitar/f/1.mp3");
    f_2 = loadSound("guitar/f/2.mp3");
    f_3 = loadSound("guitar/f/3.mp3");
    f_4 = loadSound("guitar/f/4.mp3");
    f_5 = loadSound("guitar/f/5.mp3");
    f_6 = loadSound("guitar/f/6.mp3");
    g_1 = loadSound("guitar/g/1.mp3");
    g_2 = loadSound("guitar/g/2.mp3");
    g_3 = loadSound("guitar/g/3.mp3");
    g_4 = loadSound("guitar/g/4.mp3");
    g_5 = loadSound("guitar/g/5.mp3");
    g_6 = loadSound("guitar/g/6.mp3");
}

function setup(){
    createCanvas(1000, 600);
    socket = io.connect('http://localhost:3000');
    background(0);
    frameRate(500);
    socket.on('guitar',
    // When we receive data
    function(sound) {
      console.log("Got: " + sound);
      if(sound=="c1"){c_1.play();}
      else if(sound=="c2"){c_2.play();}
      else if(sound=="c3"){c_3.play();}
      else if(sound=="c4"){c_4.play();}
      else if(sound=="c5"){c_5.play();}
      else if(sound=="c6"){c_6.play();}
      else if(sound=="f1"){f_1.play();}
      else if(sound=="f2"){f_2.play();}
      else if(sound=="f3"){f_3.play();}
      else if(sound=="f4"){f_4.play();}
      else if(sound=="f5"){f_5.play();}
      else if(sound=="f6"){f_6.play();}
      else if(sound=="g1"){g_1.play();}
      else if(sound=="g2"){g_2.play();}
      else if(sound=="g3"){g_3.play();}
      else if(sound=="g4"){g_4.play();}
      else if(sound=="g5"){g_5.play();}
      else if(sound=="g6"){g_6.play();}
    }
  );

    socket.on('drum',
    // When we receive data
    function(key) {
        console.log("Got: " + key);
        if(key=="S"){s_closehh.play();}
        else if(key=="A"){s_openhh.play();}
        else if(key=="W"){s_crash.play();}
        else if(key=="J"){s_kick.play();}
        else if(key=="I"){s_ride.play();}
        else if(key=="D"){s_snare.play();}
        else if(key=="F"){s_tom1.play();}
        else if(key=="G"){s_tom2.play();}
        else if(key=="H"){s_tom3.play();}
    }
    );
}



function draw(){
   draw_guitar();
   sound();
}

function draw_guitar(){
    noTint();
    image(guitar_img,-250,50,width*1.4,height/1.2);
    if(mode==1){
        tint(0, 153, 204);
        image(c_img,0,0,70,50);
        noTint();
        image(g_img,100,0,70,50);
        noTint();
        image(f_img,200,0,70,50); 
    }
    else if(mode==2){
        noTint();
        image(c_img,0,0,70,50);
        tint(0, 153, 204);
        image(g_img,100,0,70,50);
        noTint();
        image(f_img,200,0,70,50); 
    }
    else if(mode==3){
        noTint();
        image(c_img,0,0,70,50);
        noTint();
        image(g_img,100,0,70,50);
        tint(0, 153, 204);
        image(f_img,200,0,70,50); 
    }
    else{
        noTint();
        image(c_img,0,0,70,50);
        noTint();
        image(g_img,100,0,70,50);
        noTint();
        image(f_img,200,0,70,50); 
    }
    
}



function keyPressed(){
    if (key=="C"){
        mode=1;
    }
    else if (key=="G"){
        mode=2;
    }
    else if (key=="F"){
        mode=3;
    }
}

function sound(){
    if (mode==1){
        if (mouseIsPressed){
            c_set();
        }        
    }
    else if (mode==2){
        if (mouseIsPressed){
            g_set();
    }
}
    else if (mode==3){
        if (mouseIsPressed){
            f_set();
         }
    }
}

function c_set(){
    if((621<mouseX) && (mouseX<747)){
        c_play();
    }
}

function c_play(){
    if (mouseY==265){
        c_1.play(); sendsound("c1");
    }
    if (mouseY==273){
        c_2.play(); sendsound("c2");
    }
    if (mouseY==290){
        c_3.play(); sendsound("c3");
    }
    if (mouseY==310){
        c_4.play(); sendsound("c4");
    }
    if (mouseY==325){
        c_5.play(); sendsound("c5");
    }
    if (mouseY==342){
        c_6.play(); sendsound("c6");
    }
}

function g_set(){
    if((621<mouseX) && (mouseX<747)){
        g_play();
    }
}

function g_play(){
    if (mouseY==265){
        g_1.play(); sendsound("g1");
    }
    if (mouseY==273){
        g_2.play(); sendsound("g2");
    }
    if (mouseY==290){
        g_3.play(); sendsound("g3");
    }
    if (mouseY==310){
        g_4.play(); sendsound("g4");
    }
    if (mouseY==325){
        g_5.play(); sendsound("g5");
    }
    if (mouseY==342){
        g_6.play(); sendsound("g6");
    }
}

function f_set(){
    if((621<mouseX) && (mouseX<747)){
        f_play();
    }
}

function f_play(){
    if (mouseY==265){
        f_1.play(); sendsound("f1");
    }
    if (mouseY==273){
        f_2.play(); sendsound("f2");
    }
    if (mouseY==290){
        f_3.play(); sendsound("f3");
    }
    if (mouseY==310){
        f_4.play(); sendsound("f4");
    }
    if (mouseY==325){
        f_5.play(); sendsound("f5");
    }
    if (mouseY==342){
        f_6.play(); sendsound("f6");
    }
}


function sendsound(sound) {
    // We are sending!
    console.log("sendsound: " + sound);

    // Send that object to the socket
    socket.emit('guitar',sound);
}
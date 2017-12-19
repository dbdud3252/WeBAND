var socket;
var s_closehh, s_openhh, s_crash, s_kick, s_ride, s_snare, s_tom1, s_tom2, s_tom3;
var closehh, openhh, crash, kick, ride, snare, tom1, tom2, tom3;
var keys_down = [false,false,false,false,false,false,false,false,false];
var key_set=["J","D","F","H","G","A","S","W","I"];
function preload() {
  soundFormats('ogg', 'wav');
  closehh = loadImage("drum_image/closehh.png");
  openhh = loadImage("drum_image/openhh.png");
  crash = loadImage("drum_image/crash.png");
  kick = loadImage("drum_image/kick.png");
  ride = loadImage("drum_image/ride.png");
  snare = loadImage("drum_image/snare.png");
  tom1 = loadImage("drum_image/tom1.png");
  tom2 = loadImage("drum_image/tom2.png");
  tom3 = loadImage("drum_image/tom3.png");
  s_closehh = loadSound("drum/closehh.wav");
  s_openhh = loadSound("drum/openhh.wav");
  s_crash = loadSound("drum/crash.wav");
  s_kick = loadSound("drum/kick.wav");
  s_ride = loadSound("drum/ride.wav");
  s_snare = loadSound("drum/snare.wav");
  s_tom1 = loadSound("drum/tom1.wav");
  s_tom2 = loadSound("drum/tom2.wav");
  s_tom3 = loadSound("drum/tom3.wav");
}

function setup(){
    createCanvas(1000, 600);
    socket = io.connect('http://localhost:3000');
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
    background(0);
}



function draw(){
  draw_drum();
}

function draw_drum(){
    if (keys_down[0]==true){
        tint(0, 153, 204);
        image(kick, 360, 290, width/4, width/4);
        keys_down[0]=false;
    }
    else{
        noTint();
        image(kick, 360, 290, width/4, width/4);
    }
    if (keys_down[1]==true){
        tint(0, 153, 204);
        image(snare, 270, 250, width/7, width/7);
        keys_down[1]=false;
    }
    else{
        noTint();
        image(snare, 270, 250, width/7, width/7);
    }
    if (keys_down[2]==true){
        tint(0, 153, 204);
        image(tom1, 360, 140, width/7, width/7);
        keys_down[2]=false;
    }
    else{
        noTint();
        image(tom1, 360, 140, width/7, width/7);
    }
    if (keys_down[3]==true){
        tint(0, 153, 204);
        image(tom3, 570, 250, width/5, width/5);
        keys_down[3]=false;
    }
    else{
        noTint();
        image(tom3, 570, 250, width/5, width/5);
    }
    if (keys_down[4]==true){
        tint(0, 153, 204);
        image(tom2, 500, 130, width/6, width/6);
        keys_down[4]=false;
    }
    else{
        noTint();
        image(tom2, 500, 130, width/6, width/6);
    }
    if (keys_down[5]==true){
        tint(0, 153, 204);
        image(openhh, 170, 350, width/6, width/6);
        keys_down[5]=false;
    }
    else{
        noTint();
        image(openhh, 170, 350, width/6, width/6);
    }
    if (keys_down[6]==true){
        tint(0, 153, 204);
        image(closehh, 130, 220, width/6, width/6);
        keys_down[6]=false;
    }
    else{
        noTint();
        image(closehh, 130, 220, width/6, width/6);
    }
    if (keys_down[7]==true){
        tint(0, 153, 204);
        image(crash, 190, 50, width/5, width/5);
        keys_down[7]=false;
    }
    else{
        noTint();
        image(crash, 190, 50, width/5, width/5);
    }
    if (keys_down[8]==true){
        tint(0, 153, 204);
        image(ride, 650, 70, width/4, width/4);
        keys_down[8]=false;
    }
    else{
        noTint();
        image(ride, 650, 70, width/4, width/4);
    }


}

function keyPressed(){
    Keys(true);
    console.log("pressed");
}



function Keys(state){
    for( var i = 0; i <9; i++){
      if( key_set[i] == key){
          keys_down[i] = state;
          if(key=="S"){s_closehh.play(); sendsound(key);}
          else if(key=="A"){s_openhh.play(); sendsound(key);}
          else if(key=="W"){s_crash.play(); sendsound(key);}
          else if(key=="J"){s_kick.play(); sendsound(key);}
          else if(key=="I"){s_ride.play(); sendsound(key);}
          else if(key=="D"){s_snare.play(); sendsound(key);}
          else if(key=="F"){s_tom1.play(); sendsound(key);}
          else if(key=="G"){s_tom2.play(); sendsound(key);}
          else if(key=="H"){s_tom3.play(); sendsound(key);}

        console.log("play");
        console.log(state);

        console.log(keys_down);

      }
    }

  }


function sendsound(key) {
    // We are sending!
    console.log("sendsound: " + key);

    // Send that object to the socket
    socket.emit('drum',key);
}
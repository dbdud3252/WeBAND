var socket;
var tone_data=['A','S','D','F','G','H','J','K','L','186'];
var note_data=['C4','D4','E4','F4','G4','A4','B4','C5','D5','E5']
var sharp_note_data=['C#4','D#4','F#4','G#4','A#4','C#5','D#5']
var sharp_data=['W','E','T','Y','U','O','P'];
var keys_down = new Array(tone_data.length)
var sharp_keys_down = new Array(sharp_data.length)
var i=0;

var s_closehh, s_openhh, s_crash, s_kick, s_ride, s_snare, s_tom1, s_tom2, s_tom3;
var c_1, c_2, c_3, c_4, c_5, c_6, f_1,f_2,f_3,f_4,f_5,f_6,g_1,g_2,g_3,g_4,g_5,g_6;
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

var synth = new Tone.Synth({
    "oscillator" : {
        "type" : "square"
    },
    "envelope" : {
        "attack" : 0.01,
        "decay" : 0.2,
        "sustain" : 0.2,
        "release" : 0.2,
    }
}).toMaster();

function setup(){
    createCanvas(805,246);
    background(0);
    socket = io.connect('http://localhost:3000');
    socket.on('sound',
    // When we receive data
    function(note) {
      if(note=="Release"){
        synth.triggerRelease();
      }
      else{
      console.log("Got: " + note );
      synth.triggerAttack(note);
      }
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
}



function draw(){
  draw_all_piano();
}

function draw_all_piano(){

  for(var j=0;j<10;j++) {
    if (keys_down[j]==true){
      fill(96);
      rect(j*80,0,80,240);

    }
    else{
      fill(255);
      rect(j*80,0,80,240);

    }
  }

  for(var j=0;j<9;j++) {
    if(j==2 || j==6) continue;
    if (j<2){
      if (sharp_keys_down[j]==true){
        fill(96);
        rect(56+j*80,0,48,160);
      }
      else{
        fill(0);
        rect(56+j*80,0,48,160);
      }
    }
    else if (j>2 && j<6){
      if (sharp_keys_down[j-1]==true){
        fill(96);
        rect(56+j*80,0,48,160);
      }
      else{
        fill(0);
        rect(56+j*80,0,48,160);
      }
    }
    else{
      if (sharp_keys_down[j-2]==true){
        fill(96);
        rect(56+j*80,0,48,160);
      }
      else{
        fill(0);
        rect(56+j*80,0,48,160);
      }
    }


  }
  textSize(32);
  for(var j=0; j<10; j++) {
    fill(0);
    textAlign(CENTER);
    if(tone_data[j]==186){
        text(";", 40+j*80, 230);
    }
    else{
        text(tone_data[j], 40+j*80, 230);
    }
  }
  textSize(25);
  for(var j=0;j<9;j++) {
    if(j==2 || j==6) continue;
    if (j<2){
      fill(255);
      textAlign(CENTER);
      text(sharp_data[j], 80+j*80, 150);

    }
    else if (j>2 && j<6){
      fill(255);
      text(sharp_data[j-1], 80+j*80, 150);
    }
    else{
      fill(255);
      text(sharp_data[j-2], 80+j*80, 150);
    }
  }
}

function keyPressed(){
  Keys(true);
  console.log("key is pressed");
  console.log(key);
  console.log(keyCode);

}

function keyReleased(){
    Keys(false);
    synth.triggerRelease();
    sendsound("Release");
}


function Keys(state){
  for( var i = 0; i < tone_data.length; i++){
    if( tone_data[i] == key ||  tone_data[i]== keyCode ){ keys_down[i] = state;
        synth.triggerAttack(note_data[i]);
        var note= note_data[i];
        sendsound(note);
    }


  }
  for( var i = 0; i < sharp_data.length; i++){
    if( sharp_data[i] == key ){ sharp_keys_down[i] = state;
        synth.triggerAttack(sharp_note_data[i]);
        var note= sharp_note_data[i];
        sendsound(note);
        }

    }
}


  function sendsound(note) {
    // We are sending!
    console.log("sendsound: " + note);

    // Send that object to the socket
    socket.emit('sound',note);
  }
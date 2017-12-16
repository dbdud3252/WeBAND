var socket;
var tone_data=['A','S','D','F','G','H','J','K','L',';'];
var sharp_data=['W','E','T','Y','U','O','P'];
var keys_down = new Array(tone_data.length)
var sharp_keys_down = new Array(sharp_data.length)
var i=0;

function setup(){
    createCanvas(800,240).parent('sketch');
    socket = io.connect('http://localhost:3000');
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
    text(tone_data[j], 40+j*80, 230);
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
  console.log(keys_down);
  console.log(key);
}

function keyReleased(){
    Keys(false);
}


function Keys(state){
  for( var i = 0; i < tone_data.length; i++){
    if( tone_data[i] == key ){ keys_down[i] = state; }
  }
  for( var i = 0; i < sharp_data.length; i++){
    if( sharp_data[i] == key ){ sharp_keys_down[i] = state; }
  }
}



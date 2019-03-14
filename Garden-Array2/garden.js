// harta gradinii - array
const EMPTY    = 0;
const CUCUMBER = 1;
const MELON    = 2;
const TOMATO   = 3;
const RAT = 4;

const CUCUMBER_PRICE = 10;
const MELON_PRICE    = 20;
const TOMATO_PRICE   = 30;
const RAT_PRICE = 50;
var money = 100;

///////////////////coordonate guzgan////////////
var rat_r = 0;
var rat_c = 1;
var rat_direction = "right";
////////////////////coordonate guzgan//////////

// calulele de tip Number
var garden = [
  [0,4,1,0,2,0,2,0,3,0],
  [0,1,0,2,0,3,3,0,2,0],
  [1,0,3,3,3,1,0,2,0,2],
  [0,1,2,3,0,2,0,1,0,3],
  [0,2,3,1,0,0,2,1,3,0],
  [1,0,3,2,2,3,3,0,2,0],
  [3,1,2,1,2,3,0,2,2,0],
  [1,0,2,2,0,3,0,3,0,1],
  [2,2,0,3,3,3,3,1,0,1],
  [2,0,3,1,1,1,1,0,2,1],
];

///////////////miscarile guzganului//////
function moveRatright(){
  if(rat_c<9){
  garden[rat_r][rat_c] = EMPTY;
  garden[rat_r][++rat_c] = RAT;
  show();
}
}

function moveRatleft(){
  if(rat_c>0){
  garden[rat_r][rat_c] = EMPTY;
  garden[rat_r][--rat_c] = RAT;
  show();
}
}
function moveRatdown(){
  if(rat_r<9){
  garden[rat_r][rat_c] = EMPTY;
  garden[++rat_r][rat_c] = RAT;
  show();
}
}
function moveRatup(){
  if(rat_r>0){
  garden[rat_r][rat_c] = EMPTY;
  garden[--rat_r][rat_c] = RAT;
  show();
}
}
function moveRat(){

///////////schimbarea directiei aleatorii//////
if(Math.round(Math.random()*100) % 5 == 0){

rat_direction = randomDirection();
}




  if(rat_direction == "right" ){
    moveRatright();
  }if(rat_direction == "left"){
    moveRatleft();
  }if (rat_direction == "down") {
    moveRatdown();
  }if(rat_direction == "up"){
    moveRatup();
  }
}
setInterval(moveRat, 1);

function randomDirection(){
  var directions = ["right","left","up","down"];
  return directions[Math.round(Math.random()*3)];
}

/////////////miscarile guzganului///////


function show(){
  var div = document.getElementById('garden');
  div.innerHTML = '';

  for (var r=0; r<=9; r++){
    for( var c=0; c<=9; c++){

  if (garden[r][c] == MELON ){
    div.innerHTML +=('<div class="melon" onclick="gather(MELON,'+r+','+c+');"></div>')
  }if (garden[r][c] == TOMATO) {
    div.innerHTML +=('<div class="tomato" onclick="gather(TOMATO,'+r+','+c+');"></div>')
  }if (garden[r][c] == CUCUMBER) {
    div.innerHTML +=('<div class="cucumber" onclick="gather(CUCUMBER,'+r+','+c+');"></div>')
  }if (garden[r][c] == EMPTY) {
    div.innerHTML +=('<div class="empty" onclick="gather(EMPTY,'+r+','+c+');"></div>')
  }if (garden[r][c] == RAT){
    div.innerHTML +=('<div class="mouse" onclick = "gather(RAT, '+r+','+c+');"></div>')
  }
  }

}
  function showCoin(){
  var divCoin = document.getElementById('coin');
  divCoin.innerHTML = '';
  divCoin.innerHTML += ('<div class="money"></div> ');
}
showCoin();
var money_div = document.getElementById('showMoney');
    money_div.innerHTML = money;
}

function gather(vegetable, r, c ){
  if (vegetable == MELON) {
    garden[r][c] = EMPTY;
    money = money + MELON_PRICE ;
      show();
  }if (vegetable == TOMATO) {
    garden[r][c] = EMPTY;
    money = money + TOMATO_PRICE;
      show();
  }if (vegetable == CUCUMBER) {
    garden[r][c] = EMPTY;
    money = money + CUCUMBER_PRICE;
      show();
  }if (vegetable == EMPTY) {
    garden[r][c] = prompt("Ce Plantam???")
    money = money - CUCUMBER_PRICE*0.5;
    show();
  }if (vegetable == RAT) {
    garden[r][c] = EMPTY;
    money = money - RAT_PRICE;
      show();
    }
  }


show();

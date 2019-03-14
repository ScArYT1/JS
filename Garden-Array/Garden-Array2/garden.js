// harta gradinii - array
const EMPTY    = 0;
const CUCUMBER = 1;
const MELON    = 2;
const TOMATO   = 3;

const CUCUMBER_PRICE = 10;
const MELON_PRICE    = 20;
const TOMATO_PRICE   = 30;

var money = 100;


// calulele de tip Number
var garden = [        // index
  MELON,              // 0
  MELON,              // 1
  MELON,              // 2
  EMPTY,              // 3
  EMPTY,              // 4
  TOMATO,             // 5
  TOMATO,             // 6
  EMPTY,              // 7
  CUCUMBER,           // 8
  CUCUMBER,           // 9
];


function show(){
  var div = document.getElementById('garden');
  div.innerHTML = '';
for (var i = 0; i <= 9; i++) {
  if (garden[i] == MELON ){
    div.innerHTML +=('<div class="melon" onclick="gather(MELON,'+i+');"></div>')
  }if (garden[i] == TOMATO) {
    div.innerHTML +=('<div class="tomato" onclick="gather(TOMATO,'+i+');"></div>')
  }if (garden[i] == CUCUMBER) {
    div.innerHTML +=('<div class="cucumber" onclick="gather(CUCUMBER,'+i+');"></div>')
  }if (garden[i] == EMPTY) {
    div.innerHTML +=('<div class="empty" onclick="gather(EMPTY,'+i+');"></div>')
  }
  }
  function showCoin(){
  var divCoin = document.getElementById('coin');
  divCoin.innerHTML = '';
  divCoin.innerHTML += ('<div class="money" ></div> ');
}
showCoin();
var money_div = document.getElementById('showMoney');
    money_div.innerHTML = money;
}

function gather(vegetable, i ){
  if (vegetable == MELON) {
    garden[i] = EMPTY;
    money == money+MELON_PRICE ;
      show();
  }if (vegetable == TOMATO) {
    garden[i] = EMPTY;
      show();
  }if (vegetable == CUCUMBER) {
    garden[i] = EMPTY;
      show();
  }if (vegetable == EMPTY) {
    garden[i] = prompt("Ce Plantam???")
    show();
  }
  }


show();

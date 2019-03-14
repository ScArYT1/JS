// Harta Gradinii sub forma de array
const CUCUMBER = 1;
const MELON = 2;
const TOMATO = 3;
const EMPTY = 0; // nimic sadit

const CUCUMBER_PRICE = 10;
const MELON_PRICE = 20;
const TOMATO_PRICE = 30;

var money = 100;

// celulele de tip nr
var garden = [    // index
  MELON,          //0
  MELON,          // 1
  MELON,          // 2
  EMPTY,          // 3
  EMPTY,          // 4
  TOMATO,          // 5
  TOMATO,          // 6
  EMPTY,          // 7
  CUCUMBER,          // 8
  CUCUMBER          // 9

];

function show(){
    var div = document.getElementById('garden');
    div.innerHTML = '';

  for(var i = 0; i<=9; i++){
      if( garden[i] == MELON){
        div.innerHTML += '<div class ="melon" onclick = "gather(MELON)"> </div>';
      }if( garden[i] == CUCUMBER){
        div.innerHTML += '<div class ="cucumber" onclick = "gather(CUCUMBER)"> </div>';
      }if( garden[i] == EMPTY){
        div.innerHTML += '<div class ="empty" onclick = "sad(EMPTY)" > </div>';
      }if( garden[i] == TOMATO){
        div.innerHTML += '<div class ="tomato" onclick = "gather(TOMATO)"> </div>';
      }

    //document.write(garden[i] + "<br>");
  }

}

function gather( vegetable ){
  if(vegetable == MELON){
  alert( MELON_PRICE );
}if(vegetable == CUCUMBER){
  alert(CUCUMBER_PRICE);
}if (vegetable == TOMATO) {
  alert(TOMATO_PRICE);
}
}

//////////////////////////CE sadim?///////////////////

function sad(vegetable){
  if(vegetable == EMPTY){
  prompt('Ce sadim? 1, 2, 3?');
    if(vegetable == 1){
      alert(c);

  }
}
}

////////////////////////Ce sadim?///////////////////


// function take_money(){
//   var div = document.getElementById('money');
//   div.innerHTML = '';
//   if(garden == money){
//     div.innerHTML += '<div class="money"></div>'
//
//   }
// }

show();

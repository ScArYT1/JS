// const MINE_1 = 3;
// const MINE_2 = 7;
// const MINE_3 = 9;


// var miner = 2;


var miner_row = 2;//randuri //pentru random pozitie var = Math.round(Math.random)*10;
var miner_col = 2;//coloane //pentru random pozitie var = Math.round(Math.random)*10;




//let's show zer map :)
function action(){
  console.log(event);
  if(event.code == "ArrowRight"){
    moveRight();
  }
  if(event.code == "ArrowLeft"){
    moveLeft();
  }
  if(event.code == "ArrowUp"){
    moveUp();
  }
  if(event.code == "ArrowDown"){
    moveDown();
  }
}

function moveLeft(){
  if(miner_col < 1){
    miner_col = 10;
  }else{
    miner_col--;
  }
  show();
}

function moveRight(){
  if(miner_col < 10){
    miner_col++;
  }else{
    miner_col=1;
  }
  show();
}
function moveUp(){
  if(miner_row < 1){
    miner_row=10;
  }else{
    miner_row--;
  }
  show();
}
function moveDown(){
  if(miner_row < 10){
    miner_row++;
  }else{
    miner_row=1;
  }
  show();
}




function show(){
  var div= document.getElementById('map');
// conectam variabila div cu elmenetul dupa id
div.innerHTML=``; // curatam divu-ul

for (var row=1; row<=10; row++) {
/////////////ASTA ESTE UN RAND///////////////
for (var col = 1; col<=10; col++) {
  var content = '';

  if(miner_row == row && miner_col == col){
    content = '<div class="miner"></div>'
  }



      div.innerHTML +=
        `<div class="grass">
        ${content}
        </div>`;

}
}
/////////////ASTA ESTE UN RAND///////////////
}

show();

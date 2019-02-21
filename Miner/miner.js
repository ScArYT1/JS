const MINE_1 = 3;
const MINE_2 = 7;
const MINE_3 = 9;


var miner = 2;




//let's show zer map :)

function move_left(){
  miner--;
  show();
}

function move_right(){
  miner++;
  show();
}

function show(){
  var div= document.getElementById('map');
// conectam variabila div cu elmenetul dupa id
div.innerHTML=``; // curatam divu-ul

for (var step = 1; step<=10; step++) {

if(step==miner){
    var content =`
    <div class="miner">

    </div>`;// `` --> template string
}else {
  var content =``;
}




  div.innerHTML +=
    `<div class="grass">
    ${content}
    </div>`
  ;

}
}


show();

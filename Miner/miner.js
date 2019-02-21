const MINE_1 = 3;
const MINE_2 = 7;
const MINE_3 = 9;


var miner = 2;




//let's show zer map :)


for (var step = 1; step<=10; step++) {

if(step==miner){
    var content =`
    <div class="miner">

    </div>`;// `` --> template string
}else {
  var content =``;
}




  document.write(
    `<div class="grass">
    ${content}
    </div>`
  );

}

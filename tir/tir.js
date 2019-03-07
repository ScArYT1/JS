var bullets = 10; //patroane

function addDuck(){
  var lake = document.getElementById('lake');
  var duck = `<div id="duck" class="duck" onclick ="killDuck()"></div>`
  lake.innerHTML = duck;

}

function audioQuack(){
  var aux = document.getElementById('aux');
  var audio = `<audio controls
  src="t-rex-roar.mp3"
  autoplay>
</audio>`;
aux.innerHTML = audio;
}

function moveDuck(){
var duck = document.getElementById('duck')
  duck.style.bottom = randomBottom() + 'px';
}

function randomBottom(){
  var bot = Math.floor(Math.random() * 200);
  return bot;

}

setInterval(moveDuck,2000);

function killDuck(){
audioQuack();

}





//////////////////Start Game///////////////

addDuck();

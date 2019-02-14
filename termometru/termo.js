var div = document.getElementById('termo');



var t = prompt("Cate grade sunt?"); // + convertim valoarea introdusa in nr da nu in string (scris)

if (t < -20 || t > 50 || t === null  || t === "") {

  div.innerHTML = "OOOPS";

}else{

div.innerHTML = '<div>-20|-10|  0| 10| 20| 30| 40| 50|</div>';

var w = (+t + 20) * 2.8;

div.innerHTML += '<div style="background:red; height:5px; width:'+w+'px;"></div>';

if (t>= -20 &&  t <= 0) {

  div.innerHTML += "ReCE";

}else{
  if (t <= 10) {
    div.innerHTML += "NORM";

  }else{
  div.innerHTML +=" Cald";
}
}
}
// -20 ... 0 -> frig
// 1 ... 10 -> norm
// 11 ...50 -> cald

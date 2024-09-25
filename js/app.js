import {mkunit} from "./gamerules.js";
import{map} from "./server.js"
const s = 30
main();

var inmenu= false
//
// start here
//
function main() {

  // Initialize the GL context

  // Only continue if WebGL is available and working

  draw()

}
function offset(row){
  if(row %2 == 0){
    return s/2*Math.sqrt(3)
  }
  else{
    return 0
  }
}


function idk(){
  alert(map.thing)
}
function loadops(y,x){
  var options = []
  if (mkunit(y,x)){
    options.push("unit")
  }
  return options

}
function moveunit(y,x){

}
function createunit(y,x){
  alert("makeunit")
  map.unit[y][x] = 1
}
function genops(y,x){
  var options = loadops(y,x)
  for (var i = 0; i<options.length; i++ ){
    var newop = document.createElement('canvas');
    newop.style.position = "absolute"
    newop.style.top = (s*y*1.5 + 105).toString()+"px"
    newop.style.left = (x*s*Math.sqrt(3)+100+offset(y)+5+(75/options.length)*i).toString() + "px"
    newop.width = (75/options.length).toString() + "px"
    newop.height = "40px"
    newop.style.width = (75/options.length-5).toString() +"px"
    newop.style.height = "40px"
    newop.style.border = "1px solid";
    newop.style.zIndex=6
    newop.id = "newop"+ i.toString()+y.toString()+x.toString()


    document.getElementsByClassName("game")[0].appendChild(newop)
    if (options[i] == "unit"){
    document.getElementById("newop"+i.toString()+y.toString()+x.toString()).addEventListener("mousedown", function(){createunit(y,x)})}
    if (options[i]== "move"){
      document.getElementById("newop"+i.toString()+y.toString()+x.toString()).addEventListener("mousedown", function(){moveunit(y,x)})}




  }
}
function removal(y,x){

  for (var i = 0;  i<loadops(y,x).length; i ++){

    document.getElementById("newop"+i.toString()+y.toString()+x.toString()).parentNode.removeChild(document.getElementById("newop"+i.toString()+y.toString()+x.toString()))
  }
}
function tileselect(y,x){
    var menu = document.createElement('canvas');

    alert("y: "+y.toString()+"x: "+x.toString())
    menu.style.position = "absolute"
    menu.style.top = (s*y*1.5 + 100).toString()+"px"
    menu.style.left = (x*s*Math.sqrt(3)+100+offset(y)).toString() + "px"
    menu.width = "100px"
    menu.height = "50px"
    menu.style.height = "50px"
    menu.style.width = "100px"
    menu.style.border = "1px solid";
    menu.style.zIndex=5
    menu.id = "menu" + y.toString() + x.toString()
    document.getElementsByClassName("game")[0].appendChild(menu)
    document.getElementById("menu"+ y.toString() + x.toString()).addEventListener("mousedown", function(){alert ("menu click")})
    //document.body.addEventListener("click", function() {alert("bodyclick");inmenu = false; document.getElementById("menu").setAttribute("hidden", true); document.getElementById("menu").removeEventListener("mousedown", function(){alert ("menu click")})})
    genops(y,x)
    var closer = document.createElement('canvas');
    closer.style.position = "absolute"
    closer.style.top = (s*y*1.5 + 105).toString()+"px"
    closer.style.left = (x*s*Math.sqrt(3)+100+offset(y)+85).toString() + "px"
    closer.width = "10px"
    closer.height = "10px"
    closer.style.height = "10px"
    closer.style.width = "10px"
    closer.style.border = "1px solid";
    closer.style.zIndex=6
    closer.id = "closer"+ y.toString() + x.toString()
    document.getElementsByClassName("game")[0].appendChild(closer)
    let tx = x
    let ty = y
    document.getElementById("closer"+ y.toString() + x.toString()).addEventListener("mousedown", function(){document.getElementById("menu"+ y.toString() + x.toString()).parentNode.removeChild(document.getElementById("menu"+ y.toString() + x.toString()));document.getElementById("closer"+ y.toString() + x.toString()).parentNode.removeChild(document.getElementById("closer"+ y.toString() + x.toString()));removal(ty,tx)})
    menu = document.getElementById("menu"+ y.toString() + x.toString()).getContext("2d")





}


function draw(){

  var useless = map.thing[0]
  var size = useless.length
  for (let i = 0; i<size; i++){
    for (let b = 0; b< size; b ++){
      if (map.thing[i][b]== 0){
        var body = document.getElementsByClassName("game")[0];
        var tile = document.createElement('canvas');

        tile.width = 2*(s*Math.sqrt(3)+1);
        tile.height = 2*(s*2);
        tile.style.zIndex = 1;
        tile.style.position = "absolute";
        tile.style.width = (2*(s*Math.sqrt(3)+1)).toString()+"px"
        tile.style.height = (2*(s*2)).toString() + "px"

        tile.id = i.toString() + b.toString()
        tile.style.top = (s*i*1.5 + 100).toString()+"px"
        tile.style.left = (b*s*Math.sqrt(3)+100+offset(i)).toString() + "px"
        body.appendChild(tile)
        document.getElementById(i.toString() + b.toString()).addEventListener("click", function(){tileselect(i,b)})
        var ctx = document.getElementById(i.toString() + b.toString()).getContext("2d");
        ctx.beginPath();
        let startx = (1/2*s)*Math.sqrt(3)
        let starty =0
        ctx.moveTo(startx,starty);
        ctx.lineTo(startx+ (1/2)*s*Math.sqrt(3),starty+(1/2)*s);
        ctx.lineTo(startx+ (1/2)*s*Math.sqrt(3),starty+(3/2)*s);
        ctx.lineTo(startx,starty+s*2);
        ctx.lineTo(startx- (1/2)*s*Math.sqrt(3),starty+(3/2)*s);
        ctx.lineTo(startx- (1/2)*s*Math.sqrt(3),starty+(1/2)*s);
        ctx.lineTo(startx,starty);
        ctx.stroke();
      }

    }
  }

}

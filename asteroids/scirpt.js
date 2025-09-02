var c;
var ctx;
function load(){
    c = document.getElementById("jatek");
    ctx = c.getContext("2d");

    hajo(100,100);
}


function hajo (x,y){
    ctx.moveTo(x,y);
    ctx.lineTo(x+100,y+10);
    ctx.stroke();
}
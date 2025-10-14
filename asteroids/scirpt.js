var c;
var ctx;
function load(){
    c = document.getElementById("jatek");
    ctx = c.getContext("2d");

    c.addEventListener("onkeydown", gombNyom);
    hajo(100,100);
}
function gombNyom(){
    console.log(this);
}
function mozgasW(){

}
function mozgasA(){
    
}
function mozgasS(){
    
}
function mozgasD(){
    
}
function hajo (x,y){
    ctx.beginPath();
    //Középső vonal
    ctx.moveTo(x-20,y);
    ctx.lineTo(x+20,y);

    //Szögszár
    ctx.moveTo(x-20,y);
    ctx.lineTo(x,y-60);

    ctx.moveTo(x+20,y);
    ctx.lineTo(x,y-60);


    ctx.stroke();
    ctx.closePath();
}
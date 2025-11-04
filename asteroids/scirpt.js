var c;
var ctx;
let x = 100;
let y = 100;
let szog = 90;
function load(){
    c = document.getElementById("jatek");
    ctx = c.getContext("2d");

    document.addEventListener("keydown", function(event){gombNyom(event)});
    hajo(100,100);
}
function torles(){
    ctx.beginPath();
    ctx.clearRect(0,0,c.width,c.height);
    ctx.closePath();
}
function gombNyom(e){
    switch (e.key){
        case "w":
            mozgasW();
            break;
        case "a":
            mozgasA();
            break;
        case "s":
            mozgasS();
            break;
        case "d":
            mozgasD();
            break;
    }
}
function mozgasW(){
    y-=2;
    hajo()
}
function mozgasA(){
    szog+=5
    hajo();
}
function mozgasS(){
    y+=2
    hajo();
}
function mozgasD(){
    szog-=5;
    hajo();
}
function hajo (){
    torles();
    ctx.beginPath();
    //Középső vonal
    ctx.moveTo(x-20,y);
    ctx.lineTo(x+20,y);

    //Szögszár
    ctx.moveTo(x-20,y);
    ctx.lineTo(Math.cos(szog)+x,Math.sin(szog)+(y-60));

    ctx.moveTo(x+20,y);
    ctx.lineTo(Math.cos(szog)+x,Math.sin(szog)+(y-60));


    ctx.stroke();
    ctx.closePath();
}
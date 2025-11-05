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
    hajo(x,y,szog);
}
function mozgasA(){
    szog+=5
    hajo(x,y,szog);
}
function mozgasS(){
    y+=2
    hajo(x,y,szog);
}
function mozgasD(){
    szog-=5;
    hajo(x,y,szog);
}

function hajo (cx,cy,szog){
    //x′​=cx​+(x−cx​)cos(szog)−(y−cy​)sin(szog)
    //y′=cy​+(x−cx​)sin(szog)+(y−cy​)cos(szog).​ 
    //cx,cy a középpont koordinátái (cx,cy)
    //x,y az űrhajó csúcsa (x,y)
    //x′​ = elforgatott pont (x2)
    //y′​ = elforgatott pont (y2)
    let x = cx;
    let y = cy+60;
    let radian = szog * Math.PI / 180;
    let x2 = cx + (x-cx) * Math.cos(radian) - (y-cy) * Math.sin(radian);
    let y2 = cy + (x-cx) * Math.sin(radian) - (y-cy) * Math.cos(radian);

    torles();
    ctx.beginPath();
    //Középső vonal
    ctx.moveTo(x-20,y);
    ctx.lineTo(x+20,y);

    //Szögszár
    ctx.moveTo(x-20,y);
    ctx.lineTo(x2,y2);

    ctx.moveTo(x+20,y);
    ctx.lineTo(x2,y2);


    ctx.stroke();
    ctx.closePath();
}
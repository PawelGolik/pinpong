var vx = 2; 
var vy = 2;
var xball;
var yball;
var x;
var y;
var canvas;
var ctx;
var mousex;
var mousey;
var xSi;
var ySi;
var vSi = 1;
var scoreplayer1 = 0;
var scoreplayer2 = 0;

function start()
{
    canvas = document.getElementById("canvas");
    x = canvas.width;
    y = canvas.height;
    xSi = x/2;
    ySi = y/2;
    startpos();
    ctx = canvas.getContext("2d");
    window.setInterval(()=>{
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,x,y);
    ctx.fillStyle = "white";
    ctx.fillRect(xball,yball,7,7);
    ctx.fillRect(0,mousey-50,10,100);
    ctx.fillStyle = "white";
    ctx.fillRect(xball,yball,7,7);
    ctx.fillRect(x-10,ySi,10,100);
    ctx.fillStyle = "white";
    ctx.fillRect(xball,yball,7,7);
    speed();
    bounce();
    score_player_1();
    score_player_2();
    SI();
},20);

window.onmousemove = function(e)
{
    mousex = e.pageX;
    mousey = e.pageY;
}

function startpos()
{
    xball = x/2;
    yball = y/2;
}

function speed()
{
    xball += vx;
    yball += vy;
}
function bounce ()
{
    if(yball <= 0 || yball >= y)
    {
        vy = -vy;
    }
    if(yball > ySi-50 && yball < ySi+50 && xball >= x-10)
    {
        vx = -vx;
    }
    if(yball > mousey-50 && yball < mousey+50 && xball <= 10)
    {
        vx = -vx;
    }
}
function score_player_1 ()
{
    if(xball <= 0)
    {
        scoreplayer1 +=1;
        document.getElementById("score1").innerText = scoreplayer1;
        startpos();
        vx = -vx;
    }
}
function score_player_2 ()
{
    if(xball >= x)
    {
        scoreplayer2 +=1;
        document.getElementById("score2").innerText = scoreplayer2 ;
        startpos();
        vx = -vx;
    }
}
function SI ()
{
    if(yball >= ySi +50 )
    {
        ySi += vSi;
    }
    else
    {
        ySi -= vSi;
    }
}
}

//single page application

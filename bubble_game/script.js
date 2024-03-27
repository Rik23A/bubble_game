var score =0;
var hitrn=0;

function getNewScore(){
    score+= 10;
    document.querySelector("#scoreval").textContent = score;
}


function makeBubble(){
    var clutter="";

for(var i=1; i<=133; i++){
    var rnum= Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rnum}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}

var timer=6;
function runTimer(){
    var timeint = setInterval(function() {
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
        }
    }, 1000);
}

function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum= Number(dets.target.textContent);
    if(clickednum=== hitrn){
        getNewScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();


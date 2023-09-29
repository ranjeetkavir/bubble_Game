var timer=60;
var score=0;
var hit=0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent= score;
}
function getNewHit(){
     hit= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hit;
}
function makebubble(){
    var clutter="";


for(i=1;i<=108;i++){
    var a= Math.floor(Math.random()*10);
   clutter +=  `<div class="bubble">${a}</div>`;

}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runtimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
            
               
           }
        
    },1000)
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === hit){
        increaseScore();
        makebubble();
        getNewHit();
    }

})
makebubble();
runtimer();
getNewHit();


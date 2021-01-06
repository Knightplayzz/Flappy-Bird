var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

// Hole

hole.addEventListener('animationiteration', () => {
   var random = Math.random()*3;
   var top = (random*100)+150;
   hole.style.top = -(top) + "px";
   counter++;
});

// Phone function

document.getElementById("tap").addEventListener("touchstart", jump);

// Jumping function

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
    character.style.top = (characterTop+2)+"px";
    }

    // Death function
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480) || ((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop) || (cTop>holeTop+130)))) {
        alert("Game over. Score: "+counter);
        character.style.top = 100 + "px";
        counter=0;
    }
},20);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(characterTop>6){
        character.style.top = (characterTop-4)+"px";
        }
        jumpCount++;
    },10);
}

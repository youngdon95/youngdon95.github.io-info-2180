"use strict";
var loser = false; 

window.onload = function() {
    $("start").onclick = Begin;
    $("end").onmouseover = GameOver;
    var wire = $$("div#maze div.boundary");
    for (var num = 0; num < wire.length; num++) {
        wire[num].onmouseover = Out_Of_Bounds;
    }
};

function Out_Of_Bounds() {
    loser = true;
     $("status").textContent = "LOL Better luck next time, you lost";
    var wire = $$("div#maze div.boundary");
    for (var num = 0; num < wire.length; num++) {
        wire[num].addClassName("youlose");
    }
}

function Begin() {
    loser = false;
    $("status").textContent = "Go to the end WITHOUT CHEATING";
    var wire = $$("div#maze div.boundary");
    for (var num = 0; num < wire.length; num++) {
        wire[num].removeClassName("youlose");
    }
}

function GameOver() {
        //if (!loser) {
        //$("status").textContent = "YOU WON YOU WON YOU WON!!!! :)";
    //}
    //else{
      //   $("status").textContent = "WATCHI WIYAH!!!! YOU LOST";
    //}
    if(((!loser) & Begin())& !Out_Of_Bounds())
    {
        $("status").textContent = " YOU WON";
    }
}

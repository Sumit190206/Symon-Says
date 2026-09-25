let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highScore=0;

let h3 = document.querySelector("h3");

let btn = ["yellow", "red", "green", "purple"];


document.addEventListener("keypress", function () {

    if (!started) {
        started = true;
        levelUp();
    }

});


function btnFlash(button) {

    button.classList.add("flash");

    setTimeout(function () {
        button.classList.remove("flash");
    }, 200);

}
function bodyFlash(b){
      b.classList.add("body_flash");

    setTimeout(function () {
        b.classList.remove("body_flash");
    }, 200);
}


function levelUp() {

    userSeq = [];

    level++;

    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btn.length);

    let randClr = btn[randIdx];

    gameSeq.push(randClr);

    let randomButton = document.querySelector(`.${randClr}`);

    btnFlash(randomButton);

}
function restart(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started = false;
    
    
}

function btnpress() {

    let button = this;

    btnFlash(button);

    let userColor = button.getAttribute("id");

    
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}


function checkAns(idx) {
    // Check whether the clicked button is correct
    if (userSeq[idx] === gameSeq[idx]) {

        // User completed the current sequence
        if (userSeq.length === gameSeq.length) {

            setTimeout(function () {
                levelUp();
            }, 1000);

        }

    } else {
        let body = document.querySelector("body");
        bodyFlash(body);
        if(level > highScore ){
            highScore = level;
        }
        h3.innerText = `Game Over! press any key to start || Your high score is ${highScore}`;

       restart();

    }

}


let allBtn = document.querySelectorAll(".btn");

for (let button of allBtn) {
    button.addEventListener("click", btnpress);
}
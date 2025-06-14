let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];

let started= false;
let level=0;
let highScore=0;

let h2=document.querySelector("h2");
let scoreDisplay = document.getElementById("highscore");

document.addEventListener("keypress",function(){
if(started==false){
    console.log("Game Started");
    started=true;
    levelup();
}
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},250);
}

function levelup(){
    userSeq=[];//ye addd ki hu
    level++;
h2.innerText = `Level ${level}`;


// random btn choose
let randIndx= Math.floor(Math.random()*4);
let randColor = btns[randIndx];
let randbtn= document.querySelector(`.${randColor}`);
// btnFlash(randbtn);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
            userSeq=[];
        }
    }else{
        h2.innerHTML =`Game Over!Your Score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor ="red";
        updateHighScore();
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        
        resetGame();
    }
}

function btnPress() {
    console.log(this);
let btn = this;
userFlash(btn);

let userColor=btn.getAttribute("id");
userSeq.push(userColor);

checkAns(userSeq.length-1);
}
function updateHighScore(){
    if(level-1 >highScore){
        
    highScore = level ;
    scoreDisplay.innerText = `Highest Score: ${highScore}`;
  

    }
}

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function resetGame(){
    started= false;
    level=0;
    gameSeq=[];
    userSeq=[];
}

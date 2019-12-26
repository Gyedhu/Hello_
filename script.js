var hole = document.getElementsByClassName("hole");
var scoreElement = document.getElementsByClassName("score")[0];
var timeElement = document.getElementsByClassName("time")[0];
var score = 0;
var time = 0;
var preHole = 0;
var preRand = 0;
var rateOfChange = 600;
var inter;

document.getElementsByClassName("gameOver")[0].style.fontFamily = "Shojumaru";
document.getElementsByClassName("gameOver")[1].style.fontFamily = "Shojumaru";
document.getElementsByClassName("gameOver")[0].style.display = "none";
document.getElementsByClassName("gameOver")[1].style.display = "none";
document.getElementById("playButton").addEventListener("click", start);
document.getElementById("resetButton").addEventListener("click", reset);

function start() {
    inter = setInterval(change, rateOfChange);
    totalTime = setInterval(timer, 1000);
    document.getElementsByClassName("gameOver")[0].style.display = "none";
    document.getElementsByClassName("gameOver")[1].style.display = "none";
}

function timer() {
    timeElement.innerHTML = time;
    time++;
    console.log(time);
    if(time > 20) {
        reset()
        document.getElementsByClassName("gameOver")[0].style.display = "block";
        document.getElementsByClassName("gameOver")[1].style.display = "block";
    }
}

function change() {
    time.innerHTML = time;
    preHole.backgroundImage = "none";
    var randNum = Math.floor(Math.random(0, 8) * 8);
    if(preRand == randNum) {
        var randNum = Math.round(Math.random() * 8);
    }
    hole[randNum].style.backgroundImage = "url('Cockroach.webp')";
    hole[randNum].style.backgroundSize = "cover";
    hole[preRand].removeEventListener("click", increaseScore);
    hole[randNum].addEventListener("click", increaseScore);
    preHole = hole[randNum].style;
    preRand = randNum;
}

function increaseScore() {
    score++;
    scoreElement.innerHTML = score;
}

function reset() {
    document.getElementsByClassName("gameOver")[1].innerHTML = "Your Score : " + score;
    score = 0;
    time = 0;
    preHole.backgroundImage = "none";
    scoreElement.innerHTML = 0;
    timeElement.innerHTML = time;
    clearInterval(inter);
    clearInterval(totalTime);
    console.log(score);
    document.getElementsByClassName("gameOver")[0].style.display = "none";
    document.getElementsByClassName("gameOver")[1].style.display = "none";
}

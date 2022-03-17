let ball = document.getElementById("ball");
let strike = document.getElementById("tenth");
let triangle = document.getElementById("fourteen");
let shell = document.getElementById("twelve");


ball.addEventListener("click", function () {
    ball.style.backgroundColor = "red";
    moveBall();
})

function pageScroll() {
    window.scrollBy(0,1); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()', 10);
}

function moveBall() {
  setTimeout(pageScroll, 6300);
  Fall();
  setTimeout(moveRight, 300);
  setTimeout(Fall2, 1850);
  setTimeout(moveRight2, 2350);
  setTimeout(Fall3, 4300);
  setTimeout(moveLeft, 5200);
  setTimeout(Fall4, 6800);
  setTimeout(moveRight3, 7800);
  setTimeout(Fall5, 9500);
  setTimeout(moveLeft1, 10500);
  setTimeout(Fall6, 11800);
  setTimeout(moveLeft2, 12800);
  setTimeout(Fall7, 13600);
  setTimeout(moveRight4, 14700);
  setTimeout(Fall8, 15900);
  setTimeout(hitBal, 16590);
  setTimeout(hitBal2, 17800);
  setTimeout(Fall9, 18600);
  setTimeout(Fall10, 20000);
}

function Fall() {
    ball.style.transition = "all .4s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 24 + "px";
}
function moveRight() {
    ball.style.transition = "all 2s ease-in-out";
    ball.style.left = parseFloat(getComputedStyle(ball).left) + 100 +"px";
}

function Fall2() {
    ball.style.transition = "all .5s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 51 + "px";
}
function moveRight2() {
    ball.style.transition = "all 2s ease-in-out";
    ball.style.left = parseFloat(getComputedStyle(ball).left) + 212 +"px";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 13 + "px";
}

function Fall3() {
    ball.style.transition = "all .8s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 107 + "px";
}

function moveLeft() {
    ball.style.transition = "all 1.7s ease-in-out";
    ball.style.left = parseFloat(getComputedStyle(ball).left) - 278 +"px";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 25 + "px";
}

function Fall4() {
    ball.style.transition = "all 1s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 128 + "px";
}

function moveRight3() {
    ball.style.transition = "all 1.7s ease-in-out";
    ball.style.left = parseFloat(getComputedStyle(ball).left) + 320 +"px";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 28 + "px";
}
function Fall5() {
    ball.style.transition = "all 1s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 228 + "px";
}

function moveLeft1() {
    ball.style.transition = "all 1.2s ease-in-out";
    ball.style.left = parseFloat(getComputedStyle(ball).left) - 153 +"px";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 16 + "px";
}

function Fall6() {
    ball.style.transition = "all 1s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 219 + "px";
}

function moveLeft2() {
    ball.style.transition = "all .9s ease-in-out";
    ball.style.left = parseFloat(getComputedStyle(ball).left) - 115 +"px";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 33 + "px";
}
function Fall7() {
    ball.style.transition = "all 1s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 82 + "px";
}

function moveRight4() {
    ball.style.transition = "all 1.5s ease-in-out";
    ball.style.left = parseFloat(getComputedStyle(ball).left) + 520 +"px";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 100 + "px";
    strike.style.transition = "all 2s ease-in-out";
    strike.style.transform = "rotate(40deg)";
    strike.style.top = parseFloat(getComputedStyle(strike).top) + 30 + "px";
}
function Fall8() {
    ball.style.transition = "all .8s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 53 + "px";
    strike.style.transition = "all .7s ease-in-out";
    strike.style.transform = "rotate(-20deg)";
    strike.style.top = parseFloat(getComputedStyle(strike).top) - 28 + "px";
}

function hitBal() {
    ball.style.transition = "all 1.2s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) - 331 + "px";
}

function hitBal2() {
    shell.style.transition =  "all .1s ease-in-out";
    shell.style.top = -925 +"px";
    shell.style.transform = "rotate(25deg)";
    ball.style.transition = "all 1.2s ease-in-out";
    ball.style.top = parseFloat(getComputedStyle(ball).top) + 401 + "px";
    strike.style.transition = "all .5s ease-in-out";
    strike.style.transform = "rotate(0deg)";
    strike.style.top = parseFloat(getComputedStyle(strike).top) + 52 + "px";
    triangle.style.transition = "all .1s ease-in-out";
    triangle.style.transform = "rotate(-57deg)";
    triangle.style.left = parseFloat(getComputedStyle(triangle).left) + 22 + "px";
    triangle.style.top = parseFloat(getComputedStyle(triangle).top) + 2 + "px";
    ball.style.backgroundColor = "#2a3545";

}

function Fall9() {
    triangle.style.transition = "all 1.7s ease-in-out";
    triangle.style.left = parseFloat(getComputedStyle(triangle).left) + 80 + "px";
    triangle.style.top = parseFloat(getComputedStyle(triangle).top) + 34 + "px";
}
function Fall10() {
    triangle.style.transition = "all 1s ease-in-out";
    triangle.style.transform = "rotate(12deg)";
    triangle.style.top = parseFloat(getComputedStyle(triangle).top) + 230 + "px";
}







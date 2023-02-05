document.addEventListener("DOMContentLoaded", (event) => {
  // Your code here

  var theBody = document.querySelector("body");
  var theImg = document.querySelector("img");
  var theEnd = document.querySelector("#end");
  var theBar = document.querySelector("#bar");
  var theScore = document.querySelector("#score");
  var theTime = document.querySelector("#time");
  var theBarCoord = document.querySelector("#bar-coord");
  var theX = 0;
  var theY = 0;
  var theDeltaX = 8;
  var theDeltaY = 8;
  var currTime = 0;
  var currScore = 0;
  function gameOver(aNewText) {
    let aH1 = document.createElement("h1");
    aH1.classList.add("ending");
    aH1.innerHTML = aNewText;
    theEnd.appendChild(aH1);
  }

  function updateX() {
    theX += theDeltaX;

    theImg.style.left = `${theX}px`;
    if (theX < 0 || theX > theBody.offsetWidth - theImg.offsetWidth) {
      theDeltaX *= -1;
    }
  }
  function updateY() {
    theY += theDeltaY;
    theImg.style.top = `${theY}px`;
    if (theY > theBody.offsetHeight - theImg.offsetHeight) {
      theImg.style.visibility = "hidden";
      gameOver("GAME OVER");
    } else if (theY < 0) {
      theDeltaY *= -1;
    }
  }

  function updateBar() {
    const onMouseMove = (e) => {
      theBar.style.left = e.pageX + "px";
    };
    document.addEventListener("mousemove", onMouseMove);
  }
  function bounce() {
    if (
      theImg.style.left < theBar.style.left &&
      theY > theBody.offsetHeight * 0.55
    ) {
      theScore.innerHTML = currScore += 1;
      theDeltaY *= -1;
    }
  }
  setInterval(function () {
    currTime += 1;
    theTime.innerHTML = currTime;
  }, 1000);
  setInterval(function () {
    updateX();
    updateY();
    updateBar();
    bounce();
  }, 25);

  const myHeading = document.querySelector("h1");
  myHeading.textContent = "Workinggg";
});

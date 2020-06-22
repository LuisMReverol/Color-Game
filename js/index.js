var displayColor,
  displayColorDom,
  colorSelectDOM,
  colorSelect,
  gameResultDOM,
  currentColor,
  currentColorDOM,
  colorSelection,
  circleColorsDOM,
  scoreDOM,
  score,
  i;

displayColorDom = document.getElementById("color");

gameResultDOM = document.getElementById("gameResult");

colorSelection = document.querySelectorAll(".game__grid--color");

scoreDOM = document.getElementById("score");



console.log(colorSelection);


function init () {
  randomColors();
  colorChange();
  gameState();

  score = 0;
  scoreDOM.textContent = score + " Points";
}

function current (){
  randomColors();
  colorChange();
  gameState();
}


function colorChange() {
  randomColor();

  var idNumber = Math.floor(Math.random() * 5);

  var idSelect = "color-" + idNumber;

  colorSelectDOM = document.getElementById(
    idSelect
  ).style.backgroundColor = displayColor;
  console.log(idSelect);
}

function randomColor() {
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);

  displayColor = "RGB(" + x + ", " + y + ", " + z + ")";
  console.log(displayColor);

  displayColorDom.textContent = displayColor;
}

function randomColors () {
  
  circleColorsDOM = ["color-0","color-1","color-2","color-3","color-4","color-5"]

  for (i = 0; i < 6; i++) {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);

    var randomNA = circleColorsDOM[i];

    console.log(randomNA);

    document.getElementById(randomNA).style.backgroundColor = "RGB(" + x + ", " + y + ", " + z + ")";
  }

}

function gameState() {
  setTimeout(function () {gameResultDOM.textContent = "Color Game";}, 1000);

  colorSelection.forEach((elem) => {
    elem.addEventListener("click", function clickev (ev) {
      currentColor = this.style.backgroundColor;
      console.log(currentColor)

      console.log(displayColor)

      if (currentColor === displayColor.toLowerCase()){
        gameResultDOM.textContent = "WINNER";
        score ++;
        scoreDOM.textContent = score + " Points"
        current();
      } else {
        gameResultDOM.textContent = "TRY AGAIN";
        init();
      }
      
    });
  });
}

init();


/* colorSelection.forEach((elem) => {
  elem.addEventListener("click", function () {
    colorSelection.forEach((elem) => {
      var r = this.attributes.id;
      var t = document.querySelector(".game__grid--color").style.backgroundColor;
      console.log(r,t)

    })
    
  });
});*/

/*function colorSelector() {
  currentColor = document.querySelector(".game__grid--color").style
    .backgroundColor;
}*/
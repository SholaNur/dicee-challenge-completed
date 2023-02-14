let rendomNumber1 = Math.floor(Math.random() * 6 + 1);

// generating the images in the line bellow:
let firstDiceImg = "images/dice" + rendomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", firstDiceImg);

let rendomNumber2 = Math.floor(Math.random() * 6 + 1);
let secondDiceImg = "images/dice" + rendomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", secondDiceImg);

if (rendomNumber1 > rendomNumber2) {
  document.querySelector("h1").innerText = "The Player 1 Wins! :)";
} else {
  document.querySelector("h1").innerText = "The Player 2 Wins! :)";
}
if (rendomNumber1 === rendomNumber2) {
  document.querySelector("h1").innerText = "Draw!";
}

//data
const pics = [
  "beam.png",
  "https://i.postimg.cc/NjQXxmr4/Rectangle.jpg",

  "https://assets.codepen.io/16425/explore.png"
];

//random number gen
const randNum = Math.floor(Math.random() * 3);

// get stuff

const randoImage = document.querySelector("img");

//set stuff

randoImage.src = pics[randNum];

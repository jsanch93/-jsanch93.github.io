//data
const pics = [
  "photos/me1.png",
  "photos/GBW.png",
"photos/run.png",
  "photos/timber.png"
];

//random number gen
const randNum = Math.floor(Math.random() * 4);

// get stuff

const randoImage = document.querySelector("img");

//set stuff

randoImage.src = pics[randNum];



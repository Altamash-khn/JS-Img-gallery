let imgTag = document.querySelector(".img");
let actions = document.querySelectorAll(".slider");

let forwardIcon = document.querySelector(".forward");
let backwardIcon = document.querySelector(".backward");

let img1 = document.createElement("img");
img1.src = "img/petra.webp";

let img2 = document.createElement("img");
img2.src = "img/Taj-mahal.webp";

let img3 = document.createElement("img");
img3.src = "img/machu-picchu.jpg";

let img4 = document.createElement("img");
img4.src = "img/italy.webp";

let img5 = document.createElement("img");
img5.src = "img/great wall of china.jpg";

let img6 = document.createElement("img");
img6.src = "img/eiffel-tower.jpg";

let img7 = document.createElement("img");
img7.src = "img/chichen itza.jpg";

let arr = [img1, img2, img3, img4, img5, img6, img7];
let index = 0;
imgTag.src = arr[0].src;
actions[index].style.backgroundColor = "#444";

function moveForward() {
  if (index === 6) {
    index = 0;
    imgTag.src = arr[index].src;
    actions[index].style.backgroundColor = "#444";
    actions[arr.length - 1].style.backgroundColor = "";
  } else {
    index++;
    imgTag.src = arr[index].src;
    actions[index].style.backgroundColor = "#444";
    actions[index - 1].style.backgroundColor = "";
  }
}

forwardIcon.addEventListener("click", function (e) {
  moveForward();
});

backwardIcon.addEventListener("click", function (e) {
  if (index === 0) {
    index = arr.length - 1;
    imgTag.src = arr[index].src;
    actions[index].style.backgroundColor = "#444";
    actions[0].style.backgroundColor = "";
  } else {
    index--;
    imgTag.src = arr[index].src;
    actions[index].style.backgroundColor = "#444";
    actions[index + 1].style.backgroundColor = "";
  }
});

setInterval(() => {
  moveForward();
}, 5000);

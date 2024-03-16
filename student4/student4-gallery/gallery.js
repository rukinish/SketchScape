// Generates Random Color
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function randomColor() {
  let symbols = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  document.body.style.backgroundColor = color;
}
// Changes the anchor color to black or white when the color is changed between white navy and light-blue
function anchorColor(color) {
  let anchors = document.querySelectorAll(".anchors-el");

  for (let anchor of anchors) {
    anchor.style.color = color;
  }
}
// Changes the font-size of the thumbnail-description
function thumbnailDescriptionSize(value) {
  let thumbnailDescriptions = document.getElementsByClassName(
    "thumbnail-description"
  );

  for (let thumbnailDescription of thumbnailDescriptions) {
    thumbnailDescription.style.fontSize = value;
  }
}

// Main function to change the background color
function backgroundColor(value) {
  console.log(value);
  document.body.style.backgroundColor = value;

  if (value == "random") {
    randomColor();
  } else if (value == "#415B76" || value == "#1A263D") {
    document.body.style.color = "white";
    anchorColor("white");
  } else {
    document.body.style.color = "black";
    anchorColor("black");
  }
}
// Main function to change the font-size
function fontSize(value) {
  document.getElementById("heading").style.fontSize = value;

  if (value == "3rem") {
    document.getElementById("image-description").style.fontSize = "2rem";
    thumbnailDescriptionSize("2rem");
  } else if (value == "2.7rem") {
    console.log("small");
    document.getElementById("image-description").style.fontSize = "1.7rem";
    thumbnailDescriptionSize("1.7rem");
  } else if (value == "3.3rem") {
    console.log("large");
    document.getElementById("image-description").style.fontSize = "2.3rem";
    thumbnailDescriptionSize("2.3rem");
  }
}

// Main function to change the picture and the text of the selected photo
function showPictureText(img, txt) {
  let image = document.getElementById("image-preview");
  let text = document.getElementById("image-description");
  image.src = img.src;
  text.innerHTML = txt;
}

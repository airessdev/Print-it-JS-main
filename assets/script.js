const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

function addDot() {
  const dots = document.querySelector(".dots");
  const dotElement = document.createElement("div");

  for (let indexSlide in slides) {
    const spanElement = document.createElement("span");
    spanElement.id = "dot_" + indexSlide;
    if (indexSlide == 0) {
      spanElement.classList.add("dot_selected");
    }
    spanElement.classList.add("dot");
    dots.appendChild(spanElement); // ajout au HTML
  }
}

function changeDot() {
  const dotSelected = document.querySelector(".dot_selected");
  dotSelected.classList.remove("dot_selected");
  const currentSelectedDot = document.getElementById("dot_" + positionSlide);
  currentSelectedDot.classList.add("dot_selected");
}

function changeImageGauche() {
  const pathimg = "./assets/images/slideshow/";
  let text = document.querySelector("#banner p");
  let image = document.querySelector(".banner-img");
  positionSlide--;
  if (positionSlide < 0) {
    positionSlide = slides.length - 1;
  } else {
    image.src = pathimg + slides[positionSlide].image;
  }
  image.src = pathimg + slides[positionSlide].image;
  text.innerHTML = slides[positionSlide].tagLine;
  console.log(positionSlide);
  changeDot();
}

function changeImageDroite() {
  const pathImg = "./assets/images/slideshow/";
  let image = document.querySelector(".banner-img");
  let text = document.querySelector("#banner p");
  console.log(positionSlide);
  if (positionSlide < slides.length - 1) {
    positionSlide++;
  } else {
    positionSlide = 0;
  }
  console.log(positionSlide);
  image.src = pathImg + slides[positionSlide].image;
  text.innerHTML = slides[positionSlide].tagLine;
  changeDot();
}

var positionSlide = 0;
let flecheGauche = document.getElementById("arrowLeft");
let flecheDroite = document.getElementById("arrowRight");

flecheDroite.addEventListener("click", changeImageDroite);
flecheGauche.addEventListener("click", changeImageGauche);

addDot();

// modifier variable en camelcase et lever les doutes des variables et fonctions
// coder proprement

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

// function monDot() {
//   const points = document.querySelector(".dots");
//   console.log(points);
//   for (let iSlides in slides) {
//     const point = document.createElement("span");
//     point.classList.add("dot");
//     point.id = "point_" + iSlides;
//     if (iSlides == 0) {
//       point.classList.add("dot_selected");
//     }
//     points.appendChild(point);
//     console.log(point.id);
//   }
// }
// monDot();
// function monChangeDot() {
//   const pointActuel = document.querySelector(".point_" + (positionSlide + 1));
//   pointActuel.classList.add("dot_selected");
//   document.appendChild(pointActuel);
// }
// monChangeDot();

function changeDot() {
  const dotSelected = document.querySelector(".dot_selected");
  dotSelected.classList.remove("dot_selected");
  const currentSelectedDot = document.getElementById("dot_" + positionSlide);
  currentSelectedDot.classList.add("dot_selected");
}

function changeImageGauche() {
  const pathImg = "./assets/images/slideshow/";
  let text = document.querySelector("#banner p");
  let image = document.querySelector(".banner-img");
  positionSlide--;
  if (positionSlide < 0) {
    positionSlide = slides.length - 1;
  }
  image.src = pathImg + slides[positionSlide].image;
  text.innerHTML = slides[positionSlide].tagLine;
  console.log(positionSlide);
  changeDot();
}

function changeImageDroite(event) {
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
  console.log(event);
}

var positionSlide = 0;
let flecheGauche = document.getElementById("arrowLeft");
let flecheDroite = document.getElementById("arrowRight");

flecheDroite.addEventListener("click", changeImageDroite);
flecheGauche.addEventListener("click", changeImageGauche);

addDot();

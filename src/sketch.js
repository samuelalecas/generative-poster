import { initializeCreation, constructPoster } from "./lib";
import { COLORS, setInitialTime } from "./utils";
import { SCALE } from './utils';
import { currentTime, setCurrentTime, durationTime, setDurationTime, initialTime, bgOpacity, setBgOpacity, elements, setElements, animationIsFinished, setAnimationIsFinished } from "./utils";


// Exporting a function called 'mySketch'
function savePoster(p) {
  p.saveCanvas('generative-poster', 'png');
}

function createNewPoster(p) {
  let saveButton = document.querySelector('.saveButton');
  let refreshButton = document.querySelector('.refreshButton');
  saveButton.setAttribute('disabled', true);
  refreshButton.setAttribute('disabled', true);
  setElements(initializeCreation(p));
}


export const mySketch = (p) => {
  let saveButton = document.querySelector('.saveButton');
  let refreshButton = document.querySelector('.refreshButton');
  saveButton.addEventListener('click', () => savePoster(p));
  refreshButton.addEventListener('click', () => createNewPoster(p));

  p.preload = () => {
    img1 = p.loadImage("img/textura.png");
  }

  // Calling p5.js functions, using the variable 'p'
  p.setup = () => {
    p.createCanvas(500 * SCALE, 736 * SCALE);
    p.angleMode(p.DEGREES);
    setElements(initializeCreation(p));
    console.log('p5.js setup function executed!')

  }

  p.draw = () => {
    let animationIsFinished = currentTime > initialTime + durationTime;
    // Acceder al botón y asociar el evento de clic
    if (animationIsFinished) {
      saveButton.removeAttribute('disabled');
    }

    // Acceder al botón y asociar el evento de clic
    if (animationIsFinished) {
      refreshButton.removeAttribute('disabled');
    }
    setCurrentTime(p.millis())
    setDurationTime(8 * 1000); //10 seconds

    p.background(COLORS.BG);
    p.scale(SCALE);
    constructPoster(p, elements);

    // //Fade out animation
    // if (currentTime > initialTime + durationTime - 1000) {
    //   setBgOpacity(bgOpacity + 5);
    //   p.background(238, 238, 238, bgOpacity);
    // }

    //Texture after graphics and fade out elements avoiding flickering and blending issues
    p.image(img1, 0, 0, 500, 736);

    // if (currentTime > initialTime + durationTime) {
    //   setElements(initializeCreation(p));
    // }
  }

  // p.windowResized = () => {
  //   p.resizeCanvas(window.innerWidth, window.innerHeight)
  // }
}

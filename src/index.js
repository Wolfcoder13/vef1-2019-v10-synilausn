import { empty } from './lib/helpers';
// import getRandomImage from './lib/nasa-api';

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'DEMO_KEY';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getRandomImage() {
  const randomDate = `${randomNumber(1996, 2019)}-${randomNumber(1, 12)}-${randomNumber(1, 28)}`;

  const response = await fetch(`${URL}?api_key=${API_KEY}&date=${randomDate}`);

  const json = await response.json();

  return json;
}

document.addEventListener('DOMContentLoaded', () => {
  // const button = document.querySelector('button');
  // button.addEventListener('click', stuff);
  const text = document.querySelector('.apod__text');

  // const randomDate = `${randomNumber(1996, 2019)}-${randomNumber(1, 12)}-${randomNumber(1, 28)}`;

  const promise = getRandomImage();
  // debugger;

  promise.then((json) => {
    const apod = document.querySelector('.apod');
    const img = apod.querySelector('.apod__image');
    img.setAttribute('src', json.hdurl);
    empty(text);
    const textNode = document.createTextNode(json.explanation);
    text.appendChild(textNode);
  });

  // fetch(`${URL}?api_key=${API_KEY}&date=${randomDate}`)
  //   .then((response) => response.json())
  //   .then((json) => {
  //     const apod = document.querySelector('.apod');
  //     const img = apod.querySelector('.apod__image');
  //     img.setAttribute('src', json.hdurl);
  //     empty(text);
  //     const textNode = document.createTextNode(json.explanation);
  //     text.appendChild(textNode);
  //   });
});

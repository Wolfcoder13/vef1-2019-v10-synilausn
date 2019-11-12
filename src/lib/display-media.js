import { empty, el } from './helpers';
import getRandomImage from './nasa-api';
import { save, load } from './storage';

let title;
let text;
let img;
let image;


function getNewImage() {
  getRandomImage().then((json) => {
    image = json;
    img.setAttribute('src', json.hdurl);
    empty(text);
    empty(title);
    text.appendChild(document.createTextNode(json.explanation));
    title.appendChild(document.createTextNode(json.title));
  });
}

function saveCurrentImage() {
  save(image.media_type, image.hdurl, image.explanation, image.title);
}

export default function init(apod) {
  title = apod.querySelector('.apod__title');
  text = apod.querySelector('.apod__text');
  img = apod.querySelector('.apod__image');

  getNewImage();

  const newImageButton = apod.querySelector('#new-image-button');
  newImageButton.addEventListener('click', getNewImage);

  const saveImageButton = apod.querySelector('#save-image-button');
  saveImageButton.addEventListener('click', saveCurrentImage);
}

export function loadFavourites() {
  const main = document.querySelector('main');

  const images = load();

  images.forEach((i) => {
    const element = el('section',
      el('h2', i.title),
      el('img'));

    element.classList.add('apod');
    element.querySelector('h2').classList.add('apod__title');
    element.querySelector('img').classList.add('apod__image');
    element.querySelector('img').setAttribute('src', i.mediaUrl);
    main.appendChild(element);
  });
}

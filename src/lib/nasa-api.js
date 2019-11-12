import { randomNumber } from './helpers';

/**
 * Sækir Myndir frá nasa API
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'DEMO_KEY';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';



/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  const randomDate = `${randomNumber(1996, 2019)}-${randomNumber(1, 12)}-${randomNumber(1, 28)}`;

  const response = await fetch(`${URL}?api_key=${API_KEY}&date=${randomDate}`);

  const json = await response.json();

  return json;
}

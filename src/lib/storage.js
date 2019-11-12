/**
 * Sækir og vistar í localStorage
 */

// Fast sem skilgreinir heiti á lykli sem vistað er undir í localStorage
const LOCALSTORAGE_KEY = 'favourite_spacephotos';

/**
 * Sækir gögn úr localStorage. Skilað sem lista á forminu:
 * { points: <stig>, name: <nafn> }
 *
 * @returns {array} fylki af myndum eða tóma fylkið ef ekkert vistað.
 */
export function load() {
  const favouritesJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const favourites = JSON.parse(favouritesJson) || [];

  return favourites;
}

/**
 * Vistaðar myndir með texta.
 *
 * @param {string} type image eða video
 * @param {string} mediaUrl URL á myndinni/myndbandinu
 * @param {string} text texti fyrir myndina/myndbandið.
 */
export function save(type, mediaUrl, text) {
  const favourites = load();

  favourites.push({ type, mediaUrl, text });
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(favourites));
}


/**
 * Hreinsa öll stig úr localStorage
 */
export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

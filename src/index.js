import { fadeIn, fadeSwap } from './fader';
import populateAboutPage from './about-page';
import populateDishesPage from './dishes-page';
import populateContactPage from './contact-page';

const qrySelect = document.querySelector.bind(document);
const mainContainer = qrySelect('#content');

function swapContents(populateFn) {
  return () => fadeSwap(mainContainer, populateFn, 42);
}

function setMenuItemEventListener(selector, contentsFn) {
  qrySelect(selector).addEventListener('click', swapContents(contentsFn));
}

populateAboutPage();
fadeIn(document.getElementsByTagName('body')[0], 50);

setMenuItemEventListener('#about', populateAboutPage);
setMenuItemEventListener('#dishes', populateDishesPage);
setMenuItemEventListener('#contact', populateContactPage);

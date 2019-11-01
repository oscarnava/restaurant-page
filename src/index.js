import { fadeIn, fadeSwap } from './fader';
import populateAboutPage from './about-page';
import populateDishesPage from './dishes-page';
import populateContactPage from './contact-page';

const qrySelect = document.querySelector.bind(document);
const mainContainer = qrySelect('#content');
let currentPage;

function swapContents(populateFn, page) {
  return () => {
    if (page !== currentPage) {
      fadeSwap(mainContainer, populateFn, 42);
      currentPage = page;
    }
  };
}

function setMenuItemEventListener(selector, contentsFn, page) {
  qrySelect(selector).addEventListener('click', swapContents(contentsFn, page));
}

populateAboutPage();
currentPage = 1;

fadeIn(document.getElementsByTagName('body')[0], 50);

setMenuItemEventListener('#about', populateAboutPage, 1);
setMenuItemEventListener('#dishes', populateDishesPage, 2);
setMenuItemEventListener('#contact', populateContactPage, 3);

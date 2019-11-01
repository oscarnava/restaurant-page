import { updateContents } from './dom-utils';

let contents = null;

function createContents() {
  const aboutCtnr = document.createElement('div');
  aboutCtnr.id = 'about-container';

  const subtitle = document.createElement('h2');
  subtitle.innerText = 'The best food in town! Sopa tarasca, Corundas, Enchiladas morelianas o placeras, Morisqueta, Carnitas, Aporreadillo, Uchepos, Chongos zamoranos, Ate, Nieve de pasta and much more...';

  aboutCtnr.appendChild(subtitle);

  return [aboutCtnr];
}

export default function populateAboutPage() {
  contents = contents || createContents();
  updateContents(contents);
}

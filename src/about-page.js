import updateContents from './updateContents';

let contents = null;

function createContents() {
  const aboutCtnr = document.createElement('div');
  aboutCtnr.id = 'about-container';

  // const title = document.createElement('h1');
  // title.innerText = "Malola's Restaurant";

  const subtitle = document.createElement('h2');
  subtitle.innerText = 'The best food in town! Sopa tarasca, Corundas, Enchiladas morelianas o placeras, Morisqueta, Carnitas, Aporreadillo, Uchepos, Chongos zamoranos, Ate, Nieve de pasta and much more...';

  // aboutCtnr.appendChild(title);
  aboutCtnr.appendChild(subtitle);

  console.log('About page contents created');

  return [aboutCtnr];
}

export default function populateAboutPage() {
  contents = contents || createContents();
  updateContents(contents);
}

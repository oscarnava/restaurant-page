import updateContents from './updateContents';

let contents = null;

function createContents() {
  const title = document.createElement('h1');
  title.innerText = "Malola's Restaurant";

  const subtitle = document.createElement('h2');
  subtitle.innerText = 'The best food in town! Sopa tarasca, Corundas, Enchiladas morelianas o placeras, Morisqueta, Carnitas, Aporreadillo, Uchepos, Chongos zamoranos, Ate, Nieve de pasta and much more...';

  console.log('About page contents created');

  return [title, subtitle];
}

export default function populateAboutPage() {
  contents = contents || createContents();
  updateContents(contents);
}

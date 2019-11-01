import updateContents from './updateContents';

export default function populateAboutPage() {
  const title = document.createElement('h1');
  title.innerText = 'Restaurant Malola';

  const subtitle = document.createElement('h2');
  subtitle.innerText = 'The best food in town! Sopa tarasca, Corundas, Enchiladas morelianas o placeras, Morisqueta, Carnitas, Aporreadillo, Uchepos, Chongos zamoranos, Ate, Nieve de pasta and much more...';

  updateContents([title, subtitle]);
}

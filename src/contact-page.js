import updateContents from './updateContents';

let contents = null;

function createContents() {
  const title = document.createElement('div');
  title.innerText = 'Some header for contact';

  const subtitle = document.createElement('h2');
  subtitle.innerText = 'Some content for contact';

  console.log('Contact page contents created');

  return [title, subtitle];
}

export default function populateContactPage() {
  contents = contents || createContents();
  updateContents(contents);
}

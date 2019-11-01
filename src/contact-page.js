import updateContents from './updateContents';

const imagePath = 'img';
let contents = null;

function createContents() {
  const contactCtnr = document.createElement('address');
  contactCtnr.id = 'contact-container';

  const imgElem = document.createElement('img');
  imgElem.src = `${imagePath}/contact.jpg`;

  const header = document.createElement('h1');
  header.innerText = 'Contact';

  const email = document.createElement('div');
  email.className = 'email';
  email.innerHTML = '<a href="mailto:contact@malolarestaurant.com">contact@malolarestaurant.com</a>';

  const cellular = document.createElement('div');
  cellular.className = 'cell';
  cellular.innerHTML = 'Cell phone: <a href="tel:4433005440">555 555 5555</a>';

  const whats = document.createElement('div');
  whats.className = 'whats';
  whats.innerHTML = 'whatsapp: <a href="https://api.whatsapp.com/send?phone=+525555555555">+52 555 555 5555</a>';

  contactCtnr.appendChild(imgElem);
  contactCtnr.appendChild(header);
  contactCtnr.appendChild(email);
  contactCtnr.appendChild(cellular);
  contactCtnr.appendChild(whats);

  console.log('Contact page contents created');

  return [contactCtnr];
}

export default function populateContactPage() {
  contents = contents || createContents();
  updateContents(contents);
}

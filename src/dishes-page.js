import updateContents from './updateContents';

const imagePath = 'img';
const dishesInfo = [
  {
    img: 'sopa-tarasca.jpg',
    head: 'Sopa tarasca',
    body: 'Hecha a base de frijoles molidos, puré de jitomate y chile pasilla seco. Usualmente se sirve con tiritas de tortilla fritas, queso cotija, crema, epazote y chiles serranos picados.',
  },
  {
    img: 'corundas.jpg',
    head: 'Corundas',
    body: 'Parecidas a los tamales pero de forma triangular, se sirven envueltas en hojas de maíz acompañadas con queso, crema y rajas. Cuenta la leyenda que eran el platillo favorito del emperador purépecha Caltzontzin, quien las comía en ocasiones especiales, y por esa razón también se les llama “panecillos del palacio”.',
  },
  {
    img: 'enchiladas.jpg',
    head: 'Enchiladas morelianas o placeras',
    body: 'Lo que distingue a estas enchiladas es que la tortilla primero se pasa por la salsa (de chile guajillo) y luego se fríe – al contrario que en otras recetas en donde primero se fríe la tortilla y luego se baña en salsa. Las enchiladas morelianas se rellenan de papas y zanahorias y van acompañadas de pollo placero.',
  },
  {
    img: 'morisqueta.jpg',
    head: 'Morisqueta',
    body: 'Platillo originario de Apatzingan, consiste en arroz blanco de grano corto cocido con frijoles de la olla y salsa guisada con queso o carne. En una de sus versiones más populares, va acompañada de costillas de cerdo.',
  },
  {
    img: 'carnitas.jpg',
    head: 'Carnitas estilo Michoacán:',
    body: 'Es imposible hablar de la cocina michoacana sin mencionar las célebres carnitas de cerdo, especialmente famosas en el municipio de Quiroga. Tradicionalmente se preparan en grandes ollas de cobre (elaboradas en Santa Clara del Cobre) donde distintas partes del cerdo se fríen en manteca del mismo animal. Se sirven en tacos, con tortillas de maíz, cilantro, cebolla, salsas y jugo de limón.',
  },
  {
    img: 'aporreadillo.jpg',
    head: 'Aporreadillo',
    body: 'Un platillo a base de cecina de res y huevo revuelto cubierto de salsa verde o roja, o en ocasiones de ambas salsas. Se dice que el aporreadillo fue bautizado con ese nombre porque la carne, después de ser secada al sol y salada, se aporreaba hasta que quedara desmenuzada.',
  },
  {
    img: 'uchepos.jpg',
    head: 'Uchepos',
    body: 'Tamales de maíz tierno (elote) molido. El sabor de los uchepos es algo dulce, pero en ocasiones se sirven con salsa verde o roja, con queso cotija y crema. También pueden servirse como postre con leche condensada.',
  },
  {
    img: 'chongos.jpg',
    head: 'Chongos zamoranos',
    body: 'Como su nombre lo indica, este postre es originario de la ciudad de Zamora y la receta se le atribuye a las monjas de los conventos de la época virreinal. Se trata de leche cuajada con azúcar y canela.',
  },
  {
    img: 'ate.jpg',
    head: 'Ate',
    body: 'El ate moreliano es famoso en todo el país. Este platillo es originario de España y fue importado a Morelia por las monjas dominicas. El ate se elabora extrayendo la pulpa de cualquier fruto (usualmente membrillo o guayaba) y luego cociéndolo con azúcar en una cazuela de cobre. Se suele acompañar con queso.',
  },
  {
    img: 'nieve-de-pasta.jpg',
    head: 'Nieve de pasta',
    body: 'Es originaria de Pátzcuaro, a donde viajan los habitantes de Morelia y los alrededores sólo por la nieve. Se distingue por su consistencia cremosa y se elabora con canela, vainilla, almendras y miel de maíz.',
  },
];

let contents = null;

function createContents() {
  const dishCtnr = document.createElement('div');
  dishCtnr.id = 'dish-container';

  dishesInfo.forEach(({ img, head, body }) => {
    const dish = document.createElement('div');
    dish.className = 'dish';
    dishCtnr.appendChild(dish);

    const imgElem = document.createElement('img');
    imgElem.src = `${imagePath}/${img}`;
    dish.appendChild(imgElem);

    const headElem = document.createElement('h3');
    headElem.innerText = head;
    dish.appendChild(headElem);

    const bodyElem = document.createElement('p');
    bodyElem.innerText = body;
    dish.appendChild(bodyElem);
  });

  console.log('Dishes page contents created');

  return [dishCtnr];
}

export default function populateDishesPage() {
  contents = contents || createContents();
  updateContents(contents);
}

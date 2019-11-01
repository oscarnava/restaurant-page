const qrySelect = document.querySelector.bind(document);
const mainContainer = qrySelect('#content');

export function clearContents(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

const updateContents = (() => {
  return (contents) => {
    const fragment = document.createDocumentFragment();
    contents.forEach((element) => fragment.appendChild(element));
    clearContents(mainContainer);
    mainContainer.appendChild(fragment);
  };
})();

export { updateContents, qrySelect, mainContainer };

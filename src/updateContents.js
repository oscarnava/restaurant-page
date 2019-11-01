import clearContents from './clearContents';

const updateContents = (() => {
  const container = document.getElementById('content');
  return (contents) => {
    const fragment = document.createDocumentFragment();
    contents.forEach((element) => fragment.appendChild(element));
    clearContents(container);
    container.appendChild(fragment);
  };
})();

export default updateContents;

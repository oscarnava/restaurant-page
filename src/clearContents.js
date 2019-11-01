export default function clearContents(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

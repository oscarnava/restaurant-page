export default function fadeIn(element, step = 100) {
  let opacity = 0.0;
  (function f() {
    opacity += 0.10001;
    element.style.opacity = opacity.toFixed(1);
    if (opacity < 1.0) {
      setTimeout(f, step);
    }
  }());
}

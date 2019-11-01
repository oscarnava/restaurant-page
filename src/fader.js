function fade(element, delay = 100, start = 0, stop = 10, delta = 1) {
  (function f() {
    start += delta;
    element.style.opacity = start / 10.0;
    if (start !== stop) {
      setTimeout(f, delay);
    }
  }());
}

export function fadeIn(element, step = 100) {
  fade(element, step);
}

export function fadeOut(element, step = 100) {
  fade(element, step, 10, 0, -1);
}

export function fadeSwap(element, callback, delay = 100) {
  let start = 10;
  let delta = -1;
  (function f() {
    start += delta;
    element.style.opacity = start / 10.0;
    if (start === 0) {
      callback();
      delta = 1;
    }
    if (start < 10) {
      setTimeout(f, delay);
    }
  }());
}

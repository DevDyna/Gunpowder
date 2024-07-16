//priority 100
function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rnd50() {
  return Math.random() < 0.5;
}

function rnd75() {
  return Math.random() < 0.75;
}

function rnd25() {
  return Math.random() < 0.25;
}

/**
 *
 * @param {any} content
 * @param {number} times it repeat the element -> (a,2) -> aa
 * @returns
 */
function repeat(content, times) {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(content);
  }
  return result;
}

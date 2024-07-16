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
(() => {
  // TODO: Calculate this?
  const errorCount = 14;
  let lastError = null;

  setInterval(() => {
    const element = document.querySelector('#loading');
    if (element.className == 'fadeout') {
      element.className = 'fadein';
    } else {
      element.className = 'fadeout';
    }
  }, 1000);

  setInterval(() => {
    fetch(`errors/${getNextError(errorCount)}.html`)
      .then(response => response.text()
        .then(error => {
          const element = document.querySelector('#error');
          element.innerHTML = error;
          element.style.display = 'inline-block';
        }));
  }, 5000);

  function getNextError(count) {
    while (true) {
      const rand = Math.ceil(Math.random() * count);
      if (rand !== lastError) {
        lastError = rand;
        return rand;
      }
    }
  }
})();

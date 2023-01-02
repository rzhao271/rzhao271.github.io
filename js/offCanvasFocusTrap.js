function addOffCanvasFocusTrap() {
  const focusBegin = document.getElementById('focus-trap-begin');
  const focusEnd = document.getElementById('focus-trap-end');
  const closeButton = document.getElementById('off-canvas-close-button');
  const contact = document.querySelector('ul.off-canvas-list li:last-child a');

  focusBegin.addEventListener('focus', (e) => {
    e.preventDefault();
    contact.focus();
  });
  focusEnd.addEventListener('focus', (e) => {
    e.preventDefault();
    closeButton.focus();
  });
}

function addLinkSpaceHandlers() {
  const links = document.getElementsByTagName('a');
  for (const link of links) {
    link.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  }
}

function load(selector, path) {
  const cached = localStorage.getItem(path);
  const element = document.querySelector(selector);

  if (cached) {
    element.innerHTML = cached;
  }

  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      if (html != cached) {
        element.innerHTML = html;
        localStorage.setItem(path, html);
      }
    });
}

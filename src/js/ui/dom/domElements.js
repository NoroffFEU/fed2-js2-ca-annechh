export function createImageElement({
  id = '',
  className = '',
  src = '',
  alt = '',
}) {
  const elementImage = Object.assign(document.createElement('img'), {
    className,
    id,
    src,
    alt,
  });

  if (className) elementImage.classList.add(className);

  return elementImage;
}

export function createDivElement({ className = '', id = '' }) {
  const elementDiv = document.createElement('div');
  if (className) {
    elementDiv.classList.add(className);
  }
  if (id) {
    elementDiv.id = id;
  }
  return elementDiv;
}

export function createHeadingElement({
  id = '',
  className = '',
  htmlElement,
  textContent,
}) {
  const elementHeading = document.createElement(htmlElement);
  elementHeading.textContent = textContent;
  if (className) {
    elementHeading.classList.add(className);
  }
  return elementHeading;
}

export function createElementParagraph({
  id = '',
  className = '',
  textContent,
}) {
  const elementParagraph = document.createElement('p');

  if (id) {
    elementParagraph.id = id;
  }
  if (className) {
    elementParagraph.classList.add(className);
  }
  if (textContent) {
    elementParagraph.textContent = textContent;
  }
  return elementParagraph;
}

export function createElementHref({ href = '', className = '', textContent }) {
  const elementHref = document.createElement('a');

  if (href) {
    elementHref.href = href;
  }
  if (className) {
    elementHref.classList.add(className);
  }
  if (textContent) {
    elementHref.textContent = textContent;
  }
  return elementHref;
}

export function createElementButton({ id = '', className = '', textContent }) {
  const elementButton = document.createElement('button');

  if (id) {
    elementButton.id = id;
  }
  if (className) {
    elementButton.classList.add(className);
  }
  if (textContent) {
    elementButton.textContent = textContent;
  }
  return elementButton;
}

function injectMetadata(pageTitle, pageDescription) {
  // title tag
  const metaTitleElement = document.createElement("title");
  metaTitleElement.textContent = pageTitle;

  // meta tag
  const metaDescriptionElement = document.createElement("meta");
  metaDescriptionElement.name = "description";
  metaDescriptionElement.content = pageDescription;

  // head tag
  const headElement = document.getElementsByTagName("head")[0];
  headElement.appendChild(metaTitleElement);
  headElement.appendChild(metaDescriptionElement);
}

export default injectMetadata;

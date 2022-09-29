export function initializeWebsite() {
    const content = document.getElementById("content");
    content.replaceChildren();

    content.appendChild(createTitle("Welcome to"));
    content.appendChild(createTitle("Moonlight"));

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../src/assets/img.jpg";
    image.alt = "Image of food";
    content.appendChild(image);

    content.appendChild(createParagraph("WHERE FINE DINING AND"));
    content.appendChild(createParagraph("GREAT ATMOSPHERE"));
    content.appendChild(createParagraph("CONVERGE."));
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  function createTitle(text) {
    const title = document.createElement("h2");
    title.textContent = text;
    return title;
  }
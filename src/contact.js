export function contact() {
    const content = document.getElementById("content");
    content.replaceChildren();

    content.appendChild(createTitle("CONTACTS"));
    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../src/assets/img2.jpg";
    image.alt = "Image of dog";
    content.appendChild(image);

    content.appendChild(createParagraph("Head Chef Baker"));
    content.appendChild(createParagraph("(555) 555-5555"));
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
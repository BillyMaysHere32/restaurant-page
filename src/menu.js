export function menu() {
    const content = document.getElementById("content");
    content.replaceChildren();

    content.appendChild(createTitle("MENU"));
    content.appendChild(createParagraph("Taking inspiration from all around the world head chef Baker creates an exquisite fusion of european and "));
    content.appendChild(createParagraph("spanish dishes. His never ending resolve for perfection has resulted in a truly elagent journey"));
    content.appendChild(createParagraph("of the senses with meals you can feel good about, prepared from the finist organic ingredients."));

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../src/assets/img3.jpg";
    image.alt = "Image of fine dining";
    content.appendChild(image);
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


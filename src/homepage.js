export function initializeWebsite() {
    const content = document.getElementById("content");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    const restaurantName = document.createElement("h1");
    heading.textContent = "Moonlight";
    content.appendChild(heading);

    const main = document.createElement("main");
    main.classList.add("main");
    main.textContent = "Welcome";
    content.appendChild(main);


    const image = document.createElement("img");
    image.classList.add("image");
    image.src = "../src/assets/img.jpg";
    image.alt = "Image of food";
    content.appendChild(image);


  

}
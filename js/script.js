console.log("Witam wszystkich!");

let button = document.querySelector(".button");
let image = document.querySelector(".image");

button.addEventListener("click", () => {
    if (image.classList.contains("hide")) {
        image.classList.remove("hide");
        button.innerText = "Ukryj zdjęcie";
    } else {
        image.classList.add("hide");
        button.innerText = "Pokaż zdjęcie";
    }
});

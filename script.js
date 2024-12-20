// Завдання 1
let firstClickDone = false;

document.getElementById("element-9").addEventListener("click", function () {
    if (!firstClickDone) {
        this.style.backgroundColor = "#ffeb3b";
        this.style.color = "#000";
        firstClickDone = true;
    } else {
        this.style.backgroundColor = "#ffffff";
        this.style.color = "#333";
        firstClickDone = false;
    }
});

document.querySelector("#element-1").addEventListener("click", function () {
    if (!firstClickDone) {
        this.style.backgroundColor = "#4caf50";
        this.style.color = "#fff";
        firstClickDone = true;
    } else {
        this.style.backgroundColor = "#ffffff";
        this.style.color = "#333";
        firstClickDone = false;
    }
});

// Завдання 2
const img = document.getElementById("sarny-img");
const addButton = document.getElementById("add-img-btn");
const increaseButton = document.getElementById("increase-img-btn");
const decreaseButton = document.getElementById("decrease-img-btn");
const deleteButton = document.getElementById("delete-img-btn");

addButton.addEventListener("click", () => {
    if (!document.getElementById("sarny-img")) {
        const newImg = document.createElement("img");
        newImg.id = "sarny-img";
        newImg.src = "C:/Users/bacan/Desktop/Front_end/Лаби/lab1/lab1/sarny.jpg";
        newImg.alt = "Фото міста Сарни";
        newImg.style.width = "600px";
        document.body.appendChild(newImg);
    }
});

increaseButton.addEventListener("click", () => {
    if (img) {
        img.style.width = parseInt(img.style.width) + 50 + "px";
    }
});

decreaseButton.addEventListener("click", () => {
    if (img) {
        img.style.width = Math.max(parseInt(img.style.width) - 50, 50) + "px";
    }
});

deleteButton.addEventListener("click", () => {
    if (img) {
        img.remove();
    }
});

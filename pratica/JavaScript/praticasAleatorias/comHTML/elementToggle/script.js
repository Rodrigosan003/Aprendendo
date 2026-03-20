let btnRed = document.querySelector("#btn-red");
let btnBlue = document.querySelector("#btn-blue");
let body = document.querySelector("body");

btnRed.addEventListener("click", () => {
    body.classList.toggle("red");
})

btnBlue.addEventListener("click", () => {
    body.classList.toggle("blue")
})
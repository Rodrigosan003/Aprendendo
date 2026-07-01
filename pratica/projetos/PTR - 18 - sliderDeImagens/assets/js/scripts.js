const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let atual = 0;

function mostrarSlide(indice){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[indice].classList.add("active");

}

next.addEventListener("click",()=>{

    atual++;

    if(atual >= slides.length){
        atual = 0;
    }

    mostrarSlide(atual);

});

prev.addEventListener("click",()=>{

    atual--;

    if(atual < 0){
        atual = slides.length - 1;
    }

    mostrarSlide(atual);

});

// Troca automática (opcional)

setInterval(()=>{

    atual++;

    if(atual >= slides.length){
        atual = 0;
    }

    mostrarSlide(atual);

},5000);
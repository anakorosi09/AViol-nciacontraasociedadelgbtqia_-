
const form =
document.querySelector(".contact-form");

const mensagem =
document.getElementById("mensagem-enviada");

if (form) form.addEventListener("submit", function(e){

    e.preventDefault();

    const btn =
    document.querySelector(".btn-submit");

    btn.innerText = "Enviando...";
    btn.disabled = true;

    emailjs.sendForm(
        "service_pk2fyrq",
        "template_bav0pyw",
        this
    )

    .then(() => {

        mensagem.style.opacity = "1";

        btn.innerText = "Mensagem enviada!";
        btn.disabled = false;

        form.reset();

    })

    .catch(() => {

        mensagem.innerText =
        "Erro ao enviar mensagem.";

        mensagem.style.opacity = "1";

        btn.innerText = "Tentar novamente";
        btn.disabled = false;

    });

});



const reveals =
document.querySelectorAll(".texto-caixa");

window.addEventListener("scroll", () => {

    reveals.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add("show");

        }

    });

});




const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

/* MOSTRAR SLIDE */

function mostrarSlide(numero){

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    if (slides[numero]) slides[numero].classList.add("active");
    if (dots[numero]) dots[numero].classList.add("active");
}

/* PRÓXIMO */

function proximoSlide(){

    index++;

    if(index >= slides.length){
        index = 0;
    }

    mostrarSlide(index);
}

/* ANTERIOR */

function slideAnterior(){

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    mostrarSlide(index);
}

/* BOTÕES */

if (prevBtn) prevBtn.addEventListener("click", slideAnterior);

if (nextBtn) nextBtn.addEventListener("click", proximoSlide);

/* AUTO PLAY */

let autoplay = setInterval(proximoSlide, 5500);

const carousel = document.querySelector(".carousel-wrapper");
if (carousel) {
    carousel.addEventListener("mouseenter", () => clearInterval(autoplay));
    carousel.addEventListener("mouseleave", () => {
        clearInterval(autoplay);
        autoplay = setInterval(proximoSlide, 5500);
    });
}

/* BOLINHAS */

dots.forEach((dot, numero) => {

    dot.addEventListener("click", () => {

        index = numero;

        mostrarSlide(index);

    });

});

/* Em telas touch, permite virar os cards com toque, sem depender de hover. */
document.querySelectorAll(".flip-card").forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Virar card para ler os detalhes");
    const toggleCard = () => card.classList.toggle("is-flipped");
    card.addEventListener("click", toggleCard);
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleCard();
        }
    });
});

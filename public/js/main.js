const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.querySelectorAll(".dot");
const togglePlay = document.getElementById("togglePlay");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

let index = 0;
let interval = setInterval(nextSlide, 3000);
let isPlaying = true;

// Función para cambiar slide
function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle("bg-white", i === index);
        dot.classList.toggle("bg-gray-400", i !== index);
    });
}

// Siguiente slide
function nextSlide() {
    index = (index + 1) % dots.length;
    updateSlide();
}

// Slide anterior
function prevSlide() {
    index = (index - 1 + dots.length) % dots.length;
    updateSlide();
}

// Pausar o reanudar autoplay
togglePlay.addEventListener("click", () => {
    if (isPlaying) {
        clearInterval(interval);
        playIcon.classList.remove("hidden");
        pauseIcon.classList.add("hidden");
    } else {
        interval = setInterval(nextSlide, 3000);
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
    }
    isPlaying = !isPlaying;
});

// Eventos de botones
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Eventos de indicadores
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateSlide();
    });
});
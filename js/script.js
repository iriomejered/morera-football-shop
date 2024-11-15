const FECHA_DESTINO = new Date("Nov 18, 2024 19:45:00").getTime();

const INTERVAL = setInterval(function() {
    const AHORA = new Date().getTime();
    const DISTANCIA = FECHA_DESTINO - AHORA;

    const DIAS = Math.floor(DISTANCIA / (1000 * 60 * 60 * 24));
    const HORAS = Math.floor((DISTANCIA % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const MINUTOS = Math.floor((DISTANCIA % (1000 * 60 * 60)) / (1000 * 60));
    const SEGUNDOS = Math.floor((DISTANCIA % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        "SIGUIENTE PARTIDO: " + DIAS + "d " + HORAS + "h " + MINUTOS + "m " + SEGUNDOS + "s /";

    if (distancia < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "El partido ha comenzado";
    }
}, 1000);

window.addEventListener("scroll", function() {
    const scrolled = window.scrollY;
    const parallaxElement = document.querySelector(".cr7-container");

    const offset = scrolled * -0.4;
    parallaxElement.style.backgroundPositionY = `${offset}px`;
});
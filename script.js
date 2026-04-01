document.addEventListener('DOMContentLoaded', () => {
    console.log("Web de Chocol'Há cargada con estampado y animaciones.");

    // Efecto sutil en la barra de navegación al hacer scroll
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
            nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        } else {
            nav.style.boxShadow = "none";
            nav.style.backgroundColor = "#ffffff";
        }
    });
});
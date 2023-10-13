// Declaramos las variables `cloud`, `barraLateral`, spans`, `palanca`, `circulo`, `menu` y `main`.
const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

// Agregamos un evento `click` al elemento `menu`.
menu.addEventListener("click", () => {

    // Ajustamos la clase `max-barra-lateral` de la barra lateral.
    barraLateral.classList.toggle("max-barra-lateral");

    // Si la barra lateral tiene la clase `max-barra-lateral`,
    // entonces ocultamos el primer hijo del elemento `menu` y mostramos el segundo hijo.
    if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    } else {
        // Si la barra lateral no tiene la clase `max-barra-lateral`,
        // entonces mostramos el primer hijo del elemento `menu` y ocultamos el segundo hijo.
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }

    // Si el ancho de la ventana es menor o igual a 320,
    // entonces agregamos la clase `mini-barra-lateral` a la barra lateral y la clase `min-main` al elemento `main`.
    // También ocultamos todos los elementos con la clase `span`.
    if (window.innerWidth <= 320) {
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto");
        });
    }
});

// Agregamos un evento `click` al elemento `palanca`.
palanca.addEventListener("click", () => {

    // Ajustamos la clase `dark-mode` del cuerpo del documento.
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");

    // Ajustamos la clase `prendido` del elemento `circulo`.
    circulo.classList.toggle("prendido");
});

// Agregamos un evento `click` al elemento `cloud`.
cloud.addEventListener("click", () => {

    // Ajustamos la clase `mini-barra-lateral` de la barra lateral y la clase `min-main` al elemento `main`.
    // También ocultamos todos los elementos con la clase `span`.
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
});

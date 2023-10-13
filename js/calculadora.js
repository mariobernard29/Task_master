// Declaramos las variables `pantalla` y `botones`.
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Recorremos el arreglo `botones` y agregamos un evento `click` a cada botón.
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtenemos el texto del botón que se presionó.
        const botonApretado = boton.textContent;

        // Si se presionó el botón "C", limpiamos la pantalla.
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // Si se presionó el botón "Borrar", eliminamos el último número de la pantalla.
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Si se presionó el botón "=", evaluamos la expresión en la pantalla.
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Si la pantalla está vacía o contiene un error, agregamos el nuevo número.
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});

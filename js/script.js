// Mensaje de bienvenida dinámico
window.onload = function () {
    const saludo = document.getElementById("saludo");
    const hora = new Date().getHours();

    if (hora < 12) {
        saludo.innerText = "¡Buenos días! Bienvenido a Supermercado El Ahorro.";
    } else if (hora < 18) {
        saludo.innerText = "¡Buenas tardes! Descubre nuestras promociones.";
    } else {
        saludo.innerText = "¡Buenas noches! Aprovecha nuestras ofertas exclusivas.";
    }
};

// Mostrar/ocultar promociones
const togglePromociones = () => {
    const promociones = document.getElementById("lista-promociones");
    promociones.classList.toggle("d-none");
};

// Validar formulario de contacto
const validarFormulario = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    alert("¡Gracias por contactarnos! Pronto nos comunicaremos contigo.");
    return true;
};
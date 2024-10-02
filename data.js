document.addEventListener("DOMContentLoaded", function() {
    const userData = localStorage.getItem("userData"); // recupero el dato desde localStorage
    const dataElement = document.getElementById("data").textContent = userData; // muestro el dato
});
document.getElementById("buttonText").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value; //obtengo el valor del input
    localStorage.setItem("userData", inputText); //guardo el valor en localStorage

    document.getElementById("inputText").value = ''; // limpio el campo
});
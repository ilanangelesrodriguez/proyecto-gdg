
let contadorCampos = 0;

function agregarCampo() {
    contadorCampos++;

    let nuevoCampo = document.createElement('div');
    nuevoCampo.classList.add('campo');
    nuevoCampo.innerHTML = `
        <label for="campo${contadorCampos}">Campo ${contadorCampos}:</label><br>
        <input type="text" id="campo${contadorCampos}" name="campo${contadorCampos}"><br><br>
    `;

    document.getElementById('camposDinamicos').appendChild(nuevoCampo);
}

document
.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
});
function contraste(){
    let eBody = document.body;
    let fondo = eBody.style.backgroundColor;
    if(fondo == "green"){
        eBody.style.backgroundColor = "yellow";
    }

    else{
        eBody.style.backgroundColor = "green"
    }
}
function fuente() {
    let estilos = document.getElementsByTagName('html')[0].style;
    let tamanioactual = parseFloat(estilos.fontSize) || 16;
    if(tamanioactual  === 16) {
        let nuevotamanio = tamanioactual + 40;
        estilos.fontSize = nuevotamanio + 'px';
    }
    else{
        let nuevotamanio = tamanioactual - 40;
        estilos.fontSize = nuevotamanio + 'px';
    }

}

function validar(){
    validarVacio("nombre");
    validarVacio("apellido");
    validarRut("rut");
    validarVacio("correo");
    validarEdad("edad");
    validarVacio("direccion");
    validarSelect("genero");
    validarCheckbox("terminos");
}

function validarVacio(idCampo){
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value.trim();
    let eParrafo = document.getElementById("p"+idCampo);

    if(valor === ""){
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
    } else {
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
    }
}

function validarRut(idCampo){
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value.trim();
    let eParrafo = document.getElementById("p"+idCampo);

    if(valor === "" || valor.length > 10){
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
    } else {
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
    }
}


function validarEdad(idCampo){
    let elemento = document.getElementById(idCampo);
    let valor = parseInt(elemento.value);
    let eParrafo = document.getElementById("p"+idCampo);

    if(isNaN(valor) || valor <= 0){
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
    } else {
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
    }
}

function validarSelect(idCampo){
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value;
    let eParrafo = document.getElementById("p"+idCampo);

    if(valor === ""){
        eParrafo.style.display = "block";
    } else {
        eParrafo.style.display = "none";
    }
}

function validarCheckbox(idCampo){
    let elemento = document.getElementById(idCampo);
    let eParrafo = document.getElementById("p"+idCampo);

    if(!elemento.checked){
        eParrafo.style.display = "block";
    } else {
        eParrafo.style.display = "none";
    }
}

function enviar() {
    validar(); 
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eRut = document.getElementById("rut");
    let eCorreo = document.getElementById("correo");
    let eEdad = document.getElementById("edad");
    let eDireccion = document.getElementById("direccion");
    let eGenero = document.getElementById("genero");
    let eTerminos = document.getElementById("terminos");

    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vRut = eRut.value;
    let vCorreo = eCorreo.value;
    let vEdad = eEdad.value;
    let vDireccion = eDireccion.value;
    let vGenero = eGenero.value;
    let vTerminos = eTerminos.checked;

    if (vNombre && vApellido && vRut && vCorreo && vEdad && vDireccion && vGenero && vTerminos) {
        let objeto = {
            vNombre,
            vApellido,
            vRut,
            vCorreo,
            vEdad,
            vDireccion,
            vGenero,
            vTerminos
        };

        console.log(objeto);
    } else {

        console.log("no registro");
    }
}
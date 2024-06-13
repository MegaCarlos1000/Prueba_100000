// decide separar los archivos para que este mas ordenado 
// aqui estan las validaciones 

export function validar() {
    // da la ariable como tru 
    let valid = true;

    // realiza las validacionespara actualizar el valid si falla alguna validacion 
    valid &= validarVacio("nombre");
    valid &= validarVacio("apellido");
    valid &= validarRut("rut");
    valid &= validarVacio("correo");
    valid &= validarEdad("edad");
    valid &= validarVacio("direccion");
    valid &= validarSelect("genero");
    valid &= validarCheckbox("terminos");
    return valid; // retorna el resultado de las validaciones 
}

export function validarVacio(idCampo) {
    // optiene el elemento por su id 
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value.trim();
    let eParrafo = document.getElementById("p" + idCampo); // optiene el parrafo del campo

    // Si el valor esta vacio marca el borde en rojo y muestra el mensaje de agregar algo
    if (valor === "") {
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
        return false; // la validacion fallo
    } else {
        // Si no esta marca el borde en verde y oculta el parrafo
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
        return true; // la validacion paso 
    }
}

export function validarRut(idCampo) { // optiene elemnto por su id 
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value.trim();
    let eParrafo = document.getElementById("p" + idCampo); // optiene el parrafo

    // si el valor esta vacio o es mayor a 10 caracteres marca el borde en rojo y da el mensaje correspondiente 
    if (valor === "" || valor.length > 10) {
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
        return false; // la validacion fallo
        
    // si el valor es valido marca el borde en verde e quita el mensaje correspondiente
    } else {

        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
        return true; // la validacion paso
    }
}

export function validarEdad(idCampo) {
    //optiene el id
    let elemento = document.getElementById(idCampo);
    let valor = parseInt(elemento.value);
    let eParrafo = document.getElementById("p" + idCampo);
    // optiene el parrafo
    // si el parrafo es un numero o menor e igual a 0 // marca el borde como rojo y da el mensaje correspondiente 
    if (isNaN(valor) || valor <= 0) {
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
        return false; // la validacion fallo
    // si el valor es valido marca el borde en verde e quita el mensaje correspondiente
    } else {
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
        return true; // la validacion paso 
    }
}

export function validarSelect(idCampo) {
    // optiene el elemento por su id 
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value;
    let eParrafo = document.getElementById("p" + idCampo);
    // optiene el parrafo
    // si el parrafo esta vacio muestra el parrafo de error 
    if (valor === "") {
        eParrafo.style.display = "block";
        return false;// la validacion fallo
    // si el valor es valido marca el borde en verde e quita el mensaje correspondiente
    } else {
        eParrafo.style.display = "none";
        return true;// La validacion paso 
    }
}

export function validarCheckbox(idCampo) {
    // optiene el elemento por su id 
    let elemento = document.getElementById(idCampo);
    let eParrafo = document.getElementById("p" + idCampo);
    // optiene el parrafo asociado

    // si el checbox no esta marcado muestra el mensaje de error 
    if (!elemento.checked) {
        eParrafo.style.display = "block";
        return false; // la validacion fallo
    // si el valor es valido marca el borde en verde e quita el mensaje correspondiente
    } else { 
        eParrafo.style.display = "none";
        return true; // la validacion paso 
    }
}

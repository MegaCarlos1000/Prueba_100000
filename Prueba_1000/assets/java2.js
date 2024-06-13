// Todo lo relacionado a la base de datos 

import { actualizarPersona, eliminarPersona, obtenerPersonas, registrarPersona } from "./promesa.js";
// importa la funcion del archivo promesa 
import { validar, validarVacio, validarRut, validarEdad, validarSelect, validarCheckbox } from './java_validaciones.js';
// importa las funciones validar del archivo java_validaciones
window.addEventListener("load", () => {
    document.getElementById("btnRegistrar").addEventListener("click", enviar);
    document.getElementById("btnActualizar").addEventListener("click",actualizar)
    cargarDatos();
});


//Funcion que se encarga a registrar una persona 
const enviar = () => {
    // valida los datos del formulario
    if (!validar()) {
        console.log("No se registro");
        return;
    }
    // optiene los valores de los campo del formulario
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
    // crea un objeto con los valores optenidos 
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
    // llama a la funcion registrar persona para poner el objetoy maneja la promesa 
    registrarPersona(objeto).then(() => {
        alert("Se registra con éxito.");
        // DA LA CONFIRMACION 
        cargarDatos(); // llama a la funcion cargar datos
        //Recarga los datos de nuevo
    }).catch((error) => {
        console.log(error);
        // Muestra un error en la consola 
    });
}


// Funcion para cargar datos 
const cargarDatos = () => {
    // Llama la funcion obtener personas y maneja las promesas 
    obtenerPersonas().then((personas) => {
        let estructura = "";
        //crea la estructura hmtl 
        personas.forEach((p) => {
            estructura += "<tr>";
            estructura += "<td>" + p.vNombre + "</td>";
            estructura += "<td>" + p.vApellido + "</td>";
            estructura += "<td>" + p.vRut + "</td>";
            estructura += "<td>" + p.vCorreo + "</td>";
            estructura += "<td>" + p.vEdad + "</td>";
            estructura += "<td>" + p.vDireccion + "</td>";
            estructura += "<td>" + p.vGenero + "</td>";
            estructura += "<td><button id='UPD" + p.id + "'>Actualizar</button></td>";
            estructura += "<td><button id='DEL" + p.id + "'>Eliminar</button></td>";
            estructura += "</tr>";
        });
        document.getElementById("cuerpotabla").innerHTML = estructura;
        //  inserta la estructrua html en el cuerpo de la tabla
        // agrega los botones actualizar y eliminar
        personas.forEach((p) => {
            let elemento = document.getElementById("UPD" + p.id);
            elemento.addEventListener("click", () => {
                document.getElementById("nombre").value = p.vNombre;
                document.getElementById("apellido").value = p.vApellido;
                document.getElementById("rut").value = p.vRut;
                document.getElementById("correo").value = p.vCorreo;
                document.getElementById("edad").value = p.vEdad;
                document.getElementById("direccion").value = p.vDireccion;
                document.getElementById("genero").value = p.vGenero;
                document.getElementById("terminos").checked = p.vTerminos;
                document.getElementById("btnActualizar").value = p.id;
                // llena el formulario con ls datos de la persona selecionado 
            });
            // eliminacion de la persona comiensa 
            let btnEliminar = document.getElementById("DEL" + p.id);
            btnEliminar.addEventListener("click", () => {
                if (confirm("¿eliminar a: " + p.vNombre + " " + p.vApellido + "?")) {
                    // confrima la eliminacion de la persona 
                    eliminarPersona(p.id).then(() => {
                        alert("Eliminaste a  "+p.vNombre +" "+p.vApellido);
                        // Da el mensaje de exito
                        cargarDatos();
                        // recargar datos 
                    }).catch((error) => {
                        console.log("Error al eliminar:", error);
                        // muestra el mensaje de error en la consola 
                    });
                } else {
                    console.log("Cancelado.");
                    // MUestra el mesnaje de cancelacion en la consola 
                }
            });
        });
    }).catch((error) => {
        console.log("Error al cargar datos:", error);
        // da un error de mensaje en la consola
    });
}

// Funcion para actualizar
const actualizar = () => {
    // optiene valores de los campos formulario
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
    // optiene el id de la persona a acrtualizar 
    let id = document.getElementById("btnActualizar").value;
    // desactiva el boton de actualizar para evitar muchos envios 
    document.getElementById("btnActualizar").disabled = true;
    // llama a la funcion actualizar persona
    actualizarPersona(objeto, id).then(() => {
        alert("Se actualizó con éxito.");// muestra el mensaje de exito
        cargarDatos(); // recarga los datos 
        document.getElementById("btnActualizar").disabled = false; // reactiva el boton
    }).catch((error) => {
        // muestra el mesnaje de error en la consola 
        console.log("Error al actualizar:", error);
        document.getElementById("btnActualizar").disabled = false; // reactiva el  boton
    });
}

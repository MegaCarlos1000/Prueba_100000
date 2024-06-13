// a qui esta todo lo relacionado al css como cambios de la pagina


// Funcion Cambir el contraste  
function contraste(){
    let eBody = document.body; // Optine el elemento del cuerpo podi 
    let fondo = eBody.style.backgroundColor; // optiene el color del fondo 
    if(fondo == "green"){ // Verefica que el color del fondo sea el mismo 
        eBody.style.backgroundColor = "yellow"; // Si es verde cambia a amarillo 
    }

    else{
        eBody.style.backgroundColor = "green" // Lo contrario si es otro color que no sea verde lo vuelve verde 
    }
}

// Funcion cambiar la fuente 
function fuente() {
    let estilos = document.getElementsByTagName('html')[0].style; //obtiene el elemento del html
    let tamanioactual = parseFloat(estilos.fontSize) || 16; // tranforma el tamaño y lo convierte en un tamaño de 16
    if(tamanioactual  === 16) { // verifica si el tamaño es de 16
        let nuevotamanio = tamanioactual + 40; 
        estilos.fontSize = nuevotamanio + 'px';
                // si es 16 aumenmta el tamaño en 40 px
    }
    else{
        let nuevotamanio = tamanioactual - 40;
        estilos.fontSize = nuevotamanio + 'px';
        // Si no es 16, reduce el tamaño de fuente de en 40px 
    }

}
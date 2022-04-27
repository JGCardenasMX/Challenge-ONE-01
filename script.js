var vocales = ['a', 'e', 'i', 'o', 'u'];

var newVocales = ['ai', 'enter', 'imes', 'ober', 'ufat'];	

//obtener la cadena de input y convertirla en un array para encriptarla
function codificar(evento){
    evento.preventDefault();
    let valorEntrada = document.getElementById("input-texto").value; 
    let arreglo = Array.from(valorEntrada);
    
    for (var elemento = 0; elemento < arreglo.length ; elemento++) {
        if (arreglo[elemento] == vocales[0]) {
            arreglo[elemento] = newVocales[0];
        }
        else if (arreglo[elemento] == vocales[1]) {arreglo[elemento] = newVocales[1];}
        else if (arreglo[elemento] == vocales[2]) {arreglo[elemento] = newVocales[2];}
        else if (arreglo[elemento] == vocales[3]) {arreglo[elemento] = newVocales[3];}
        else if (arreglo[elemento] == vocales[4]) {arreglo[elemento] = newVocales[4];}
    } 
    
    let nuevoArreglo = arreglo.join('');
    
    document.getElementById("msg").value = nuevoArreglo; 
}



function deCodificar(evento){
    evento.preventDefault();
    const valorEntradaCod = document.getElementById("input-texto").value;
    var fraseCodificada = valorEntradaCod;
    var termino1=(/ai/gi);
    var termino2=(/enter/gi);
    var termino3=(/imes/gi);
    var termino4=(/ober/gi);
    var termino5=(/ufat/gi);

    frase=fraseCodificada.replace(termino1,"a").replace(termino2,"e").replace(termino3,"i").replace(termino4,"o").replace(termino5,"u");
    

    console.log(valorEntradaCod);

    console.log(frase);

    document.getElementById("msg").value = frase;
}

function copyToClipBoard(evento) {
    evento.preventDefault();
    document.getElementById('input-texto').value = document.getElementById('msg').value
}


var buttonCod = document.getElementById("btn-encriptar");
    buttonCod.onclick = codificar;

var buttonDec = document.getElementById("btn-desencriptar");
    buttonDec.onclick = deCodificar;

    var buttonDec = document.getElementById("btn-copy");
    buttonDec.onclick = copyToClipBoard;
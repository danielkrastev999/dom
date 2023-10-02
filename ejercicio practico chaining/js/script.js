
//  Seleccionar todas las celdas
let celdas = document.querySelectorAll("tbody td");

//  Funcion a ejecutar cuando entro en la celda
function entrando(e){ //    e es el objeto evento que me da la informacion del mismo
    console.log("entrando");
    let parent = e.target.parentElement; // TR - Fila
    console.log(parent.children);

    //  Obtengo la posicion del elemento
    let position = Array.from(parent.children).indexOf(e.target); //    La lista de elementos html "parent.children" la transformo en un array 
    //                                                                  y le pido el indice de donde se ha producido el "mouseenter"
    console.log(position); //   posicion


    //  Modifico los estilos de los hermanos (misma fila)
    Array.from(parent.children).forEach( item => {
        item.style.backgroundColor="#F00";
        item.style.height="70px";
    });

    //  Modifico los estilos de los elementos de la misma columna
    //  Filas anteriores
    let filaAnterior = e.target.parentElement.previousElementSibling; // tr's anteriores
    while(filaAnterior){ // mientras tenga fila anterior...
        let celda = filaAnterior.children[position]; // cojo de la fila anterior el hijo que esta en la misma posicion
        celda.style.backgroundColor="#F00";
        filaAnterior = filaAnterior.previousElementSibling; //   la fila anterior es la siguiente, se recorre hasta que no queden filas anteriores
    };

      //De las filas posteriores
    let filaPosterior = e.target.parentElement.nextElementSibling;// tr's posteriores
    while (filaPosterior) {// mientras tenga fil posterior...
        let celda = filaPosterior.children[position]; // cojo de la fila posterior el hijo que esta en la misma posicion
        celda.style.backgroundColor="#F00";
        filaPosterior = filaPosterior.nextElementSibling;//   la fila posterior es la siguiente, se recorre hasta que no queden filas posteriores      
    };



}

//  Funcion a ejecutar cuando salgo en la celda
function saliendo(e){//     e es el objeto evento que me da la informacion del mismo
    console.log("saliendo");
    let parent = e.target.parentElement;

    //Obtengo la posición del elemento
    let position = Array.from(parent.children).indexOf(e.target);
    console.log(position);
    
    //Ponemos los hermanos de nuevo en blanco
    Array.from(parent.children).forEach( item => {
        item.style.backgroundColor="#FFF";
        item.style.height="50px";
    });

     //De las filas anteriores
     let filaAnterior = e.target.parentElement.previousElementSibling;
     while (filaAnterior) {
         let celda = filaAnterior.children[position];
         celda.style.backgroundColor="#FFF";
         filaAnterior = filaAnterior.previousElementSibling;      
     }
 
     //De las filas posteriores
     let filaPosterior = e.target.parentElement.nextElementSibling;
     while (filaPosterior) {
         let celda = filaPosterior.children[position];
         celda.style.backgroundColor="#FFF";
         filaPosterior = filaPosterior.nextElementSibling;      
     }
}

//  Bucle para recorrer las celdas y añadir el manejador
celdas.forEach( item =>{
    item.addEventListener("mouseenter", entrando);
    item.addEventListener("mouseleave", saliendo);
})
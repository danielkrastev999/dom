
//  Seleccionamos todas las imagnes
let sourceImages = document.querySelectorAll("#images img");

//  Añadimos un manejador de eventos a cada una de las imagenes seleccionadas
//  para ello, recorremos todas las imagenes encontradas con un for each 
sourceImages.forEach(image =>{
    image.addEventListener("click", event=>{
        //  Cojo la imagen central
        let frameImage = document.querySelector("#frame img");

        //  El atributo src de esa imagen dentro del frame,
        //  va a valer el valor de la imagen src donde he hecho click
        //  Basicamente: copio el src y se lo pongo dentro de la ventana
        frameImage.setAttribute("src", event.target.getAttribute("src"));
    });
});



//  Añadimos el click listener a los divs del color
let colorBlocks = document.querySelectorAll(".colors div"); //  Selecciona divs que hay dentro de .colors

//  Recorro todos los bloques de colores y le añado manejador de eventos "click"
colorBlocks.forEach(block =>{
    block.addEventListener("click", event =>{
        //  Cojo el color del elemento a traves de las propiedades que tiene en css
        let color = window.getComputedStyle(event.target).backgroundColor;
        //  Cojo el elemento con picture, que es donde esta la imagen y le doy 
        //  el style, en concreto el borderColor que sera el mismo que hemos cogido antes
        document.getElementById("picture").style.borderColor=color;
    });
});


//ZOOM
//  Dame la imagen 1 dentro de Zoom
document.querySelector("#zoom img:nth-child(1)").addEventListener("click", event=>{
    //  Cojo la imagen de dentro del frame
    let img = document.querySelector("#frame img"); //  Selecciona img que hay dentro de #frame
    //  Cojo las dimensiones (no funciona con img.style.width)
    let dimensiones = img.offsetWidth;

    //  Aumentamos el ancho y el alto
    img.style.width = (dimensiones+50)+"px";
    img.style.height = (dimensiones+50)+"px";

});

document.querySelector("#zoom img:nth-child(2)").addEventListener("click", event=>{ //Se utiliza para seleccionar 
    //  el primer elemento <img> dentro del elemento con el id "zoom". 
    //  Esto se hace para agregar un evento de clic específicamente al primer icono de zoom-in en tu diseño.
    let img = document.querySelector("#frame img"); //  Selecciona img que hay dentro de #frame
    let dimensiones = img.offsetWidth;
    img.style.width = (dimensiones-50)+"px";
    img.style.height = (dimensiones-50)+"px";
    
});

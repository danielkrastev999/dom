
//Handler: para mostrar la informacion. Nos va a servir tanto para:
//
function showContent(e){
    console.log(e); 
    alert("El elemento se originó en "+e.target.id+" y ahora estoy en "+this.id);
}


// Gets divs to show how works Bubbling
let bubblingDivs = document.querySelectorAll("#bubbling div");
// Get divs to show how works Capturing
let capturingDivs = document.querySelectorAll("#capturing div");

// Añado manejadores de eventos (click) para cada uno de ellos en Bubbling
bubblingDivs.forEach(function(item){
    item.addEventListener('click',showContent,true);
});

// Añado manejadores de eventos (click) para cada uno de ellos en Bubbling
capturingDivs.forEach(function(item){
    item.addEventListener('click',showContent,true);
});
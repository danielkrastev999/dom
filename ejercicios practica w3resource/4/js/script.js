function getAttributes(){
    let href = document.getElementById("w3r").href;
    console.log("The value of the href attribute is: "+href);
    let hreflang = document.getElementById("w3r").hreflang;
    console.log("The value of the hreflang attribute is: "+hreflang);
    let rel = document.getElementById("w3r").rel;
    console.log("The value of the rel attribute is: "+rel);
    let target = document.getElementById("w3r").target;
    console.log("The value of the target attribute is: "+target);
    let type = document.getElementById("w3r").type;
    console.log("The value of the type attribute is: "+type);
}
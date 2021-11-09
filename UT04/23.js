const modulos = new Map();

modulos.set("DWECL", "Desarrollo Web en Entorno Cliente").set("DWES", "Desarrollo Web en Entorno Servidor").set("EIE", "Empresa e Iniciativa Emprendedora").set("DWI", "Desarrollo Web de Interfaz").set("DAW", "Desarrollo de Aplicaciones Web");

document.write("a. " + modulos.size + "<br>");

document.write("b.<br>");
for(let elemento of modulos){
    document.write(elemento + "<br>");
}

document.write("c.<br>");
let abrev = modulos.keys();
for(let a of abrev){
    document.write(a + "<br>");
}

document.write("d.<br>");
let nombres = modulos.values();
for(let nom of nombres){
    document.write(nom + "<br>");
}

document.write("e.<br>");
document.write(modulos.has("DAW") + "<br>");

document.write("f.<br>");
if (modulos.has("DAW")) {
    document.write(modulos.delete("DAW") + "<br>");
}

document.write("g.<br>");
var mapOrd = new Map([...modulos].sort());

document.write("Mapa ordenado<br>");
for(let elemento of mapOrd){
    document.write(elemento + "<br>");
}
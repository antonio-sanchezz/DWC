const modulos = new Map();

modulos.set("DWECL", ["Desarrollo Web en Entorno Cliente",7,16]).set("DWES", ["Desarrollo Web en Entorno Servidor",8,16]).set("EIE", ["Empresa e Iniciativa Emprendedora",5,13]).set("DWI", ["Desarrollo Web de Interfaz",6,17]).set("DAW", ["Desarrollo de Aplicaciones Web",5,14]);

for(let elemento of modulos){
    document.write(elemento + "<br>");
}
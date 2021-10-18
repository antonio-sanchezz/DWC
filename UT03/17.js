var str = "MLYXAYMZAXmCYmGXmZYxxx";
var str = str.toUpperCase() ;
var vecesRepetido=0;
var letraRepetida='';
function checkDuplicate(str){
    for(var i = 0; i < str.length; i++){
        var re = new RegExp("[^"+ str[i] +"]","g");
        var repetido=str.replace(re, "");
        
        if(repetido.length >= vecesRepetido){
            vecesRepetido=repetido.length;
            letraRepetida=repetido[0];
        }
    }
    return letraRepetida;
}
alert(checkDuplicate(str));
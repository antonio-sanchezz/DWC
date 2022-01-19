window.addEventListener('load', iniciar);

function iniciar() {

    var form = document.getElementById('edadForm');

    var edadField = document.getElementById('edad');

    edadField.addEventListener('blur', function(event) {
        var edad = event.currentTarget.value;
        if (edad >= 18) {
            if (document.getElementById('selectField') == undefined) {
                var selectField = document.createElement('select');
                selectField.setAttribute("id", "selectField");
                var opcion1 = document.createElement('option');
                var text1 = document.createTextNode('DAW');
                selectField.appendChild(opcion1);
                opcion1.appendChild(text1);        
    
                var opcion2 = document.createElement('option');
                var text2 = document.createTextNode('DWC');
                selectField.appendChild(opcion2);
                opcion2.appendChild(text2);
    
                var opcion3 = document.createElement('option');
                var text3 = document.createTextNode('DWES');
                selectField.appendChild(opcion3);
                opcion3.appendChild(text3);
    
                form.appendChild(selectField);
            }

            if (document.getElementById('error') != undefined) {
                document.getElementById('error').remove();
            }

        } else {
            if (document.getElementById('selectField') != undefined) {
                document.getElementById('selectField').remove();
            }
            if (document.getElementById('error') == undefined) {
                var error = document.createElement('p');
                var textError = document.createTextNode('No puede ser menor de edad.');
                error.setAttribute("id", "error");
                error.appendChild(textError);
                form.appendChild(error);
            }
        }
    });

}
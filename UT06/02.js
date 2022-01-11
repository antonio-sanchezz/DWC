window.addEventListener('load', iniciar);

function iniciar() {

    var divSelect = document.getElementById('testdiv');

    var para = document.createElement('p');
    divSelect.appendChild(para);

    var txt1 = document.createTextNode('Texto');
    para.appendChild(txt1);

    var enfasis = document.createElement('em');
    para.appendChild(enfasis);

    var txt2 = document.createTextNode('Enfasis');
    enfasis.appendChild(txt2);

    var txt3 = document.createTextNode('final');
    para.appendChild(txt3);


}
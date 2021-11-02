let sum = (...arguments) =>
{ 
    let suma = 0; 

    for(let i in arguments)
    { 
        suma += arguments[i];
    }

    document.write(suma);
}

sum(2, 3, 1, 4, 5); //15
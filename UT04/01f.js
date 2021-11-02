var num = parseInt(prompt("Escriba un número:"));

let esPerfecto = (n) => {
    var perfecto = false;
    var suma = 0;

    for (i = 1; i < n; i++) {  // i son los divisores. Se divide desde 1 hasta n-1                            
        if (n % i == 0) {
            suma = suma + i;   // si es divisor se suma
        }
    }
    if (suma == n) {           // si el numero es igual a la suma de sus divisores es perfecto                
        perfecto = true;
    }
    
    return perfecto;
}

document.write(esPerfecto(num));
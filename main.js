// Ejemplo 1: Edad actual 

let añoActual = new Date().getFullYear();

let añoNacimiento = prompt("¿En que año naciste?");

let edad = añoActual - añoNacimiento;

alert("Tienes " + edad + " años.");

// Ejemplo 2: Generador de Contraseñas 

let longitud = prompt("Ingrese la longitud de su password: ");
let especiales = prompt("Ingrese la cantidad de simbolos especiales: ");

// String vacio para almacenar la password
let password = "";

// String de posibles caracteres alfanumericos
let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// String de posibles caracteres especiales
let caracteresEspeciales = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Loop basado en "longitud" para agregar random caracteres alfanumericos 
for (let i = 0; i < longitud; i++) {
    password += letras.charAt(Math.floor(Math.random() * letras.length));
}

// Loop basado en "especiales" para reemplazar algunos caracteres por caracteres especiales
for (let i = 0; i < especiales; i++) {
    let replaceAt = Math.floor(Math.random() * password.length);
    password = password.substring(0, replaceAt) + caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length)) + password.substring(replaceAt + 1);
}

alert(password);

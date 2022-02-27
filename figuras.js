// Codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

function perimetroCuadrado(lado) {
    return lado*4;
}

//console.log("El  perimetro del cuadrado es: " + perimetroCuadrado + " cm.");

function areaCuadrado(lado) { 
    return lado*lado;
}

//console.log("El  área del cuadrado es: " + areaCuadrado + " cm2.");

console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + " cm, "
//  + ladoTriangulo2 + " cm, " + baseTriangulo + " cm.");

function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 + lado2 + base;
}

//console.log("El  perimetro del triangulo es: " + perimetroTriangulo + " cm.");
//const alturaTriangulo = 5.5;

function areaTriangulo(base, altura) {
    return (base*altura)/2;
}

//console.log("El  área del triangulo es: " + areaTriangulo + " cm.");

function alturaTriangulo(lado1,lado2,base) {
    return Math.sqrt(lado1*lado2-((base/2)*(base/2))) ;
}

console.groupEnd();

//Codigo cirulo

console.group("Circulo");
// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm.");

// Diametro
function diametroCirculo(radio) {
    return radio*2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + " cm.");

// Pi
const pi = Math.PI;
//console.log("El valor de PI es: " + pi + " cm.");
// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro*pi;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo + " cm.");

// Área

function areaCirculo(radio) {
    return (radio*radio)*pi;
}
//console.log("El area del circulo es: " + areaCirculo + " cm2.")

console.groupEnd();

// Para calcular los valores del cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert (area);
}

// Para calcular los valores del Triangulo

function calcularPerimetroTriangulo() {
    let value1 = parseInt(document.getElementById("inputT-Lado1").value);
    let value2 = parseInt(document.getElementById("inputT-Lado2").value);
    let valueB = parseInt(document.getElementById("inputT-Base").value);

    let perimetro = perimetroTriangulo(value1,value2,valueB);
    alert (perimetro);
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputT-Base");
    const inputA = document.getElementById("inputT-altura");
    const valueA = input3.value;
    const valueB = inputA.value;

    const area = areaTriangulo(valueA,valueB);
    alert (area);
}

function calcularAlturaTriangulo() {
    let value1 = parseInt(document.getElementById("inputT-Lado1").value);
    let value2 = parseInt(document.getElementById("inputT-Lado2").value);
    let valueB = parseInt(document.getElementById("inputT-Base").value);

    var hipotenusa = value1+value2;


    if (hipotenusa >= valueB) {   
        if (value1==value2){
            let altura = alturaTriangulo(value1,value2,valueB);
            alert ("Es un triangulo isoseles y su altura es "+ altura);
        } else {
            alert ("No es un triangulo isoseles");
        }
    } else {
        alert("Esto no es un triangulo");
    }    
}
// Para calcular los valores del Circulo

function calcularPerimetroCirculo() {
    const inputR = document.getElementById("inputRadio");
    const valueR = inputR.value;

    const perimetro = perimetroCirculo(valueR);
    console.log(perimetro);
    alert (perimetro);
}

function calcularAreaCirculo() {
    const inputR = document.getElementById("inputRadio");
    const valueR = inputR.value;

    const area = areaCirculo(valueR);
    alert (area);
}


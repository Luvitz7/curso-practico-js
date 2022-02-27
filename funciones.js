let lista = [];
let promedioLista = 0;
let mediana = 0;
let moda = 0;

function listaA() {
    let value = document.getElementById("lista").value;
    console.log(value)
    lista = Array.from(value.split(','),Number);
    console.log(lista);
    return lista;
}

// Sumar Listas

function sumalista(lista) {
    const sumalista = lista.reduce( function (valorAcomulado = 0, nuevoElemento) {
        return valorAcomulado + nuevoElemento;
        }
    );
    return sumalista;
}

// Calcular promedio

function calcularMediaAritmetica (lista) {
//    let sumalista = 0;
//    for (let i=0; i < lista.length; i++){
//        sumalista = sumalista + lista[i];
//    }
    promedioLista = sumalista(lista)/lista.length;
    return promedioLista;
}

// Ordenar Arrays

function listaOrdenada(lista){
    lista.sort(function(a, b) {
        return a - b;
    });
    const listaOrdenada = lista;
    return listaOrdenada;
}

// Identificar Pares o Nones

function esPar (numerito) {
    if (numerito % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

// Calcular Mediana

function calcularMediana (lista) {

    esPar(lista);

    let mitadLista = parseInt(listaOrdenada(lista).length / 2);

    if (esPar(listaOrdenada(lista).length)) {
    //    let promedioMediana = sumalista/lista.length;
        let sumaMediana = [parseInt(listaOrdenada(lista)[mitadLista-1]),parseInt(listaOrdenada(lista)[mitadLista])];
        mediana = sumaMediana.reduce((a, b) => (a + b)/2 );
        return mediana;
    } else {
        mediana = parseInt(listaOrdenada(lista)[mitadLista]);
        return mediana;
    }
}

// Contar Moda

function contarModa(lista) {
    const listaCount = {}

    lista.map (
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    return listaCount;
}    

// Calcular Moda

function calcularModa (lista) {

    const listaArray = Object.entries(contarModa(lista)).sort (
        function (valorAcomulado, nuevoElemento) {
            return valorAcomulado[1] - nuevoElemento[1];
        }
    )
    moda = listaArray[listaArray.length-1][0];
    return moda;
}

function printList () {
    const datos = lista;
//    for (let i=0; i < datos.length; i++ ){
//        console.log((i+1)+ ".- "+ datos[i]); 
//    }
//    for (let i=0; i < datos.length; i++ ){
//        listaDatos.innerHTML += `<li>${datos[i]}</li>`
//    }
    const fragment = document.createDocumentFragment();
        for (let i=0; i < datos.length; i++ ){
        const itemList = document.createElement('LI');
        itemList.textContent = datos[i];
        fragment.appendChild(itemList);
        }
    listaDatos.appendChild(fragment);   
}

function erraseList () {
    const listaDatos = document.getElementById("listaDatos")
        while (listaDatos.firstChild) {
            listaDatos.removeChild(listaDatos.firstChild);
        }
}

function onClickButtonBorrar() {
    erraseList();
    lista = [];
}

function onClickButtonAdd () {
    const dato = parseInt(document.getElementById("dato").value);
    const resultP = document.getElementById("resultP");
    if (dato < 0 || dato > 0 ) {
    lista.push(dato);
    erraseList();
    printList();
    return lista;
    } else {
        resultP.innerText = "Ingresa un dato"
    }
}

function onClickButtonTransform () {
    const dato = parseInt(document.getElementById("dato").value);
    const position = parseInt(document.getElementById("position").value);
    const resultP = document.getElementById("resultP");
    if (dato < 0 || dato > 0 && position > 0) {
    lista[position-1] = dato;
    erraseList();
    printList();
    return lista;
    } else {
        resultP.innerText = "Ingresa un dato"
    }
}

function onClickButtonErrase () {
    const position = parseInt(document.getElementById("position").value);
    lista[position-1] = lista.pop();
    console.log(lista);    
    erraseList();
    printList();
    return lista;
}

function onClickButtonPromedio() {
    if (lista != 0) {
        console.log("La lista ya existe")
    } else {
        listaA ();
    }
    erraseList();
    printList();
    const promedio = calcularMediaAritmetica(lista);
    const resultP = document.getElementById("resultP");
    resultP.innerText ="El promedio es: "+promedio;
}

function onClickButtonModa() {
    if (lista != 0) {
        console.log("La lista ya existe")
    } else {
        listaA ();
    }

    erraseList();
    printList();
    const moda = calcularModa(lista);
    const resultP = document.getElementById("resultP");
    resultP.innerText ="La moda es: "+moda;
}

function onClickButtonMediana() {
    if (lista != 0) {
        console.log("La lista ya existe")
    } else {
        listaA ();
    }

    erraseList();
    printList();
    const mediana = calcularMediana(lista);
    const resultP = document.getElementById("resultP");
    resultP.innerText ="La mediana es: "+mediana;
}
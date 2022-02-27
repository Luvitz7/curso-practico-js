var salariosNew = [];

function backUp () {
    salariosNew = mexico;
    return salariosNew;
}


function calcularMedianaSalarial (salariosNew) {
    const salariosMex = salariosNew.map (({salary}) => salary ) ;

    var salarioMexSorted = salariosMex.sort (
    function name(salarioA , salarioB) {
        return salarioA - salarioB;
    }
    );

    esPar(salarioMexSorted);

    let mitadLista = parseInt(salarioMexSorted.length / 2);
    let mediana;

    if (esPar(salarioMexSorted.length)) {
    //    let promedioMediana = sumalista/lista.length;
        let sumaMediana = [parseInt(salarioMexSorted[mitadLista-1]),parseInt(salarioMexSorted[mitadLista])];
        mediana = calcularMediaAritmetica(sumaMediana)
        return mediana;
    } else {
        mediana = parseInt(salarioMexSorted[mitadLista]);
        return mediana;
    }
}

function calculaPromedioSalarial (salariosNew) {
    const salariosMex = salariosNew.map (({salary}) => salary ) ;

    var salarioMexSorted = salariosMex.sort (
    function name(salarioA , salarioB) {
        return salarioA - salarioB;
    });

    let promedio = sumalista(salarioMexSorted)/salarioMexSorted.length;
    return promedio;
}

function medianaTop10 (salariosNew) {
    const salariosMex = salariosNew.map (({salary}) => salary ) ;

    var salarioMexSorted = salariosMex.sort (
    function name(salarioA , salarioB) {
        return salarioA - salarioB;
    }
    );
    const spliceStart = parseInt(salarioMexSorted.length*.9);
    const spliceCount = salarioMexSorted.length - spliceStart;
    const salarioMexTop10 = calcularMedianaSalarial(salarioMexSorted.splice(spliceStart, spliceCount));
    return salarioMexTop10;
}


function printListMex () {
    const listaDatos = document.getElementById("listaDatosMex");
    const listaORD = salariosNew.sort(function(a, b) {
        return a.salary - b.salary    
    });

    const fragment = document.createDocumentFragment();
        for (let i=0; i < listaORD.length; i++ ){
        const itemList = document.createElement('LI');
        itemList.textContent = listaORD[i].name+': ' + listaORD[i].salary;
        fragment.appendChild(itemList);
        }
    listaDatos.appendChild(fragment);   
}

function switchFormula () {
    const f = document.getElementById('selectOperation').value;
    const btn = document.getElementById('btn-render');
    switch (f) {
        case '1':
           btn.setAttribute('onclick', 'addPeople();');
            btn.innerText = 'Registra persona'
            break;
        case '2':
            btn.setAttribute('onclick', 'transformPeople();');
            btn.innerText = 'Modificar'
            break;
        case '3':
            btn.setAttribute('onclick', 'popPeople();');
            btn.innerText = 'Eliminar'
            break;
        case '4':
            btn.setAttribute('onclick', 'erraseAll();');
            btn.innerText = 'Borra todo'
            break;                
    }
}


function erraseAll() {
    deleteList();
    while (salariosNew.length > 0) {
        salariosNew.pop();
    }
}

// Agrega Personas

function addPeople() {
    let newName = document.getElementById("name").value;
    let newSalary = parseInt(document.getElementById("salary").value);
    const resultPMex = document.getElementById("resultPMex");

    if (newName !== '' && newSalary != isNaN) {
        salariosNew.push({
            name: newName,
            salary: newSalary,
        });
        deleteList();
        printListMex();
        resultPMex.innerText ="Se agrego a la lista ";
    } else  {    
        resultPMex.innerText ="Revisa los datos introducidos";
    }
}

// Modifica Personas

function transformPeople () {
    let newName = document.getElementById("name").value;
    let newSalary = parseInt(document.getElementById("salary").value);
    const position = parseInt(document.getElementById("positionS").value);
    const resultPMex = document.getElementById("resultPMex");
    if (newName !== '' && newSalary != isNaN && position > 0 && position <= salariosNew.length) {
    salariosNew[position-1].name = newName;
    salariosNew[position-1].salary = newSalary;
    deleteList();
    printListMex();
    return newSalary;
    } else {
        resultPMex.innerText = "Verifica los datos ingresados"
    }
}

// Borra elementos

function popPeople () {
    const position = parseInt(document.getElementById("positionS").value);
    salariosNew[position-1] = salariosNew.pop();
    console.log(salariosNew);    
    deleteList();
    printListMex();
    return salariosNew;
}

// Borra la lista

function deleteList () {
    const listaDatosS = document.getElementById("listaDatosMex")
        while (listaDatosS.firstChild) {
            listaDatosS.removeChild(listaDatosS.firstChild);
        }
}

// Cambia los los valores del boton basado en el select

function switchFormulaCalc () {
    const fc = document.getElementById('selectOperationCalc').value;
    const btn = document.getElementById('calcButton');
    switch (fc) {
        case 'promedio':
           btn.setAttribute('onclick', 'calculaPromedioSalary();');
            btn.innerText = 'Calcula el Promedio'
            break;
        case 'media':
            btn.setAttribute('onclick', 'calculaMedianaSalary();');
            btn.innerText = 'Calcula la mediana'
            break;
        case 'medianaTop10':
            btn.setAttribute('onclick', 'calculaMedianaTop10();');
            btn.innerText = 'Mediana Top 10'
            break;
    }
}

// funcion del check box para borrar y usar la lista predeterminada

function checkBoxF () {
    const boxchecked = document.getElementById('checkBoxPre').value;
    if (boxchecked == "OFF") {
        backUp();
        printListMex();
        document.getElementById('checkBoxPre').setAttribute('value', 'ON'); 
    } else if (boxchecked == "ON") {
        document.getElementById('checkBoxPre').setAttribute('value', 'OFF');
        deleteList();
    }    
}

function calculaPromedioSalary() {
    const resultPMex = document.getElementById("resultPMex");
    if (salariosNew.length === 0) {
        resultPMex.innerText ="La lista esta vacia";
    } else {
    deleteList();
    printListMex();
    const promedio = calculaPromedioSalarial(salariosNew);
    resultPMex.innerText ="El promedio es: "+promedio;
    }
}

function calculaMedianaSalary() {
    const resultPMex = document.getElementById("resultPMex");
    if (salariosNew.length === 0) {
        resultPMex.innerText ="La lista esta vacia";
    } else {
        deleteList();
        printListMex();
        const mediana = calcularMedianaSalarial(salariosNew);
        resultPMex.innerText ="La mediana es: "+mediana;
    }    
}

function calculaMedianaTop10() {
    const resultPMex = document.getElementById("resultPMex");
    if (salariosNew.length === 0) {
        resultPMex.innerText ="La lista esta vacia";
    } else {
    deleteList();
    printListMex();
    const medianaTop = medianaTop10(salariosNew);
    resultPMex.innerText ="La mediana es: "+medianaTop;
    }
}
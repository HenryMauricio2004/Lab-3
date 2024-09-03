
const plus = (n1, n2) => {
    return n1 + n2;
};
const subtract = (n1, n2) =>{
    return n1 - n2
} ;
const multiply = (n1, n2) =>{
    return n1 * n2;
} ;
const split = (n1, n2) => {
    return n1/n2;
};

const convertInput = (input) =>{
    
    if (input.match(/^[0-9]*$/) || input.match(/^[-][0-9]*$/)){
        return Number(input);
    }
    else
    {
        return null;
    }
}

const requestNumber = () => {
    
    let n1 = null;
    let n2 = null;

    do{
        n1 = convertInput(prompt("Ingrese un numero:"));

        if (n1 == null){
            alert("valor no valido, solo numeros son permitidos");
        }
    }while (n1 == null);


    do{
        n2 = convertInput(prompt("Ingrese otro numero:"));

        if (n2 == null){
            alert("valor no valido, solo numeros son permitidos");
        }
    }while (n2 == null);

    selectOperation(n1, n2);

};

const selectOperation = (n1, n2) => {
    
    let resultado;
    let operacion;

    let seleccion = Number(prompt("Seleccione la accion que desea ejecutar:\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division"));
    
    switch (seleccion) {
        case 1:
            operacion = "+";
            resultado = plus(n1, n2);
            break;
        case 2:
            operacion = "-";
            resultado = subtract(n1, n2);
            break;
        case 3:
            operacion = "*";
            resultado = multiply(n1, n2);
            break;
        case 4:
            if(n2 != 0){
                operacion = "/";
                resultado = split(n1, n2);
            } else {
                alert("Dividir entre 0 es una operacion no valida!");
                return 0;
            }
            break;
        
        default:
            alert("Seleccion no valida");
            break;
    }

    alert(`${n1} ${operacion} ${n2} = ${resultado} `);
};

const main = () => {
    requestNumber();
}

main();

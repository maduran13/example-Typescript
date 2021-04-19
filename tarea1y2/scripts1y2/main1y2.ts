let op1: number = 10;
let op2: number = 15;
console.log(`mis variables iniciales son ${op1} y ${op2}`);

op1++;
op2+=4;
console.log(`Mis varibales finales son ${op1} y ${op2}`);

let result: number = op1/op2;
console.log(`Resultado: ${result}`);
console.log(`Rsultado : ${result.toPrecision(2)}`);

let varTipoDesconocido: any;
console.log(`variable tiene valor ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`);
varTipoDesconocido = "Ahora es un texto";
console.log(`variable tiene valor ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`);
varTipoDesconocido = 2.8;
console.log(`variable tiene valor ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`);

let varTipoIndefinido: undefined;

let varVoid: void = undefined;
console.log(`variable tiene valor: ${varVoid} y es de tipo ${typeof(varVoid)}`);

function imprimirMensaje(): void{
    console.log("Mensjae genèrico");
}

function imprimirMensaje2(msj:string): void {
    console.log(msj);
}

imprimirMensaje();
imprimirMensaje2("Mensaje parametro");

function sumar(op1:number,op2:number):number{
    return op1+op2;
}

var fSumar = sumar;
console.log(sumar(10,15));
console.log(fSumar(20,25));

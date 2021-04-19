"use strict";
var op1 = 10;
var op2 = 15;
console.log("mis variables iniciales son " + op1 + " y " + op2);
op1++;
op2 += 4;
console.log("Mis varibales finales son " + op1 + " y " + op2);
var result = op1 / op2;
console.log("Resultado: " + result);
console.log("Rsultado : " + result.toPrecision(2));
var varTipoDesconocido;
console.log("variable tiene valor " + varTipoDesconocido + " y es de tipo " + typeof (varTipoDesconocido));
varTipoDesconocido = "Ahora es un texto";
console.log("variable tiene valor " + varTipoDesconocido + " y es de tipo " + typeof (varTipoDesconocido));
varTipoDesconocido = 2.8;
console.log("variable tiene valor " + varTipoDesconocido + " y es de tipo " + typeof (varTipoDesconocido));
var varTipoIndefinido;
var varVoid = undefined;
console.log("variable tiene valor: " + varVoid + " y es de tipo " + typeof (varVoid));
function imprimirMensaje() {
    console.log("Mensjae genèrico");
}
function imprimirMensaje2(msj) {
    console.log(msj);
}
imprimirMensaje();
imprimirMensaje2("Mensaje parametro");
function sumar(op1, op2) {
    return op1 + op2;
}
var fSumar = sumar;
console.log(sumar(10, 15));
console.log(fSumar(20, 25));

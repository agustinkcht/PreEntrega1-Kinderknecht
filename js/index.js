alert("Estás por iniciar una operación para pedir un préstamo. El mismo deberá ser devuelto con una tasa de interés del 16% anual. Aceptando, iniciarás la operación.")



let nombreCliente = prompt("Ingrese su nombre")
while (nombreCliente === "" || nombreCliente === " ") {
    alert("Debes completar el campo solicitado para poder continuar.")
    nombreCliente = prompt("Ingrese su nombre")
}


let apellidoCliente = prompt ("Ingrese su apellido")
while (nombreCliente === "" || nombreCliente === " ") {
    alert("Debes completar el campo solicitado para poder continuar.")
    nombreCliente = prompt("Ingrese su nombre")
}

console.log("Nombre y Apellido: " + nombreCliente + " " + apellidoCliente)





let dniCliente = prompt ("Ingrese su DNI") 
while (isNaN(dniCliente)) {
    alert("Debes ingresar un número válido.")
    dniCliente = prompt ("Ingrese su DNI") 
}

console.log("DNI: " + dniCliente)




let montoPrestamo = prompt ("Ingrese el monto que desea solicitar. Mínimo 10000, máximo 1000000.")
while (montoPrestamo < 10000 || montoPrestamo > 1000000 || isNaN(montoPrestamo)) {
    alert("Debe ingresar un número valido. Por favor, ingrese un monto de entre 10000 y 1000000.")
    montoPrestamo = prompt ("Ingrese el monto que desea solicitar. Mínimo 10000, máximo 1000000.")
}

console.log("Monto Solicitado: " + montoPrestamo)




let cuotasPrestamo = prompt ("¿En cuántas cuotas desea devolver el préstamo? Opciones: 3, 6, 12, 24 y 48.")
while ( cuotasPrestamo != 3 && cuotasPrestamo != 6 && cuotasPrestamo !=12 && cuotasPrestamo != 24 && cuotasPrestamo != 48 ) {
    alert("Debes ingresar un plazo válido. Las opciones son 3, 6, 12, 24 y 48 cuotas.")
    cuotasPrestamo = prompt ("¿En cuántas cuotas desea devolver el préstamo? Opciones: 3, 6, 12, 24 y 48.")
}

console.log("Cuotas: " + cuotasPrestamo)




function montoInteres (montoPrestamo, cuotasPrestamo, tI1, tI2, tI3, tI4, tI5) {

    switch (cuotasPrestamo) {
        case "3":
            return montoPrestamo * tI1
            break;
        case "6":
            return montoPrestamo * tI2
            break;
        case "12":
            return montoPrestamo * tI3
            break;
        case "24":
            return montoPrestamo * tI4
            break;
        case "48":
            return montoPrestamo * tI5
            break;    
    }
}

let montoDevolver = montoInteres (montoPrestamo, cuotasPrestamo, 1.053, 1.08, 1.16, 1.32, 1.64)

console.log("Monto a devolver: " + montoDevolver)




function calculoCoutas (cuotasPrestamo, montoDevolver, c3, c6, c12, c24, c48 ) {

    switch(cuotasPrestamo) {
        case "3":
            return montoDevolver / c3
            break;

        case "6":
            return montoDevolver / c6
            break;

        case "12":
            return montoDevolver / c12
            break;

        case "24":
        return montoDevolver / c24
        break;

        case "48":
            return montoDevolver / c48
            break;
    }   
}

let valorCuota = calculoCoutas(cuotasPrestamo, montoDevolver, 3, 6, 12, 24, 48)

console.log("Valor Cuota: " + parseInt(valorCuota))




let confirmar = prompt("Usted " + nombreCliente + " " + apellidoCliente + " con DNI " + dniCliente + " ha solicitado un préstamo de $" + montoPrestamo + " a ser devuelto en " + cuotasPrestamo + " cuotas de $" + parseInt(valorCuota) + "." + " El total que deberá devolver es de $" + montoDevolver + "." + " Para confirmar y finalizar la operación, escriba ACEPTAR. " + "Si desea cancelar la operación, presione Cancelar.") 

while (confirmar != "ACEPTAR" && confirmar != "Aceptar" && confirmar != "aceptar" && confirmar != null) {

    alert("Debes ingresar una respuesta válida o presionar cancelar")

    confirmar = prompt("Usted " + nombreCliente + " " + apellidoCliente + " con DNI " + dniCliente + " ha solicitado un préstamo de $" + montoPrestamo + " a ser devuelto en " + cuotasPrestamo + " cuotas de $" + parseInt(valorCuota) + "." + " El total que deberá devolver es de $" + montoDevolver + "." + " Para confirmar y finalizar la operación, escriba ACEPTAR. " + "Si desea cancelar la operación, presione Cancelar.") 
}

switch (confirmar) {
    case "ACEPTAR" && "Aceptar" && "aceptar":
        alert("Operación realizada con éxito. Muchas gracias.")
        break;
    case null:
        alert("Usted ha cancelado la operación.")
        break;
}
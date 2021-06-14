/* 3) Dia de paga

En una pizzeria requieren un programa que calcule cuanto cobraran neto los repartides al
final del dia (Todos cobran igual)
Se tienen los siguientes datos obligatorios

repartidores (Cantidad de repartidores, puede ser cualquier numero entero)
esFeriado (true si es Feriado, false si no)
gananciaDelDia (Cuanto recaudo la pizzeria para distribuir a los empleados)
porcentajeParaSueldos (Un porcentaje de gananciaDelDia)
sueldoNetoDeRepartidor (Cuanto gana en bolsillo el repartidor)
gananciaDelComercioFinal (Cuanto gana el comercio una vez pagados los sueldos y
demas)
Se sabe que:
En feriados: porcentajeParaSueldos es del 80% de gananciaDelDia mientras que en
dias normales, es del 65%

 */

//DATOS

const REPARTIDORES = 2

let esFeriado = false
let ganancioDelDia = 5000
let porcentajeParaSueldos = porcentajoParaSueldo(esFeriado)
let sueldoNetoRepartido = calcularGanancia(ganancioDelDia,porcentajeParaSueldos,REPARTIDORES,"repartidor")
let gananciaDElComercioFinal = calcularGanancia(ganancioDelDia,porcentajeParaSueldos,REPARTIDORES,"comercio")

console.log("*********Ganancia de la Pizzeria*********")
console.log("\n")
console.log("La ganancia del día fue" + ganancioDelDia)
console.log("La pizzeria ganó: " + gananciaDElComercioFinal)
console.log("Hay " + REPARTIDORES + " repartidores")
console.log("Cada Repartidor Ganó: " + sueldoNetoRepartido)
if(esFeriado){
    console.log("Recordemos que hoy es Feriado!")
}
else{
    console.log("Recordemos que hoy no es feriado")
}
function calcularGanancia(ganancioDelDia,porcentajeParaSueldos,REPARTIDORES,tipoGanancia){

    let ganancia = 0
    let gananciaGeneralRepartidor = 0
    let gnanaciaComercio = 0
    

    gananciaGeneralRepartidor = (ganancioDelDia * porcentajeParaSueldos) / 100
    gnanaciaComercio = ganancioDelDia - gananciaGeneralRepartidor
    
    if(tipoGanancia === "repartidor"){
        ganancia = gananciaGeneralRepartidor / REPARTIDORES
    }
    if (tipoGanancia === "comercio") {
        ganancia = gnanaciaComercio
    } 

    return ganancia

}

function porcentajoParaSueldo(esFeriado){

    let porcentaje = 0

    if(esFeriado){

        porcentaje = 80
    }
    else{
        porcentaje = 65
    }

    return porcentaje;
}

/* EJERCICIO

Una tienda de ropa desea tener un programa que le permita calcular los aumentos a sus
prendas, para eso se tienen los datos

precioDePrenda (que ronda entre los 1500 y 3000 pesos)
porcentajeDeAumento (que ronda entre el 25-100% )
precioFinal (precioDePrenda con el aumento agregado)

Ademas, implementar las siguiente funcionalidades:

El programa debe informar en pantalla el precio final
El programa debe informar en pantalla 'Precio excedido' cuando el precio final supere los
$4000 */

//DATOS

const PRECIOS_DE_PRENDA = 3000
const PORCENTAJE_DE_AUMENTO = 50

//RESULTADO

let precioFinal = 0

precioFinal = agregarAumento(PRECIOS_DE_PRENDA,PORCENTAJE_DE_AUMENTO)
if( precioFinal => 4000){
    console.log("*********Precio Final de Prenda*********")
    console.log("\n")
    console.log("El valor de la prenda supero los $4000")
    console.log("\n")
    console.log("Valor de Prenda: " + precioFinal)
}
else{
    console.log("*********Precio Final de Prenda*********")
    console.log("\n")
    console.log("Valor de Prenda: " + precioFinal)
}
    

function agregarAumento(precioDePrenda , porcentaje){
    
    let valorDePrenda = 0

    valorDePrenda = precioDePrenda + ((porcentaje * precioDePrenda) / 100)

    return valorDePrenda

}
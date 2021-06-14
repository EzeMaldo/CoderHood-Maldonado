/* 4) La secuencia de Fibonacci

En matemáticas, la sucesión o serie de Fibonacci es la
siguiente sucesión infinita de números naturales:
0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21
La sucesión comienza con los números 0 y 1,a partir de estos
cada término es la suma de sus dos anteriores
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir tantos terminos de la secuencia como repeticions de 0 hasta limite
Ejemplo: si limite = 6, imprimir 0, 1, 1, 2, 3, 5 */

const LIMITE = 10000
let datoAnterior = 0
let datoProximo = 0
let arrayNuerosFibonacci = []

    //VALIDO EL LIMITE DEL PROXIMO VALOR
    while (LIMITE >= datoProximo){
        //SETEO EL PRIMER BUCLE CUANDO ES 0
        if(datoProximo == 0){
            datoProximo = 1
            datoAnterior = 0
            arrayNuerosFibonacci.push(datoAnterior)
        }
        else {
            //ALMACENO EL VALOR DE AHORA
            let valorActual = datoProximo

            //SETEO LOS VALOES PARA EL PROXIMO BUCLE
            datoProximo = valorActual + datoAnterior
            datoAnterior = valorActual
            //MUESTRO POR PANTALLA EL VALOR
            arrayNuerosFibonacci.push(valorActual)
        }
    }
    console.log("Limine de Fibonacci: " + LIMITE )
    console.log("Los numeros de fibonacci son: [" + arrayNuerosFibonacci + "]" )
        
    
/* 1) Las galletitas de Ema
Emanuel quiere cocinar galletitas y quiere un programa que lo ayude a saber que debe
comprar y en caso que cuente con todos los ingredientes, informar que puede cocinar las
galletas. La receta pide los siguientes ingredientes
3 huevos
1 barra de chocolate
0.5 kilos de harina
5 cucharadas de azucar
Los ingredientes que tiene Ema tienen que ser variables al inicio del programa que sean
faciles de editar */

//INGREDIENTES PARA LA RECETA
const HUEVOS_INGREDIENTE = 3
const CHOCOLATE_INGREDIENTE = 1
const HARINA_INGREDIENTE = 0.5
const AZUCAR_INGREDIENTE = 5

//INGREDIENTES QUE TENGO

var huevos = 7
var chocolate = 3
var harina = 3
var azucar = 13

//validaciones

var huevosValido = true
var chocolateValido = true
var harinaValido = true
var azucarValido = true

//contador de galletiras
var galletitas = 0 
    
    //valido por primera vez si tiene para hacer galletitas
    if( huevos >= HUEVOS_INGREDIENTE && chocolate >= CHOCOLATE_INGREDIENTE && harina >= HARINA_INGREDIENTE && azucar >= AZUCAR_INGREDIENTE){

        //bucle para saber cuantas galletitas hace
        while(huevosValido && chocolateValido && harinaValido && azucarValido){

            //valido los huevos
            if(huevos < HUEVOS_INGREDIENTE){
                huevosValido = false
            }
           
            //valido los chocolates
            if(chocolate < CHOCOLATE_INGREDIENTE){ 
                chocolateValido = false
            }
            
            //valido las harinas
            if(harina < HARINA_INGREDIENTE){
                harinaValido = false
            }
           
            //valido las cucharas de  azucar
            if(azucar < AZUCAR_INGREDIENTE){  
                azucarValido = false
            }

            //chekeo de que tengas todos los ingredientes para hacer una galletita
            if(huevosValido && chocolateValido && harinaValido && azucarValido){
                //resto los ingredientes para hacer la galletita
                huevos = huevos - HUEVOS_INGREDIENTE
                chocolate = chocolate - CHOCOLATE_INGREDIENTE
                harina = harina - HARINA_INGREDIENTE
                azucar = azucar - AZUCAR_INGREDIENTE
                // creo la galletita
                galletitas++
            }
           
        }
        console.log("*********Galletitas*********")
        console.log("\n")
        
        //mando el mensaje si hizo más de 1 galletita, para enviar el mensaje en plural
        if(galletitas > 1){
            console.log("Hiciste " + galletitas + " galletitas!!")
        }
        //mando el mensaje si hizo 1 sola galletita, para enviar el mensaje en singular
        else{
            console.log("Hiciste " + galletitas + " galletita!!")            
        }
        console.log("\n")
        
        console.log("*********Ingredientes Sobrantes*********")
        console.log("\n")
        

        console.log("Huevos: " + huevos)
        console.log("Chocolate: " + chocolate)
        console.log("Harina: " + harina)
        console.log("Azucar: " + azucar)
        
        

    }
    else{
        console.log("No tenes Ingresientes para Galletitas")
    }

   

    

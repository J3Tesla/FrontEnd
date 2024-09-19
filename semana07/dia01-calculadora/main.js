//console.log("hola JS")


let numeroActual = "0"
let operador = "" // + * - /
let operando = "" // 9 8 47 5, cualquier numero

const inputDisplay = document.querySelector(".display") // llamar a 1 elemento

const buttons = document.querySelectorAll("button")// traer todo los botones del tipo button


buttons.forEach(function(button){
    //console.log(button.textContent)

    button.addEventListener("click",function(event){// 2 partes(evento, function)
        //console.log(button.textContent)

        const buttonSelected = event.target // propiedad de botton
        const buttonText = buttonSelected.textContent // propiedad de texto para saber cual es
        
        //console.log(buttonText)

        if("+-*".includes(buttonText)){
            //console.log("presionaste el operador", buttonText)
            // Asigno el operador Actual
            operador = buttonText
            operando = Number(numeroActual) // guardo la variable anterior a 0
            numeroActual = "0"
        } else if(buttonText === "="){
            //console.log("presionaste signo igual", buttonText)
            // aqui se realiza las operaciones matematicas
            if(operador === "+"){
                numeroActual = Number(operando) + Number(numeroActual)

            }
            if(operador === "-"){
                numeroActual = Number(operando) - Number(numeroActual)

            }
            if(operador === "*"){
                numeroActual = Number(operando) * Number(numeroActual)

            }

        } else if(buttonText === "AC"){
            //console.log("presionaste AC", buttonText)
            numeroActual = "0"
            operador = ""
            operando = ""
        } else{
            //console.log("presionaste el numero", buttonText)
            numeroActual = numeroActual + buttonText
        }

        inputDisplay.value = Number(numeroActual)
    })
})
//console.log(buttons)
//console.log(inputDisplay)
//inputDisplay.value = 10;
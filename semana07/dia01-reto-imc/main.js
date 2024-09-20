
let pesoActual = ""
let alturaActual = ""

//const inputPeso = document.querySelector("#Peso")
const inputPeso = document.getElementById("Peso")
//const inputAltura = document.querySelector("#Altura")
const inputAltura = document.getElementById("Altura")
//const buttons = document.querySelector("#calcular")
const buttonCalcular = document.getElementById("calcular")
const sectionResultado = document.getElementById("resultado")
//const outputResultado = document.querySelector("resultado")

//console.log(inputPeso.value)

buttonCalcular.addEventListener("click", function(event){
    //console.log("click")

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    console.log(peso, altura)
    /* Baja: < 18.5
    * Normal: < 18.5 - 24.9
    * Sobrepeso: < 25 - 29.9 
    * Obeso: > 30*/
    /*IMC = peso / altura * altura */
    const IMC = (peso/((altura/100)**2))
    //console.log(IMC)
    if(IMC.toFixed(2)<18.5){
        sectionResultado.textContent = "Tu indice de Masa Corporal es BAJA"

    }else if(IMC.toFixed(2)>18.5 && IMC<24.9){
        sectionResultado.textContent = "Tu indice de Masa Corporal es NORMAL"

    }else if(IMC.toFixed(2)>=25 && IMC<= 29.9){
        sectionResultado.textContent = "Tu indice de Masa Corporal es SOBREPESO"
   
    }else if(IMC.toFixed(2)>=30){
        sectionResultado.textContent = "Tu indice de Masa Corporal es OBESO"
    }

    inputPeso.value = " "
    inputAltura.value = " "
})